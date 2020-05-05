import { Component, OnInit } from '@angular/core';
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


import * as d3plus from 'd3plus';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  selectedData : any;
  searchValue: any;
  type: any;
  text = '';
  dates=[];
  start = String;
  end = String;
  empty = true;
  topicsChart = [];
  hashtagChart = [];
  constructor(private data: DataTransferService, private apollo: Apollo) { }

  assignColor: (d: any) => void;


  plotChart (chartData){
    function assignColor(d) {
      if (d === 1) return "green";
      if (d === 0) return "goldenrod";
      if (d === -1) return "red";
      return "grey";
    }
  new d3plus.LinePlot()
  .config({
    data: chartData,
    groupBy: "sentiment",
    x: "date",
    y: "counts",
    xConfig: {
      title: "Dates",
      labels: [],
    },
    legendTooltip:{
      tbody: []
    },
    tooltipConfig: {
      title: function(d) {
        return "Sentiment Count:" + d["counts"];
      },
      tbody: [
        ["Date: ", function(d) { return d["date"]}]
      ]
    },
    select: "#chart",
  })
  .render();
  }

  ngOnInit() {
    this.empty = true;
    this.data.share.subscribe(x=>
      {
        if(this.text!= x){
          this.text=x;
          this.dates = this.text.split(' to ');
          this.start = this.dates[0];
          this.end = this.dates[1];
      }
    });
    this.data.sharedData.subscribe (y=>{
      if(this.selectedData!= y){
        this.selectedData=y;
        this.selectedData = this.selectedData.split(' ');
        this.searchValue = this.selectedData[0];
        this.type = this.selectedData[1];
        this.type === 'topic' ?  this.getTopicsChart() : this.getHashtagsChart();
      }
    })
  }

  getTopicsChart() {
    document.getElementById('chart').innerHTML='';
    this.apollo
    .query<any>({
      query: gql`
      query discourseTrendingTopics($start: String!, $end: String!, $region: String!, $topic:String!) {
        discourseTrendingTopics(start: $start, end: $end, region: $region, topic: $topic){
            counts
            sentiment	
            topic
            date
          }
        }
      `,
      variables: {
        start: this.start,
        end: this.end,
        region: "King County",
        topic: this.selectedData
      }
    })
    .subscribe(
      ({ data, loading }) => {
        this.topicsChart = data && data.discourseTrendingTopics;
      },error => {
        console.log("error is: ", error);
      }
    ).add(() => {
      this.empty = false;
       this.plotChart(this.topicsChart);
    });
  }

  getHashtagsChart (){
    document.getElementById('chart').innerHTML='';
    this.apollo
    .query<any>({
      query: gql`
      query hashtagMaster($start: String!, $end: String!, $region: String!, $topic:String!) {
        hashtagMaster(start: $start, end: $end, region: $region, topic: $topic){
            counts
            sentiment
            topic
            date
          }
        }
      `,
      variables: {
        start: this.start,
        end: this.end,
        region: "King County",
        topic: this.searchValue
      }
    })
    .subscribe(
      ({ data, loading }) => {
        this.hashtagChart = data && data.hashtagMaster;
      },error => {
        console.log("error is: ", error);
      }
    ).add(() => {
      this.empty = false;
       this.plotChart(this.hashtagChart);
    })

  }
}
