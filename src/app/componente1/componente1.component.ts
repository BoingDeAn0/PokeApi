import { Component, OnInit } from '@angular/core';
import { ConnectConfig } from 'rxjs';
import { PokeServiceService } from '../servicio/carpeta/poke-service.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  public pokemones : any[] = [];
  public pokemonNames =  ['bulbasaur','lucario','pikachu','charmander','squirtle','wartortle','kakuna','pidgey','rattata','ekans','raichu','ekans','sandslash','nidorina','golbat','vileplume'
,'diglett','psyduck','poliwag','abra','machop','tentacool','geodude','magneton','farfetchd','gengar','hypno','electrode','hitmonchan','koffing','chansey','kangaskhan','mewtwo','geoudude',
'charizard','magnetone','misdreavus','umbreon','eevee','slowking']; 

  
  constructor(public service: PokeServiceService){}

  ngOnInit(): void {
    this.getPokemones();
  
  
  }
  
 getPokemones(){
    
  this.pokemonNames.forEach(name => {
    this.service.getPokemons(name).subscribe((value:Object) => {
      this.pokemones.push(value);
    }) 
    
  
});

}



 
}




