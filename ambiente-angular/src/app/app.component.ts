import { Component, OnInit} from '@angular/core';
import { PeopleService } from './shared/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  count = 0;
  text='';
  nome = 'Anne';

  pessoas = [
    {
      firstName: '',
      lastName: '',
      age: 0,
    }
  ];

  constructor(private peopleService: PeopleService) {

  }
  ngOnInit() {
    console.log(this.pessoas);
    let interval = setInterval (() => {
      this.count += 1;
      if(this.count === 10) {
        clearInterval(interval);
      }
    }, 1000);

    this.getPeople();
  }

  clicou (nome: string): void {
    console.log('Clicou em mim', nome)

  }

  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }
}
