import { Component, ViewChild, OnInit, ElementRef, Renderer2, OnChanges} from '@angular/core';
import { NgModel } from "@angular/forms";
import {
  NgbDateStruct,
  NgbCalendar,
} from '@ng-bootstrap/ng-bootstrap';

import { NgxPaginationModule } from 'ngx-pagination';

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
export class TrendingComponent implements OnInit, OnChanges{
  model: any;
  loading = true;
  error: any;
  topics= [];
  selectedTopics: boolean = true;
  selectedRow = 0;
  setClickedRow : Function;

  start = String;
  end= String;
  listHashtags = [];
  listTrendingTopics = [];
  selectedData: any;
  option: string;
  currentZoom = 3;
  hideZoomOut = false;
  hideZoomIn= false;

  p: number = 1;

  empty: boolean = false;
  //Variables for assigning weight to tag cloud:

  minWeight = 1;
  maxWeight = 20;

  text = '';
  dates=[];
  finalDates= [];
  constructor(private data: DataTransferService,private calendar: NgbCalendar, element: ElementRef, private renderer: Renderer2, private apollo: Apollo) {
    this.setClickedRow = function(index){
      this.selectedRow = index;
    }
  } 

  

  ngOnChanges() {
    this.getTrendingTopics();
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
            classPattern: 'w{20}',
          });
        }
      }
    }

  
    setTimeout(function () { 
      this.loading = false;
      $("#trending-topics").jQCloud(finalTrending)
      500})
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
      })
      .subscribe(
        ({ data, loading }) => {
          this.listTrendingTopics = data && data.listTrendingTopicsMaster;
          this.listTrendingTopics.length === 0 ? this.empty = true : this.empty = false;
          this.loading= false;
        },error => {
          this.error = error;
          console.log("error is: ", error);
        }
      ).add(() => {
         if (this.listTrendingTopics.length!=0){
          this.empty = false;
          this.data.updateClickedData(this.listTrendingTopics[0].topic + ' topic');
          this.functionGetTrendingData(this.listTrendingTopics);
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
            query listTrendingHashtags($start: String!, $end: String!, $region: String!) {
              listTrendingHashtags (start: $start, end: $end, region: $region){
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
          end: this.end,
          region: "King County"
        }
      })
      .subscribe(
        ({ data, loading }) => {
          this.listHashtags = data && data.listTrendingHashtags;
          this.listTrendingTopics.length === 0 ? this.empty = true : this.empty = false;
          this.loading= false;
        },error => {
          this.error = error;

          console.log("error is: ", error);
        }
      ).add(() => {
        if (this.listHashtags.length!=0){
          this.empty = false;
          this.data.updateClickedData(this.listHashtags[0].hashtag + ' hashtag');
          this.functionGetTrendingData(this.listHashtags);
         }
         
      })
  }
  

  ngOnInit() {
    //word list data structure:  { text: "Lorem", weight: 13, link: "https://github.com/DukeLeNoir/jQCloud" },
      
    this.data.share.subscribe(x=>
      {
        this.text=x;
        this.dates = this.text.split(' to ');
        
        this.start = this.dates[0];
        this.end = this.dates[1];
        $("#trending-topics").find('span').remove();
        this.selectedTopics ? this.getTrendingTopics() : this.getHashtags();
        
      });

    
    }

  updateClicked(selectedData){
    this.data.updateClickedData(selectedData);
  }



  zoom(zoomType){
    var element = document.getElementById('trending-topics');
    let zoomArr = [0.75, 0.85, 0.9, 1, 1.2, 1.5, 1.75];
    if(this.currentZoom >= 0 && this.currentZoom <= 6){
      zoomType === 'in' ?  this.currentZoom++ :  this.currentZoom--;
      
      if(this.currentZoom == 0){
        this.hideZoomOut = true;
        this.currentZoom = 0;
      } else this.hideZoomOut = false;

      if(this.currentZoom == 6){
        this.hideZoomIn = true;
        this.currentZoom = 6;
      } else this.hideZoomIn = false;

      element.style['transform'] = `scale(${zoomArr[this.currentZoom]})`
    }
  }

}
