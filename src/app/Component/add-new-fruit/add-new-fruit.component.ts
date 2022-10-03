import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fruit } from 'src/app/Models/fruit';
import { FruitsService } from 'src/app/Services/fruits.service';

@Component({
  selector: 'app-add-new-fruit',
  templateUrl: './add-new-fruit.component.html',
  styleUrls: ['./add-new-fruit.component.css']
})
export class AddNewFruitComponent implements OnInit {

  @Output() emitter : EventEmitter<Fruit> = new EventEmitter<Fruit>();
  newFru : Fruit = {} as Fruit; 
  url : any;
  router: any;

  constructor(private fruService : FruitsService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }

  onChange(event : any){
    if(event.target.files && event.target.files.length){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_ev)=>{
        this.url = reader.result;
      }
    }else{
      alert("No file has been selected");
    }
  }

  
    onAddClick(){   

        this.fruService.addFruit(this.newFru).subscribe((data) =>{

        this.router.navigate(["/Fruit/All/"]);

        
  
      }
    
      )};
}