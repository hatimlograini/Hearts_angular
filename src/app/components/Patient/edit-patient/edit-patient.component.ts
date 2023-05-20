import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientCrudService } from 'src/app/services/Patient/patient-crud.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent {

  getId:any;
  updateForm!: FormGroup;

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private NgZone:NgZone,
    private activatedRoute:ActivatedRoute,
    private crudAPI:PatientCrudService){
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
      this.crudAPI.getpatient(this.getId).subscribe(res => {
        console.log(res['patient_dim']);
        const patientData = res['patient_dim'];

        this.updateForm.setValue({
          Age: patientData['Age'],
          Sex: patientData['Sex'],
          RestBloodPress: patientData['RestBloodPress'],
          Cholesterol: patientData['Cholesterol'],
          FastBloodSugar: patientData['FastBloodSugar'],
          RestElecardioRes: patientData['RestElecardioRes'], 
        });
      });

      this.updateForm = this.formBuilder.group({
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

  onUpdate(){
    this.crudAPI.updatepatient(this.getId,this.updateForm.value).subscribe(res=>{
      console.log('');
      const alertMessage = document.createElement('div');
    alertMessage.innerText = "Data Updated success";
    alertMessage.style.padding = "10px";
    alertMessage.style.borderRadius = "5px";
    alertMessage.style.backgroundColor = "#4CAF50";
    alertMessage.style.color = "white";
    alertMessage.style.fontWeight = "bold";
    alertMessage.style.textAlign = "center";
    alertMessage.style.position = "fixed";
    alertMessage.style.top = "50%";
    alertMessage.style.left = "50%";
    alertMessage.style.transform = "translate(-50%, -50%)";
    alertMessage.style.zIndex = "9999";
    document.body.appendChild(alertMessage);
    setTimeout(() => {
      alertMessage.remove();
    }, 3000);
      this.NgZone.run(()=>{
        this.router.navigateByUrl('/view-patient')
      })
    },(err)=>{
      console.log(err);
    })
  }
}
