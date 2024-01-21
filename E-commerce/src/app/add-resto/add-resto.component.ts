import { Component } from '@angular/core';
import{RestoService} from'../resto.service'
import {FormGroup,FormControl} from '@angular/forms'

interface FormData {
  id: number; // Use the type that matches your JSON server's expectations
  fname: string;
  addres:string;
  Gmail:string;
  // Add other form fields as needed
}

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrl: './add-resto.component.css'
})
export class AddRestoComponent {
  formData: FormGroup;
constructor(private  resto:RestoService){}
addResto=new FormGroup({
  fname:new FormControl(''),
  addres: new FormControl(''),
  Gmail: new FormControl('')
})

showAlert:boolean=false;
ngOnInit():void
{
  this.resto.getlist();
  
}
collectResto(){
  // console.warn( this.addResto.value)
  this.resto.saveResto(this.addResto.value).subscribe((result)=>{
    console.warn(result);
    this.showAlert = true;
  })
  this.addResto.reset({})
}
closeAlert(){
  this.showAlert = false;
}
}
