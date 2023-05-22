import { Symptome } from './../../../services/class/Symptome/symptome';
import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SymptomeCrudService } from 'src/app/services/Symptome/symptome-crud.service';

@Component({
  selector: 'app-add-symptome',
  templateUrl: './add-symptome.component.html',
  styleUrls: ['./add-symptome.component.css']
})
export class AddSymptomeComponent {
  symptomeForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: SymptomeCrudService) {
    this.symptomeForm = this.formBuilder.group({
      ChestPainType: [''],
    })
  }

  ngOnInit(): void {


  }

  onSubmit(): any {
    this.crudService.addsymptome(this.symptomeForm.value)
      .subscribe(() => {
        console.log('Data added successfully')
        this.ngZone.run(()=>this.router.navigateByUrl('view-patient'))
      },(err)=>{
        console.log(err);
      });
    }
}
