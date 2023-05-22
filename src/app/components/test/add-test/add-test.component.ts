import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TestCrudService } from 'src/app/services/Test/test-crud.service';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent {
  testForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: TestCrudService) {
    this.testForm = this.formBuilder.group({
      MaxHeartRateAch: [''],
      Oldpeak: [''],
      Slope: ['']
    })
  }

  ngOnInit(): void {


  }

  onSubmit(): any {
    this.crudService.addtest(this.testForm.value)
      .subscribe(() => {
        console.log('Data added successfully')
        this.ngZone.run(()=>this.router.navigateByUrl('view-patient'))
      },(err)=>{
        console.log(err);
      });
    }
}
