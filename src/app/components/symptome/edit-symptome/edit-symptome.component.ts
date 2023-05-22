import { Symptome } from './../../../services/class/Symptome/symptome';
import { Traitement } from './../../../services/class/Traitement/traitement';
import { Component, NgZone } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SymptomeCrudService } from 'src/app/services/Symptome/symptome-crud.service';

@Component({
  selector: 'app-edit-symptome',
  templateUrl: './edit-symptome.component.html',
  styleUrls: ['./edit-symptome.component.css']
})
export class EditSymptomeComponent {

  getId:any;
  updateForm!: FormGroup;

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private NgZone:NgZone,
    private activatedRoute:ActivatedRoute,
    private crudAPI:SymptomeCrudService){
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
      this.crudAPI.getsymptome(this.getId).subscribe(res => {
        console.log(res);
        const traitementData = res;

        this.updateForm.setValue({
          ChestPainType: traitementData['ChestPainType']
        });
      });

      this.updateForm = this.formBuilder.group({
        ChestPainType: [''],
      })

    }


  ngOnInit(): void {

  }

  onUpdate(){
    this.crudAPI.updatesymptome(this.getId,this.updateForm.value).subscribe(res=>{
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
        this.router.navigateByUrl('/view-symptome')
      })
    },(err)=>{
      console.log(err);
    })
  }

}
