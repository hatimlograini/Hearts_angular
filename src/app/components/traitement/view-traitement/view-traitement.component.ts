import { Traitement } from './../../../services/class/Traitement/traitement';
import { Component } from '@angular/core';
import { TraitementCrudService } from 'src/app/services/Traitement/traitement-crud.service';

@Component({
  selector: 'app-view-traitement',
  templateUrl: './view-traitement.component.html',
  styleUrls: ['./view-traitement.component.css']
})
export class ViewTraitementComponent {

  Traitements:any=[];
  constructor(private crudAPI:TraitementCrudService){}
  page = 1;
  pageSize = 10;
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.crudAPI.gettraitements().subscribe(res=>{
      console.log(res);
      this.Traitements = res;
    })
  }

  delete(id:any,i:any){
    console.log(id);
    if(window.confirm('Are u sure want to delete this item')){
      this.crudAPI.deletetraitement(id).subscribe(res =>{
        this.getAll();
      })
    }
  }

}
