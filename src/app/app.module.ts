import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { FruitMgrComponent } from './Component/fruit-mgr/fruit-mgr.component';
import { ViewFruitComponent } from './Component/view-fruit/view-fruit.component';

import { EditFruitComponent } from './Component/edit-fruit/edit-fruit.component';
import { SearchPipe } from './Pipes/search.pipe';
import { HomeComponent } from './Component/home/home.component';
import { AddNewFruitComponent } from './Component/add-new-fruit/add-new-fruit.component';
import { FruitDetailsComponent } from './Component/fruit-details/fruit-details.component';
import { MasterComponent } from './Component/master/master.component';
import { FooterComponent } from './Component/footer/footer.component';



const routes : Routes = [
  {path: '', redirectTo: "Home", pathMatch:'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'Fruit/All', component: FruitMgrComponent},
  {path: 'Fruit/Add', component: AddNewFruitComponent},
  {path: 'Fruit/Edit/:id', component: EditFruitComponent},
  {path: 'Fruit/View/:id', component: ViewFruitComponent},
  {path: 'Master', component: MasterComponent}  
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FruitMgrComponent,
    ViewFruitComponent,
    
    SearchPipe,
    EditFruitComponent,
    AddNewFruitComponent,
    FruitDetailsComponent,
    MasterComponent,
    FooterComponent
  ],


  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
