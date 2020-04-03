import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, Add2 } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [AppComponent, Add2, UserFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [UsersService],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule {}
