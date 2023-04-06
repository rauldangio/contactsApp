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
    name: 'sarah',
    phone: '14 98721042',
    email: 'sarah@email.tld',
    photo: 'https://media.istockphoto.com/id/486914749/pt/foto/hippy-c%C3%A3o.jpg?s=1024x1024&w=is&k=20&c=ZhGGYVGS5BGKeB2bdze5aufFfEqUV9Z7eicZgqWrwg0='
  },
  {
    id: 5,
    name: 'mirella',
    phone: '19 998621342',
    email: 'mirella@email.tld',
    photo: 'https://love.doghero.com.br/wp-content/uploads/2018/11/shutterstock_143747656.jpg'
  },
  {
    id: 6,
    name: 'VITAO',
    phone: '19 998621342',
    email: 'vitao@email.tld',
    photo: 'https://www.dicionarioinformal.com.br/image/c/135.jpg'
  }]

  results = [...this.contacts]

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
  }

  handleChange(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.contacts.filter(d => d.name.toLowerCase().indexOf(query) > -1);
  }
}
