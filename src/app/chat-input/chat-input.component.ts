import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ChatService } from '../chat.service'

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css'],
})
export class ChatInputComponent implements OnInit {
  messageForm = new FormGroup({
    text: new FormControl('This is my chat message', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(255),
    ]),
  })

  hasSubmitted = false

  constructor(private service: ChatService) { }

  ngOnInit() { }

  errors() {
    return this.messageForm.controls.text.errors
  }

  onSubmit() {
    this.hasSubmitted = true

    if (this.messageForm.valid) {
      this.service.sendMessage(this.messageForm.value.text)
      this.messageForm.reset()
    }
  }
}
