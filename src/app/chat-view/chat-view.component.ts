import { Component, OnInit } from '@angular/core'
import { ChatService } from '../chat.service'

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css'],
})
export class ChatViewComponent implements OnInit {
  messages = []

  constructor(private service: ChatService) { }

  ngOnInit() {
    this.service.getMessages().subscribe(messages => {
      this.messages = messages
    })
  }
}
