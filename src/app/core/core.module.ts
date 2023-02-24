import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  exports: [NavbarComponent, FooterComponent],
  imports: [CommonModule],
})
export class CoreModule {}
