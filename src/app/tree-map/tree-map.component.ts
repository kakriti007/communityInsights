import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, ViewChild, ElementRef, VERSION, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

import * as d3plus from 'd3plus';

import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

import PubSub from '@aws-amplify/pubsub';
import API from '@aws-amplify/api';
import awsmobile from '../../aws-exports';

Amplify.configure(awsmobile);
PubSub.configure(awsmobile)

import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';

import Amplify, { Auth } from 'aws-amplify';

@Component({
  selector: 'app-tree-map',
  templateUrl: './tree-map.component.html',
  styleUrls: ['./tree-map.component.css']
})
export class TreeMapComponent implements OnInit {
 treemapdata : [];
  @ViewChild('test', {static: false}) test: ElementRef;

  filterChanged: (event: any) => void;
  loading: boolean;
  error: any;
  data= [];
  data2=[];
  defaultView = 2;

  constructor(private apollo: Apollo) { }

  public filterTypes = [
    { value: 0 },
    { value: 1 },
    { value: 2},
    { value: 3}
  ];

  ngOnInit(): void {
    
    
    this.apollo
      .query<any>({
        query: gql`
          {
            listImpactTree{
              tag
              level0
              level1
              level2
            }
          }
        `
      })
      .subscribe(
        ({ data, loading }) => {
          this.treemapdata = data;
          for(var i = 0; i<data.listImpactTree.length; i++){
            this.data2.push({
              value: 1,
              level0: data.listImpactTree[i].level0,
              level1: data.listImpactTree[i].level1,
              level2: data.listImpactTree[i].level2,
              tag: data.listImpactTree[i].tag,
          });
        }
        },error => {
          this.loading = false;
          this.error = error;
          console.log("error is: ", error);
        }
      ).add(() => {
        this.makevisualization(this.data2);
      })
  }

  makevisualization (data) {
    let depthOption = 0;
    var visualization = new d3plus.Treemap()
        .data(data)
        .select("#treemap")
        .groupBy(["level0", "level1", "level2", "tag"])
        .depth(2)
        .legend(false)
        .render();
        this.filterChanged = function (event) {
          depthOption = parseInt(event);
          visualization.depth(depthOption).render();
        }
  }
}
