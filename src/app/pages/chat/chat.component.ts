import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {CardModule} from 'primeng/card';
import { SidebarStateService } from '../../service/sidebar-state.service';
import {EditorModule} from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {FileUploadEvent, FileUploadModule} from 'primeng/fileupload'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CardModule, CommonModule, EditorModule, FormsModule, ButtonModule, RippleModule, FileUploadModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.sass',
})
export class ChatComponent {
  sidebarVisible!: boolean;
  private _sidebarStateService: SidebarStateService = inject(SidebarStateService);

  userMessage: string = '';

  ngOnInit() {
    this._sidebarStateService.sidebarVisible$.subscribe(visible => this.sidebarVisible = visible);
  }

  onBasicUploadAuto($event: FileUploadEvent) {
    throw new Error('Method not implemented.');
  }
}
