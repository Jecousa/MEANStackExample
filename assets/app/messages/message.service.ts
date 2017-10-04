import { Message } from "./message.model";

import { Http, Response, Headers} from "@angular/http";

export class MessageService {
  private messages: Message[] = [];
  messageIsEdit = new EventEmitter<Message>()
  constructor(private http: Http){}

  addMessage (message: Message) {
    this.messages.push(message);
    console.log(this.messages);
  }

  getMessages() {
    return this.messages;
  }

editMessage(message: Message){
  this.mesageIsEdit.emit(message);
}
  deleteMessage(message: Message){
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}
