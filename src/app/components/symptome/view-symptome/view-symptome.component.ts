import { Symptome } from './../../../services/class/Symptome/symptome';
import { Component } from '@angular/core';
import { SymptomeCrudService } from 'src/app/services/Symptome/symptome-crud.service';

@Component({
  selector: 'app-view-symptome',
  templateUrl: './view-symptome.component.html',
  styleUrls: ['./view-symptome.component.css']
})
export class ViewSymptomeComponent {

  Symptomes:any=[];
  constructor(private crudAPI:SymptomeCrudService){}
  page = 1;
  pageSize = 10;
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.crudAPI.getsymptomes().subscribe(res=>{
      console.log(res);
      this.Symptomes = res;
    })
  }

  delete(id:any,i:any){
    console.log(id);
    if(window.confirm('Are u sure want to delete this item')){
      this.crudAPI.deletesymptome(id).subscribe(res =>{
        this.getAll();
      })
    }
  }

}
