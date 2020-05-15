import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbPanelChangeEvent, NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

import { map, mergeMap } from 'rxjs/operators';
import { DataTransferService } from '.././data-transfer.service';
import { Observable } from 'rxjs';


import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

import PubSub from '@aws-amplify/pubsub';
import API from '@aws-amplify/api';
import awsmobile from '../../aws-exports';

Amplify.configure(awsmobile);
PubSub.configure(awsmobile)

import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';

import Amplify, { Auth } from 'aws-amplify';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-verbatim',
  templateUrl: './verbatim.component.html',
  styleUrls: ['./verbatim.component.css']
})
export class VerbatimComponent implements OnInit {
  loading = true;
  error: any;
  empty: boolean = false;
  start = String;
  end= String; 
  text = '';
  dates=[];
  finalDates= [];
  discourseDetails = [];
  getTopics = [];
  p: number = 1;

  @ViewChild('myaccordion', {static : true}) accordion: NgbAccordion;
  constructor(private data: DataTransferService,private apollo: Apollo) { }
  isOn: boolean;

  createVerbatimView(){
    this.loading = true;
    this.discourseDetails= [];
    this.apollo
      .query<any>({
        query: gql`
            query listDiscourseData($start: String!, $end: String!, $region: String!) {
              listDiscourseData (start: $start, end: $end, region: $region){
              discourse_id
              platform_desc
              created_time
              level0
              comment
              level1
              level2
              level3
              isPost
              post_id
              region
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
          this.discourseDetails = data && data.listDiscourseData;
          this.getTopicsName(this.discourseDetails);
        },error => {
          this.error = error;
          console.log("error is: ", error);
        }
      ).add(() => {
        if (this.discourseDetails.length!=0){
          this.empty = false;
         }
         else {
           this.empty = true;
           this.loading = false;
         }
      })

  }

  getTopicsName(topicData) {
    this.apollo
      .query<any>({
        query: gql`
            query getTopicsComment($discourse_id: Int) {
              getTopicsComment (discourse_id: $discourse_id){
                topic
            }
          }
        `, 
        variables: {
          discourse_id: topicData.discourse_id
        }
      }).subscribe(
        ({ data, loading }) => {
          this.getTopics = data && data.getTopicsComment;
          console.log("getting the list of topics for selected search", this.getTopics);
        },error => {
          //show error
          console.log("error is: ", error);
        }
      )
  }
 
  ngOnInit(): void {
    this.isOn = true;
    this.data.share.subscribe(x=>
      {
        if(this.text!= x){
          this.loading = true;
          this.text=x;
          this.dates = this.text.split(' to ');
          
          this.start = this.dates[0];
          this.end = this.dates[1];
          this.createVerbatimView();
        }
      });
  }
  beforeChange($event: NgbPanelChangeEvent) {
    console.log($event.panelId);
    if ($event.panelId === 'panelOne') {
      $event.preventDefault();
    }
 
    if ($event.panelId === 'panelTwo' && $event.nextState === false) {
      $event.preventDefault();
    }
  }
}
