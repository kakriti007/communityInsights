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



  plotChart (chartData){
  document.getElementById('chart').innerHTML='';

  function legendtext(d) {
    if (d === -1) return "Negative";
    if (d === 0) return "Neutral";
    if (d === 1) return "Positive";
  }

  function assignColor(d) {
    if (d === -1) return "#4477AA";
    if (d === 0) return "#E69F02";
    if (d === 1) return "#429E73";
    return "grey";
  }

  new d3plus.LinePlot()
  .config({
    data: chartData,
    groupBy: "sentiment",
    x: "date",
    y: "counts",
    lineMarkers: true,
    lineMarkerConfig: {
      fill: "red"
    },
    legendConfig: {
      label: function (d) {
        return legendtext(d.sentiment);
      }
    },
    shapeConfig: {
      Line: {
        stroke: function(d) {
          return assignColor(d.sentiment);
        }
      }
    },
    xConfig: {
      title: "Dates",
      labels: [],
    },
    legendTooltip:{
      tbody: []
    },
    tooltipConfig: {
      title: function(d) {
        var a = d.sentiment === -1 ? 'Negative' : d.sentiment === 0 ? 'Neutral' : 'Positive';
        return "Sentiment Count - " +  d["counts"] + ' ' + a ;
      },
      tbody: [
        ["Date: ", function(d) { return d["date"]}]
      ]
    },
    timeline:"date",
    select: "#chart",
  })

  .render();
  this.empty = false;
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
        topic:  this.searchValue
      }
    })
    .subscribe(
      ({ data, loading }) => {
        this.topicsChart = data && data.discourseTrendingTopics;
        this.plotChart(this.topicsChart);
      },error => {
        console.log("error is: ", error);
      }
    );
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
        this.plotChart(this.hashtagChart);
      },error => {
        console.log("error is: ", error);
      }
    )
  }
}
