import { Component, OnInit} from '@angular/core';

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
      nome: 'Anne',
      sobrenome: 'Silva'
    },
    {
      nome: 'Arizona',
      sobrenome: 'Portela'
    },
    {
      nome: 'Bela',
      sobrenome: 'Belar'
    }
  ];

  constructor() {

  }
  ngOnInit() {
    console.log(this.pessoas);
    let interval = setInterval (() => {
      this.count += 1;
      if(this.count === 10) {
        clearInterval(interval);
      }
    }, 1000);
  }

  clicou (nome: string): void {
    console.log('Clicou em mim', nome)

  }
}
