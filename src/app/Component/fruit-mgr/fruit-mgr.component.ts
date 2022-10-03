import { Component, OnInit } from '@angular/core';
import { Fruit } from 'src/app/Models/fruit';
import { FruitsService } from 'src/app/Services/fruits.service';

@Component({
  selector: 'app-fruit-mgr',
  templateUrl: './fruit-mgr.component.html',
  styleUrls: ['./fruit-mgr.component.css']
})
export class FruitMgrComponent implements OnInit {
  fruList: Fruit[] = [];
  

  foundFru : Fruit = {} as Fruit;
 
  constructor(private fruService : FruitsService) { }

  ngOnInit(): void {
    this.getAllFruitFromServer();
  }



  getAllFruitFromServer(){
    this.fruService.getAllFruits().subscribe((data : Fruit[])=>{
      this.fruList = data
    })



  }


  public deleteFruitFromServer(id:number)

  {
        this.fruService.deleteFruit(id).subscribe((data)=>{

            alert(data);

        })

  }

  // onSubmit(): void{
  //   this.fruService.deleteFruit(this.foundFru).subscribe((data)=>{
  //     alert(data);
  //   })
  // }
   

    

}








 



