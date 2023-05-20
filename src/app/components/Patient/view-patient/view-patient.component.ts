import { Component } from '@angular/core';
import { PatientCrudService } from 'src/app/services/Patient/patient-crud.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent {
  Patients:any=[];
  constructor(private crudAPI:PatientCrudService){}
  page = 1;
  pageSize = 4;
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.crudAPI.getpatients().subscribe(res=>{
      console.log(res);
      this.Patients = res;
    })
  }

  delete(id:any,i:any){
    console.log(id);
    if(window.confirm('Are u sure want to delete this item')){
      this.crudAPI.deletepatient(id).subscribe(res =>{
        this.getAll();
      })
    }
  }
}
