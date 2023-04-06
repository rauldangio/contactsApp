import { DataService } from './../services/data.service';
import { Contact } from './../interfaces/contact';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {

  contacts: Contact[] = [{
    id: 1,
    name: 'raul',
    phone: '14 998621342',
    email: 'raul@email.tld',
    photo: 'https://pbs.twimg.com/media/EEltXb8XYAQCAno.png'
  },
  {
    id: 2,
    name: 'gi',
    phone: '14 987651444',
    email: 'gi@email.tld',
    photo: 'https://i0.statig.com.br/bancodeimagens/6q/sc/fg/6qscfg7p7ggmnoh0kzxxnuo0f.jpg'
  },
  {
    id: 3,
    name: 'gabriel',
    phone: '14 998001342',
    email: 'gabriel@email.tld',
    photo: 'http://1.bp.blogspot.com/-3CqkZpItNvE/TcnVFAahdsI/AAAAAAAAAG8/fXUNUdils0E/s1600/doug1.jpg'
  },
  {
    id: 4,
    name: 'ronan',
    phone: '14 98721042',
    email: 'ronan@email.tld',
    photo: 'https://adotebicho.com.br/storage/files/br/720/thumb-816x460-59c5440e569f85ddea318ef9e1a2cdff.jpg'
  },
  {
    id: 5,
    name: 'vitao',
    phone: '19 998621342',
    email: 'vitao@email.tld',
    photo: 'https://www.portaldodog.com.br/cachorros/wp-content/uploads/2017/11/por-que-os-caes-soltam-tantos-gases-pdd1.jpg'
  }]


  constructor(
    public dataService: DataService,
    public route: Router
    ) {}
  
    searchContacts(event: any){
      console.log(event)
    }

  saveContact(contact: Contact){
    this.dataService.saveData('contact',contact)
    this.route.navigateByUrl('contact')
    console.log(contact)
  }

}
