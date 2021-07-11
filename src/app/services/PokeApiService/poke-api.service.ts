import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PokemonList } from 'src/app/pokemon-list';
import { Pokemon } from 'src/app/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private pokeApiURL : string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  gottaCatchEmAll(): Observable<PokemonList> {
    return this.gottaCatchEmAllFiltered(1118, 1);
  }

  gottaCatchEmAllFiltered(limit: number, offset: number): Observable<PokemonList> {
    return this.http.get<PokemonList>(`${this.pokeApiURL}pokemon?offset=${offset}&limit=${limit}`);
  }

  catchOne(pokemonId: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokeApiURL}pokemon/${pokemonId}`);
  }

  catchOneByName(pokemonName: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokeApiURL}pokemon/${pokemonName}`);
  }
}
