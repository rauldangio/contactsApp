import { Contact } from './../interfaces/contact';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DataService } from './../services/data.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContactPage implements OnInit {

  contact?: Contact;

  constructor(public dataService: DataService,
              public route: Router
    ) { }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    this.contact = this.dataService.getData('contact');
    console.log(this.contact)
  }

  voltar(){
    this.route.navigateByUrl('home')
  }
}
