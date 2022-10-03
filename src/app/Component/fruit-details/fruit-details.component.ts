import { Component, Input, OnInit } from '@angular/core';
import { Fruit } from 'src/app/Models/fruit';


@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.component.html',
  styleUrls: ['./fruit-details.component.css']
})
export class FruitDetailsComponent implements OnInit {


  @Input() fruDetails : Fruit = {} as Fruit
  constructor() { }

  ngOnInit(): void {
  }

}
