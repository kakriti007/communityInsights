import { Component, ViewChild, OnInit, ElementRef, Renderer2 } from '@angular/core';
import {
  NgbDatepicker,
  NgbInputDatepicker,
  NgbDateStruct,
  NgbCalendar,
  NgbDateAdapter,
  NgbDateParserFormatter
} from '@ng-bootstrap/ng-bootstrap';
import { NgModel } from "@angular/forms";

import { Subscription } from 'rxjs';
const now = new Date();
const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;
declare var $: any;

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  startDate: NgbDateStruct;
  maxDate: NgbDateStruct;
  minDate: NgbDateStruct;
  hoveredDate: NgbDateStruct;
  fromDate: any;
  toDate: any;
  model: any;
  word_list: any;
   
  private _subscription: Subscription;
  private _selectSubscription: Subscription;
  @ViewChild("d") input: NgbInputDatepicker;
  @ViewChild(NgModel) datePick: NgModel;
  @ViewChild('myRangeInput') myRangeInput: ElementRef;

  isHovered = date =>
    this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate)
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);
  constructor(element: ElementRef, private renderer: Renderer2, private _parserFormatter: NgbDateParserFormatter) {

  }

  

  ngOnInit() {
    this.word_list = [
      { text: "Lorem", weight: 13, link: "https://github.com/DukeLeNoir/jQCloud" },
      { text: "Ipsum", weight: 10.5, html: { title: "My Title", "class": "custom-class" }, link: { href: "http://jquery.com/", target: "_blank" } },
      { text: "Dolor", weight: 9.4 },
      { text: "Sit", weight: 8 },
      { text: "Amet", weight: 6.2 },
      { text: "Consectetur", weight: 5 },
      { text: "Adipiscing", weight: 5 },
      { text: "Elit", weight: 5 },
      { text: "Nam et", weight: 5 },
      { text: "Leo", weight: 4 },
      { text: "Sapien", weight: 4 },
      { text: "Pellentesque", weight: 3 },
      { text: "habitant", weight: 3 },
      { text: "morbi", weight: 3 },
      { text: "tristisque", weight: 3 },
      { text: "senectus", weight: 3 },
      { text: "et netus", weight: 3 },
      { text: "et malesuada", weight: 3 },
      { text: "Adipiscing", weight: 5 },
      { text: "Elit", weight: 5 },
      { text: "Nam et", weight: 5 },
      { text: "Leo", weight: 4 },
      { text: "Sapien", weight: 4 },
      { text: "Pellentesque", weight: 3 },
      { text: "habitant", weight: 3 },
      { text: "morbi", weight: 3 },
      { text: "tristisque", weight: 3 },
      { text: "senectus", weight: 3 },
      { text: "et netus", weight: 3 },
      { text: "et malesuada", weight: 3 },
      { text: "Adipiscing", weight: 5 },
      { text: "Elit", weight: 5 },
      { text: "Nam et", weight: 5 },
      { text: "Leo", weight: 4 },
      { text: "Sapien", weight: 4 },
      { text: "Pellentesque", weight: 3 },
      { text: "habitant", weight: 3 },
      { text: "morbi", weight: 3 },
      { text: "tristisque", weight: 3 },
      { text: "senectus", weight: 3 },
      { text: "et netus", weight: 3 },
      { text: "et malesuada", weight: 3 },
      { text: "Adipiscing", weight: 5 },
      { text: "Elit", weight: 5 },
      { text: "Nam et", weight: 5 },
      { text: "Leo", weight: 4 },
      { text: "Sapien", weight: 4 },
      { text: "Pellentesque", weight: 3 },
      { text: "habitant", weight: 3 },
      { text: "morbi", weight: 3 },
      { text: "tristisque", weight: 3 },
      { text: "senectus", weight: 3 },
      { text: "et netus", weight: 3 },
      { text: "et malesuada", weight: 3 },
      { text: "fames", weight: 2 },
      { text: "ac turpis", weight: 2 },
      { text: "egestas", weight: 2 },
      { text: "Aenean", weight: 2 },
      { text: "vestibulum", weight: 2 },
      { text: "elit", weight: 2 },
      { text: "sit amet", weight: 2 },
      { text: "metus", weight: 2 },
      { text: "adipiscing", weight: 2 },
      { text: "ut ultrices", weight: 2 },
      { text: "justo", weight: 1 },
      { text: "dictum", weight: 1 },
      { text: "Ut et leo", weight: 1 },
      { text: "metus", weight: 1 },
      { text: "at molestie", weight: 1 },
      { text: "purus", weight: 1 },
      { text: "Curabitur", weight: 1 },
      { text: "diam", weight: 1 },
      { text: "dui", weight: 1 },
      { text: "ullamcorper", weight: 1 },
      { text: "id vuluptate ut", weight: 1 },
      { text: "mattis", weight: 1 },
      { text: "et nulla", weight: 1 },
      { text: "Sed", weight: 1 }
    ];
    $("#trending-topics").jQCloud(this.word_list);
    this.startDate = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    this.maxDate = { year: now.getFullYear() + 1, month: now.getMonth() + 1, day: now.getDate() };
    this.minDate = { year: now.getFullYear() - 1, month: now.getMonth() + 1, day: now.getDate() };
  }

  onDateSelection(date: NgbDateStruct) {
    let parsed = '';
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
      this.toDate = date;
      this.input.close();
    } else {
      this.toDate = null;
      this.fromDate = date;
    }

    if (this.toDate === null) {
      parsed += this._parserFormatter.format(this.fromDate) + ' - '
      this.input.close();
    }
    if (this.fromDate) {
      parsed += this._parserFormatter.format(this.fromDate);
    }
    if (this.toDate) {
      parsed += ' - ' + this._parserFormatter.format(this.toDate);
    }

    this.renderer.setProperty(this.myRangeInput.nativeElement, 'value', parsed);
  }
}
