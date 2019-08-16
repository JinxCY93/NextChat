import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { ChatInputComponent } from './chat-input/chat-input.component'
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ChatUsersComponent } from './chat-users/chat-users.component'

@NgModule({
  declarations: [AppComponent, ChatInputComponent, ChatViewComponent, ChatUsersComponent],
  providers: [],
  imports: [BrowserModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
