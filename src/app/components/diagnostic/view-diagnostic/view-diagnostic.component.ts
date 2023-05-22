import { Diagnostic } from './../../../services/class/Diagnostic/diagnostic';
import { Component } from '@angular/core';
import { DiagnosticCrudService } from 'src/app/services/Diagnostic/diagnostic-crud.service';

@Component({
  selector: 'app-view-diagnostic',
  templateUrl: './view-diagnostic.component.html',
  styleUrls: ['./view-diagnostic.component.css']
})
export class ViewDiagnosticComponent {

  Diagnostics:any=[];
  constructor(private crudAPI:DiagnosticCrudService){}
  page = 1;
  pageSize = 10;
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.crudAPI.getdiagnostics().subscribe(res=>{
      console.log(res);
      this.Diagnostics = res;
    })
  }

  delete(id:any,i:any){
    console.log(id);
    if(window.confirm('Are u sure want to delete this item')){
      this.crudAPI.deletediagnostic(id).subscribe(res =>{
        this.getAll();
      })
    }
  }

}
