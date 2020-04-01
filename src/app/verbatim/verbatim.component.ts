import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbPanelChangeEvent, NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
 

@Component({
  selector: 'app-verbatim',
  templateUrl: './verbatim.component.html',
  styleUrls: ['./verbatim.component.css']
})
export class VerbatimComponent implements OnInit {

  @ViewChild('myaccordion', {static : true}) accordion: NgbAccordion;
  constructor() { }
  isOn: boolean;
  ngOnInit(): void {
    this.isOn = true;
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
