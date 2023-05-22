import { Component, NgZone } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestCrudService } from 'src/app/services/Test/test-crud.service';

@Component({
  selector: 'app-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.css']
})
export class EditTestComponent {

  getId:any;
  updateForm!: FormGroup;

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private NgZone:NgZone,
    private activatedRoute:ActivatedRoute,
    private crudAPI:TestCrudService){
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
      this.crudAPI.gettest(this.getId).subscribe(res => {
        console.log(res);
        const testData = res;

        this.updateForm.setValue({
          MaxHeartRateAch: testData['MaxHeartRateAch'],
          Oldpeak: testData['Oldpeak'],
          Slope: testData['Slope']
        });
      });

      this.updateForm = this.formBuilder.group({
        MaxHeartRateAch: [''],
        Oldpeak: [''],
        Slope: ['']
      })

    }


  ngOnInit(): void {

  }

  onUpdate(){
    this.crudAPI.updatetest(this.getId,this.updateForm.value).subscribe(res=>{
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
