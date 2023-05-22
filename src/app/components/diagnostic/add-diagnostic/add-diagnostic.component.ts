import { Diagnostic } from './../../../services/class/Diagnostic/diagnostic';
import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DiagnosticCrudService } from 'src/app/services/Diagnostic/diagnostic-crud.service';

@Component({
  selector: 'app-add-diagnostic',
  templateUrl: './add-diagnostic.component.html',
  styleUrls: ['./add-diagnostic.component.css']
})
export class AddDiagnosticComponent {
  diagnosticForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: DiagnosticCrudService) {
    this.diagnosticForm = this.formBuilder.group({
      NumHD: [''],
      NumofVessel: ['']
    })
  }

  ngOnInit(): void {


  }

  onSubmit(): any {
    this.crudService.adddiagnostic(this.diagnosticForm.value)
      .subscribe(() => {
        console.log('Data added successfully')
        this.ngZone.run(()=>this.router.navigateByUrl('view-diagnostic'))
      },(err)=>{
        console.log(err);
      });
    }
}
