import { Traitement } from './../../../services/class/Traitement/traitement';
import { Component, NgZone } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TraitementCrudService } from 'src/app/services/Traitement/traitement-crud.service';

@Component({
  selector: 'app-edit-traitement',
  templateUrl: './edit-traitement.component.html',
  styleUrls: ['./edit-traitement.component.css']
})
export class EditTraitementComponent {

  getId:any;
  updateForm!: FormGroup;

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private NgZone:NgZone,
    private activatedRoute:ActivatedRoute,
    private crudAPI:TraitementCrudService){
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
      this.crudAPI.gettraitement(this.getId).subscribe(res => {
        console.log(res);
        const traitementData = res;

        this.updateForm.setValue({
          ExeAngina: traitementData['ExeAngina']
        });
      });

      this.updateForm = this.formBuilder.group({
        ExeAngina: [''],
      })

    }


  ngOnInit(): void {

  }

  onUpdate(){
    this.crudAPI.updatetraitement(this.getId,this.updateForm.value).subscribe(res=>{
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
        this.router.navigateByUrl('/view-test')
      })
    },(err)=>{
      console.log(err);
    })
  }

}
