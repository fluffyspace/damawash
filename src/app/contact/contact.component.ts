import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  imePrezime: string = "";
  mobitel: string = "";
  poruka: string = "";
  body: string = "";

  ngOnInit(): void {
  }

  sendMail(): void {
    this.body = "" + this.poruka + "\n\nIme i prezime: " + this.imePrezime + ((this.mobitel) ? '\n\nBroj telefona: ' + this.mobitel : '');
    const subject: string = 'Upit';
    window.open('mailto:info.damawash@gmail.com?subject=' + subject + '&body=' + encodeURIComponent(this.body));
  }

}
