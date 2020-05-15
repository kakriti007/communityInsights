import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, ViewChild, ElementRef, VERSION, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';


import * as d3plus from './../d3plus.full';

import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

import PubSub from '@aws-amplify/pubsub';
import API from '@aws-amplify/api';

import awsmobile from '../../aws-exports';

Amplify.configure(awsmobile);
PubSub.configure(awsmobile)

import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';

import Amplify, { Auth } from 'aws-amplify';

import { DataTransferService } from '.././data-transfer.service';
import { Observable } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-tree-map',
  templateUrl: './tree-map.component.html',
  styleUrls: ['./tree-map.component.css']
})
export class TreeMapComponent implements OnInit {
 treemapdata : [];
  @ViewChild('test', {static: false}) test: ElementRef;

  filterChanged: (event: any) => void;
  load= true;
  empty = false;
  start = String;
  end= String;
  text='';
  dates=[];
  error: any;
  hierarchy = ["level0", "level1", "level2", "tag"];
  impactTypes =[];
  depthOption : number = 2;
  constructor(private apollo: Apollo, private data: DataTransferService,) { }

  public filterTypes = [
    { value: 0 },
    { value: 1 },
    { value: 2},
    { value: 3}
  ];


  
  buildTreemap() {
    this.treemapdata =[];
    this.apollo
      .query<any>({
        query: gql`
          query listImpactTree($start: String!, $end: String!, $region: String!) {
            listImpactTree(start: $start, end: $end, region: $region){
              discourse_id
              region
              date
              tag
              level2
              level1
              level0
              source_ontology
              value
            }
          }
        `,
          variables: {
            start: this.start,
            end: this.end,
            region: "King County"
          }
      })
      .subscribe(
        ({ data, loading }) => {
          this.treemapdata = data && data.listImpactTree;
          this.load = false;
          
          $('#treemap').find('svg').remove();
          if(this.treemapdata.length != 0){
            this.empty = false;
            this.impactTypes = [...new Set(data.listImpactTree.map(item => item.source_ontology))];
            this.impactTypes.splice(0, 0,'Select All');
            setTimeout(() => this.makevisualization(this.treemapdata, this.depthOption), 350);
          }
          else this.empty = true;
        },error => {
          this.load = false;
          this.error = error;
          console.log("error is: ", error);
        }
      )
  }

  ngOnInit(): void {
    this.data.share.subscribe(x=>
      {
        if(this.text!= x){
          this.load = true;
          this.text=x;
          this.dates = this.text.split(' to ');
          
          this.start = this.dates[0];
          this.end = this.dates[1];
          this.load = true;
          this.buildTreemap();
        }
      });
  }

  
  makevisualization (visualizationData, depthOption) {
    depthOption = parseInt(depthOption);
    var visualization = new d3plus.Treemap()
        .data(visualizationData)
        .select("#treemap")
        .groupBy(this.hierarchy)
        .depth(depthOption)
        .legend(false)
        .render();
        this.filterChanged = function (event) {
          depthOption = parseInt(event);
          visualization.depth(depthOption).render();
        }
  }
  
  

  filterX (treemapdata, event) {
    return treemapdata.filter(o =>
      Object.keys(o).some(k => o[k].toString().toLowerCase().includes(event.toString().toLowerCase())));

  }

  filterImpactArea(event) {
    $('#treemap').find('svg').remove();
    if(event === 'Select All'){
      this.makevisualization(this.treemapdata, this.depthOption);
    }
    else {
      let newData = this.filterX (this.treemapdata, event);
      this.makevisualization(newData, this.depthOption);
    }
  }
}
