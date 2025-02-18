import { Component, inject } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { SidebarStateService } from '../../service/sidebar-state.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [DrawerModule, ButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.sass'
})
export class SidebarComponent {
  visible!: boolean;
  private _sidebarStateService: SidebarStateService = inject(SidebarStateService)

  ngOnInit() {
    this._sidebarStateService.sidebarVisible$.subscribe(visible => this.visible = visible);
  }

  toggleSidebar() {
    this._sidebarStateService.setSidebarVisible(!this.visible);
  }
}
