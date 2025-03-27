import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { loadModules } from "esri-loader/dist/esm/modules";

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})

export class chatbotComponent implements OnInit {

  async ngOnInit() {

  }
  messages: { text: string; sender: string }[] = [];
  userInput: string = '';

  constructor() { }

  sendMessage() {
    if (!this.userInput.trim()) return;

    // Add user message
    this.messages.push({ text: this.userInput, sender: 'user' });

    // Generate bot response
    setTimeout(() => {
      const botReply = this.getBotResponse(this.userInput);
      this.messages.push({ text: botReply, sender: 'bot' });
    }, 1000);

    // Clear input
    this.userInput = '';
  }

  getBotResponse(message: string): string {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('hello')) return 'Hello! How can I help you?';
    if (lowerMessage.includes('how are you')) return 'I am just a bot, but I am doing great!';
    if (lowerMessage.includes('bye')) return 'Goodbye! Have a great day!';

    return 'I am not sure about that. Can you ask something else?';
  }
 
}

