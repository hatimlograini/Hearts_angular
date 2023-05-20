import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientCrudService } from 'src/app/services/Patient/patient-crud.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  patientForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: PatientCrudService) {
    this.patientForm = this.formBuilder.group({
      Age: [''],
      Sex: [''],
      RestBloodPress: [''],
      Cholesterol: [''],
      FastBloodSugar: [''],
      RestElecardioRes:['']
    })
  }

  ngOnInit(): void {


  }

  onSubmit(): any {
    this.crudService.addpatient(this.patientForm.value)
      .subscribe(() => {
        console.log('Data added successfully')
        this.ngZone.run(()=>this.router.navigateByUrl('view-patient'))
      },(err)=>{
        console.log(err);
      });
    }
}
