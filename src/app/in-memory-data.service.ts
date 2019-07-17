import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id:11, name:'Dr Nice',ranking:22 },
      {id:12, name:'Narco' ,ranking:1 },
      {id:13, name:'Bombasto' ,ranking:2 } ,
      {id:14, name:'Celeritas' ,ranking:3 },
      {id:15, name:'Magneta' ,ranking:56 },
      {id:16, name:'RubberMan' ,ranking:85 },
      {id:17, name:'Dynama' ,ranking:6 },
      {id:18, name:'Dr IQ' ,ranking:12 },
      {id:19, name:'Magma', ranking:31 } ,
      {id:20, name:'Tornado' ,ranking:1 },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}