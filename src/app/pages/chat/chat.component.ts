import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {CardModule} from 'primeng/card';
import { SidebarStateService } from '../../service/sidebar-state.service';
import {EditorModule} from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CardModule, CommonModule, EditorModule, FormsModule, ButtonModule, RippleModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.sass'
})
export class ChatComponent {
  sidebarVisible!: boolean;
  private _sidebarStateService: SidebarStateService = inject(SidebarStateService);

  userMessage: string = '';

  quillModules= {
    toolbar: false
  }

  ngOnInit() {
    this._sidebarStateService.sidebarVisible$.subscribe(visible => this.sidebarVisible = visible);
  }

  
}
