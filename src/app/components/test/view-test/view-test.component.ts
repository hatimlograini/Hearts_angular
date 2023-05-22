import { Component } from '@angular/core';
import { TestCrudService } from 'src/app/services/Test/test-crud.service';

@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrls: ['./view-test.component.css']
})
export class ViewTestComponent {

  Tests:any=[];
  constructor(private crudAPI:TestCrudService){}
  page = 1;
  pageSize = 10;
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.crudAPI.gettests().subscribe(res=>{
      console.log(res);
      this.Tests = res;
    })
  }

  delete(id:any,i:any){
    console.log(id);
    if(window.confirm('Are u sure want to delete this item')){
      this.crudAPI.deletetest(id).subscribe(res =>{
        this.getAll();
      })
    }
  }

}
