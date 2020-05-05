import { Component, ViewChild, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { NgModel } from "@angular/forms";
import {
  NgbDateStruct,
  NgbCalendar,
} from '@ng-bootstrap/ng-bootstrap';
import { map, mergeMap } from 'rxjs/operators';
import { DataTransferService } from '.././data-transfer.service';
import { Observable } from 'rxjs';
// import { pluck } from 'rxjs/operators';

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

declare var $: any;

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit{
  model: any;
  loading = true;
  error: any;
  topics= [];
  selectedTopics: boolean = true;
  start = String;
  end= String;
  listHashtags = [];
  listTrendingTopics = [];
  selectedData: any;
  option: string;

  p: number = 1;

  empty: boolean = false;
  //Variables for assigning weight to tag cloud:

  minWeight = 1;
  maxWeight = 20;

  text = '';
  dates=[];
  finalDates= [];
  constructor(private data: DataTransferService,private calendar: NgbCalendar, element: ElementRef, private renderer: Renderer2, private apollo: Apollo) {
  } 

  functionGetTrendingData (topicHashtag){
    let finalTrending = [];

    let length =  topicHashtag.length
    let MaxViewed = topicHashtag[0].counts;
    let MinViewed = topicHashtag[length-1].counts;

    if(MaxViewed!= MinViewed){
      for(let counts in topicHashtag){
        var fontsize  = (this.minWeight+((topicHashtag[counts].counts - MinViewed)* (this.maxWeight - this.minWeight ) / ( MaxViewed - MinViewed )));
        if(topicHashtag[0].hasOwnProperty("hashtag")){
          finalTrending.push({
            text: topicHashtag[counts].hashtag,
            weight: Math.round(fontsize),
          });
        }
        else {
          finalTrending.push({
            text: topicHashtag[counts].topic,
            weight: Math.round(fontsize),
          });
        }
      }
    }
    this.loading = false;
    setTimeout(function () { 
      $("#trending-topics").jQCloud(finalTrending);
     }, 500);
  }


  getTrendingTopics () {
    this.loading = true;
    $("#trending-topics").find('span').remove();
    this.listTrendingTopics= [];
    this.selectedTopics = true;
    this.apollo
      .query<any>({
        query: gql`
        query listTrendingTopicsMaster($start: String!, $end: String!, $region: String!) {
            listTrendingTopicsMaster(start: $start, end: $end, region: $region){
              topic
              counts
              sentiment
              positive
              negative
              neutral
            }
          }
        `,
        variables: {
          start: this.start,
          end: this.end,
          region: "King County"
        }
      }
      
      
      )
      .subscribe(
        ({ data, loading }) => {
          this.listTrendingTopics = data && data.listTrendingTopicsMaster;
          this.listTrendingTopics.length === 0 ? this.empty = true : this.empty = false;
        },error => {
          this.error = error;
          console.log("error is: ", error);
        }
      ).add(() => {
         if (this.listTrendingTopics.length!=0){
          this.empty = false;
          this.functionGetTrendingData(this.listTrendingTopics);
         }
         else {
           this.empty = true;
           this.loading = false;
         }
          
      })
  }

  getHashtags(){
    this.loading = true;
    $("#trending-topics").find('span').remove();
    this.selectedTopics = false;
    this.listHashtags= [];
    this.apollo
      .query<any>({
        query: gql`
            query listTrendingHashtags($start: String!, $end: String!) {
              listTrendingHashtags (start: $start, end: $end){
              counts
              sentiment
              negative
              neutral
              positive
              hashtag
              start_date
            }
          }
        `, 
        variables: {
          start: this.start,
          end: this.end
        }
      })
      .subscribe(
        ({ data, loading }) => {
          this.listHashtags = data && data.listTrendingHashtags;
        },error => {
          this.error = error;
          console.log("error is: ", error);
        }
      ).add(() => {
        if (this.listHashtags.length!=0){
          this.empty = false;
          this.functionGetTrendingData(this.listHashtags);
         }
         else {
           this.empty = true;
           this.loading = false;
         }
      })
  }
  

  ngOnInit() {
    //word list data structure:  { text: "Lorem", weight: 13, link: "https://github.com/DukeLeNoir/jQCloud" },
    this.data.share.subscribe(x=>
      {
        if(this.text!= x){
          this.text=x;
          this.dates = this.text.split(' to ');
          
          this.start = this.dates[0];
          this.end = this.dates[1];
          $("#trending-topics").find('span').remove();
          this.selectedTopics ? this.getTrendingTopics() : this.getHashtags();
        }
      });
    }

  updateClicked(selectedData){
    this.data.updateClickedData(selectedData);
  }

}
