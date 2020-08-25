import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "src/app/components/servicios/heroes.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  //Lo que tenemos que saber nada mas es que el consutructor
  //se ejecuta antes que el ngOnInit
  constructor( private _heroesService: HeroesService,
    private router: Router
     ) { 

  }

  ngOnInit(): void {


    //Le ponemos al arreglo recientemente creado el metodo
    //getHeroes del servicio
    this.heroes = this._heroesService.getHeroes();

  }

  verHeroe(idx: number){
    this.router.navigate( ['/heroe,idx'] );
  }


}
