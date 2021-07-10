import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';
import { PokemonList } from 'src/app/pokemon-list';
import { PokeApiService } from '../../services/PokeApiService/poke-api.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  public PokemonList : PokemonList = new PokemonList();
  public pokemons : Pokemon[] = [];
  
  constructor(private service: PokeApiService) { }

  ngOnInit(): void {
    this.gottaCatchEmAll();
  }

  gottaCatchEmAll() : void { 
    this.service.gottaCatchEmAll().subscribe(pokemons => {
      pokemons.results.forEach(pokemon => {
        this.catchOneByName(pokemon.name);
      });
      this.PokemonList = pokemons;
    })
  }

  catchOneByName(pokemonName: string): void {
    this.service.catchOneByName(pokemonName).subscribe(pokemons => {
      this.pokemons.push(pokemons);
      this.pokemons = this.pokemons.sort((a,b) => a.id - b.id);
    });
  }

}
