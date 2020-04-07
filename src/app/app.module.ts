import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PostsComponent } from './components/posts/posts.component';

import { UsersService } from './services/users.service';
import { PostsService } from './services/posts.service';
import { PostFormComponent } from './components/post-form/post-form.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent, Add2 } from './components/users/users.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    Add2,
    UserFormComponent,
    PostsComponent,
    PostFormComponent,
    HomeComponent,
    UsersComponent,
    HeaderComponent,
    PostDetailsComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UsersService, PostsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
