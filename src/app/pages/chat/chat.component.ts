import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {CardModule} from 'primeng/card';
import { SidebarStateService } from '../../service/sidebar-state.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.sass'
})
export class ChatComponent {
  sidebarVisible!: boolean;
  private _sidebarStateService: SidebarStateService = inject(SidebarStateService);

  ngOnInit() {
    this._sidebarStateService.sidebarVisible$.subscribe(visible => this.sidebarVisible = visible);
  }
}
