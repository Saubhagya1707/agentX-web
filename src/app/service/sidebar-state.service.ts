import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarStateService {

  private sidebarVisibleSubject = new BehaviorSubject<boolean>(true);
  sidebarVisible$ = this.sidebarVisibleSubject.asObservable();

  getSidebarVisible() {
    return this.sidebarVisibleSubject.value;
  }

  setSidebarVisible(visible: boolean) {
    this.sidebarVisibleSubject.next(visible);
  }

}
