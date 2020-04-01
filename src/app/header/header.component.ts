import { Component, ViewChild, NgModule, OnInit, ElementRef, Renderer2 } from '@angular/core';
import {
  NgbDatepicker,
  NgbInputDatepicker,
  NgbDateStruct,
  NgbCalendar,
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDate
} from '@ng-bootstrap/ng-bootstrap';
import { NgModel } from "@angular/forms";

import { TagInputModule } from 'ngx-chips';

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

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  startDate: NgbDateStruct;
  maxDate: NgbDateStruct;
  minDate: NgbDateStruct;
  hoveredDate: NgbDateStruct;
  fromDate: any;
  toDate: any;
  model: any;
  today = this.calendar.getToday();
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


  set week(value) {
    this.onChange({ year: this.fromDate.year, week: value });
  }

  disabled: boolean = false;
  onChange: (_: any) => void;
  onTouched: any;


  constructor(element: ElementRef, private renderer: Renderer2, private _parserFormatter: NgbDateParserFormatter, private calendar: NgbCalendar) {}
  ngOnInit() {

    this.startDate = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    this.maxDate = { year: now.getFullYear() + 1, month: now.getMonth() + 1, day: now.getDate() };
    this.minDate = { year: now.getFullYear() - 1, month: now.getMonth() + 1, day: now.getDate() };
  }

  getWeek(date: NgbDateStruct) {
    let fromDate = new Date(date.year + "-" + date.month + "-" + date.day);
    let time = fromDate.getDay() ? fromDate.getDay() - 1 : 6;
    fromDate = new Date(fromDate.getTime() - time * 24 * 60 * 60 * 1000);
    this.fromDate = new NgbDate(
      fromDate.getFullYear(),
      fromDate.getMonth() + 1,
      fromDate.getDate()
    );
    const toDate = new Date(fromDate.getTime() + 6 * 24 * 60 * 60 * 1000);
    this.toDate = new NgbDate(
      toDate.getFullYear(),
      toDate.getMonth() + 1,
      toDate.getDate()
    );

    let weekparsed = '';
    weekparsed += this._parserFormatter.format(this.fromDate);
    weekparsed += ' - ' + this._parserFormatter.format(this.toDate);
    this.renderer.setProperty(this.myRangeInput.nativeElement, 'value', weekparsed);
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
