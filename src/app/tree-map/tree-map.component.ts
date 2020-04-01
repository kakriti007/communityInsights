import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, ViewChild, ElementRef, VERSION, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

import * as d3plus from 'd3plus';

@Component({
  selector: 'app-tree-map',
  templateUrl: './tree-map.component.html',
  styleUrls: ['./tree-map.component.css']
})
export class TreeMapComponent implements OnInit {

  @ViewChild('test') test: ElementRef;
  data = [
    { value: 30, Amount: "A Little", Sauces: "Ranch", food: "Healthy", type: "Salad" },
    { value: 10, Amount: "A Lot", Sauces: "Ketchup", food: "Healthy", type: "Salad" },
    { value: 10, Amount: "Some", Sauces: "Ranch", food: "Healthy", type: "Salad" },
    { value: 10, Amount: "A Little", Sauces: "mayo", food: "Healthy", type: "Burrito Bowl" },
    { value: 10, Amount: "Some", Sauces: "Ranch", food: "Healthy", type: "Burrito Bowl" },
    { value: 10, Amount: "A Lot", Sauces: "Ketchup", food: "Healthy", type: "Burrito Bowl" },

    { value: 10, Amount: "A Little", Sauces: "Ranch", food: "Unhealthy", type: "French Fries" },
    { value: 10, Amount: "Some", Sauces: "Ranch", food: "Unhealthy", type: "French Fries" },
    { value: 10, Amount: "A Lot", Sauces: "Ketchup", food: "Unhealthy", type: "French Fries" },
    { value: 10, Amount: "A Little", Sauces: "Ketchup", food: "Unhealthy", type: "Burrito Bowl" },
    { value: 10, Amount: "Some", Sauces: "Ranch", food: "Unhealthy", type: "Burrito Bowl" },
    { value: 10, Amount: "A Lot", Sauces: "Ketchup", food: "Unhealthy", type: "Burrito Bowl" }];

    filterChanged: (event: any) => void;


  /*
values = [
  { id: 3432, name: "Recent" },
  { id: 3442, name: "Most Popular" },
  { id: 3352, name: "Rating" }
];
*/

  constructor() { }

  public filterTypes = [
    { value: 0 },
    { value: 1 },
    { value: 2}
  ];

  ngOnInit(): void {
    let depthOption = 0;
    var visualization = new d3plus.Treemap()
      .data(this.data)
      .select("#treemap")
      .groupBy(["food", "Sauces", "type", "Amount"])
      .depth(0)
      .sum("value")
      .depth(0)
      .render();

    this.filterChanged = function (event) {
      depthOption = parseInt(event);
      visualization.depth(depthOption).render();
    }
  }
}
