import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fruit } from 'src/app/Models/fruit';
import { FruitsService } from 'src/app/Services/fruits.service';

@Component({
  selector: 'app-edit-fruit',
  templateUrl: './edit-fruit.component.html',
  styleUrls: ['./edit-fruit.component.css']
})
export class EditFruitComponent implements OnInit {


  foundFru : Fruit = {} as Fruit;
  fruitID : any;
  url:any;
  constructor(private fruService : FruitsService, private activatedRoute : ActivatedRoute) { }

  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((map)=>{
      this.fruitID = map.get("id");
      this.fruService.getFruit(parseInt(this.fruitID)).subscribe((data : Fruit)=>{
        this.foundFru = data;
      })
    })
  }


  onSubmit(): void{
    this.fruService.updateFruit(this.foundFru).subscribe((data)=>{
      alert(data);
    })
  }

}
