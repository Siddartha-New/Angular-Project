import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { loadModules } from "esri-loader/dist/esm/modules";
import {httpservice } from "../../host/httpservice";
import { response } from "../../models/response";


@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})

export class chatbotComponent implements OnInit {
  payload: response [] = [];
    openbox: boolean = false;

  async ngOnInit() {

  }
  messages: { text: string; sender: string }[] = [];
  userInput: string = '';

  constructor(private service: httpservice) { }
  chatbotopen() {
    this.openbox = true;
  }
  sendMessage() {

    if (!this.userInput.trim()) return;
    this.messages.push({ text: this.userInput, sender: 'user' });
    var response = this.service.Insert("CommponetClass", this.userInput, "botreply");
    setTimeout(() => {
      if (response != undefined) {
        this.messages.push({ text: response, sender: 'bot' });
      }
    },1000);
    this.userInput = '';
  }
}


