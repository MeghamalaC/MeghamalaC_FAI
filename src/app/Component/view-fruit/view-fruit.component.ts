import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fruit } from 'src/app/Models/fruit';
import { FruitsService } from 'src/app/Services/fruits.service';

@Component({
  selector: 'app-view-fruit',
  templateUrl: './view-fruit.component.html',
  styleUrls: ['./view-fruit.component.css']
})
export class ViewFruitComponent implements OnInit {

  fruitID : any;
  selected : Fruit = {} as Fruit
  constructor(private fruService : FruitsService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe((map)=>{
      
      this.fruitID = map.get("id");
      if(this.fruitID != null){
        this.fruService.getFruit(parseInt(this.fruitID)).subscribe((data)=>{
          this.selected = data as Fruit;
        })
      }
    })
  }

}
