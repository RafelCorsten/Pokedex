import { Component, Input, OnInit, PipeTransform, Pipe } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  @Input() filteredPokemon : string | number = '';
  @Input() pokemons : Pokemon[] = [];

  
  // transform(pokemons: Pokemon[], filterText: string): Pokemon[] {
  //   if (!pokemons) {
  //     return [];
  //   }
  //   if (!filterText) {
  //     return pokemons;
  //   }

  //   return pokemons.filter(pokemon => {
  //     return this.filterPokemon(pokemon, filterText);
  //   });
  // }

  // private filterPokemon(pokemon: Pokemon, filterText: string): boolean {
  //   filterText = filterText.toLocaleLowerCase();
  //   const filterTerms = filterText.split(' ');
  //   for (const filterTerm of filterTerms) {
  //     const hasFilterTerm = this.filterPokemonTerm(pokemon, filterTerm);
  //     if (hasFilterTerm === false) {
  //       return false;
  //     }
  //   }

  //   return true;
  // }

  // private filterPokemonTerm(pokemon: Pokemon, filterTerm: string) {
  //   return pokemon.name.toLocaleLowerCase().includes(filterTerm);
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
