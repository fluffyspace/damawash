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
    this.body = "" + this.poruka + "\n\nIme i prezime: " + this.imePrezime + ((this.mobitel) ? '\nBroj telefona: ' + this.mobitel : '');
    const subject: string = 'Upit';
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info.damawash@gmail.com&su=' + subject + '&body=' + encodeURIComponent(this.body));
    //window.open('mailto:info.damawash@gmail.com?subject=' + subject + '&body=' + encodeURIComponent(this.body));
  }

}
