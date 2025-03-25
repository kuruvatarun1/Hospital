import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  shownavbar : BehaviorSubject<boolean>
  constructor() { 
    this.shownavbar = new BehaviorSubject(true);
  }
  hide(){
    this.shownavbar.next(false);
  }
  display(){
    this.shownavbar.next(true);
  }
}
 