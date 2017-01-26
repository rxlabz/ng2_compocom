export class Msg {
  message: string;
  userName: string;
  date: Date;


  constructor(message: string, userName: string, date: Date) {
    this.message = message;
    this.userName = userName;
    this.date = date;
  }
}