import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private content = new BehaviorSubject<string>("");
  public share = this.content.asObservable();

  //sharing sentiment bifurcation data to chart component

  private clickedItem = new BehaviorSubject<string>("");
  public sharedData = this.clickedItem.asObservable();

  constructor() { }
  updateData(text){
    this.content.next(text);
  }

  updateClickedData(selectedData){
    this.clickedItem.next(selectedData);
  }
}
