import { Component, inject } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { SidebarStateService } from '../../service/sidebar-state.service';
import { ButtonModule } from 'primeng/button';
import {RippleModule} from 'primeng/ripple'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [DrawerModule, ButtonModule, RippleModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.sass'
})
export class SidebarComponent {
  visible!: boolean;
  private _sidebarStateService: SidebarStateService = inject(SidebarStateService)

  chats = [
    {
      "title": "Find candidates for java dev role"
    },
    {
      "title": "Discussing the new project with the team"
    },
    {
      "title": "Reviewing the design, And discussing the new project"
    },
    {
      "title": "Catch up with the team"
    }
  ]

  ngOnInit() {
    this._sidebarStateService.sidebarVisible$.subscribe(visible => this.visible = visible);
  }

  toggleSidebar($event: any, visible: boolean) {
    this._sidebarStateService.setSidebarVisible(visible);
  }
}
