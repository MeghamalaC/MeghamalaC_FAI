import { Component, OnInit } from '@angular/core';
import { Fruit } from 'src/app/Models/fruit';
import { FruitsService } from 'src/app/Services/fruits.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  fruList : Fruit[] = []
  selectedFru : Fruit = {} as Fruit
  searchValue : string = "";


  constructor(private fruService : FruitsService) { }

  ngOnInit(): void {

    //this.fruList.push({fruitID:1, fruitName:"Mango",fruitPrice:100,fruitStock:5000,fruitImage:"./assets/FruitsImages/mango.jfif"});

    //this.fruList.push({fruitID:2, fruitName:"Apple",fruitPrice:400,fruitStock:4000,fruitImage:"./assets/FruitsImages/Apple.jpg"});

  
     this.getAllFruitFromServer();
  
  }


  onDetailClick(fru : Fruit){
    this.selectedFru = fru;
  }

  onAddNew(fru : Fruit){
    debugger;
    this.fruList.push(fru);
    alert("Fruit added to database");
  }


  getAllFruitFromServer(){
    this.fruService.getAllFruits().subscribe((data : Fruit[])=>{
      this.fruList = data
    })
  }
}
