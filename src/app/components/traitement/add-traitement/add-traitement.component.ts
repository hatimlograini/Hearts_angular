import { Traitement } from './../../../services/class/Traitement/traitement';
import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TraitementCrudService } from 'src/app/services/Traitement/traitement-crud.service';

@Component({
  selector: 'app-add-traitement',
  templateUrl: './add-traitement.component.html',
  styleUrls: ['./add-traitement.component.css']
})
export class AddTraitementComponent {
  traitementForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: TraitementCrudService) {
    this.traitementForm = this.formBuilder.group({
      ExeAngina: [''],
    })
  }

  ngOnInit(): void {


  }

  onSubmit(): any {
    this.crudService.addtraitement(this.traitementForm.value)
      .subscribe(() => {
        console.log('Data added successfully')
        this.ngZone.run(()=>this.router.navigateByUrl('view-patient'))
      },(err)=>{
        console.log(err);
      });
    }
}
