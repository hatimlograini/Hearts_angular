import { Diagnostic } from './../../../services/class/Diagnostic/diagnostic';
import { Component, NgZone } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiagnosticCrudService } from 'src/app/services/Diagnostic/diagnostic-crud.service';

@Component({
  selector: 'app-edit-diagnostic',
  templateUrl: './edit-diagnostic.component.html',
  styleUrls: ['./edit-diagnostic.component.css']
})
export class EditDiagnosticComponent {

  getId:any;
  updateForm!: FormGroup;

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private NgZone:NgZone,
    private activatedRoute:ActivatedRoute,
    private crudAPI:DiagnosticCrudService){
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
      this.crudAPI.getdiagnostic(this.getId).subscribe(res => {
        console.log(res);
        const diagnosticData = res;

        this.updateForm.setValue({
          NumHD: diagnosticData['NumHD'],
          NumofVessel: diagnosticData['NumofVessel'],
        });
      });

      this.updateForm = this.formBuilder.group({
        NumHD: [''],
        NumofVessel: [''],
      })

    }


  ngOnInit(): void {

  }

  onUpdate(){
    this.crudAPI.updatediagnostic(this.getId,this.updateForm.value).subscribe(res=>{
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
        this.router.navigateByUrl('/view-diagnostic')
      })
    },(err)=>{
      console.log(err);
    })
  }

}
