import { Component, OnInit } from '@angular/core';

import * as d3plus from 'd3plus';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  lineChartData = [
  { fruit: "apple", price: 5, year: 2014 },
  { fruit: "banana", price: 4, year: 2014 },
  { fruit: "cherry", price: 7, year: 2014 },
  { fruit: "apple", price: 7, year: 2015 },
  { fruit: "banana", price: 6, year: 2015 },
  { fruit: "cherry", price: 9, year: 2015 },
  { fruit: "apple", price: 10, year: 2016 },
  { fruit: "banana", price: 8, year: 2016 },
  { fruit: "cherry", price: 5, year: 2016 },
  { fruit: "apple", price: 6, year: 2017 },
  { fruit: "banana", price: 10, year: 2017 },
  { fruit: "cherry", price: 10, year: 2017 },
  { fruit: "apple", price: 8, year: 2018 },
  { fruit: "banana", price: 15, year: 2018 },
  { fruit: "cherry", price: 12, year: 2018 }
  ];

  assignColor: (d: any) => void;




  ngOnInit() {

    function assignColor(d) {
      if (d === "apple") return "green";
      if (d === "banana") return "goldenrod";
      if (d === "cherry") return "red";
      return "grey";
    }

    new d3plus.LinePlot()
  .config({
    data: this.lineChartData,
    groupBy: "fruit",
    x: "year",
    y: "price",
    select: "#chart",
    shapeConfig: {
      Line: {
        stroke: function(d) {
          return assignColor(d.fruit);
        }
      }
    }
  })
  .render();

  }

}
