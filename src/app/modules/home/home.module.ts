import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [HomeComponent, NavBarComponent],
  imports: [CommonModule, HomeRoutingModule, ButtonModule],
})
export class HomeModule {}
