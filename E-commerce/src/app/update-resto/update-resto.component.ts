import { Component,OnInit} from '@angular/core';
import{RestoService} from'../resto.service'
import {FormGroup,FormControl} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/router';
interface EditformData {
  id: number; // Use the type that matches your JSON server's expectations
  fname: string;
  addres:string;
  Gmail:string;
  // Add other form fields as needed
}


@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrl: './update-resto.component.css'
})
export class UpdateRestoComponent {
  constructor( private resto:RestoService,private route:ActivatedRoute ,private router:Router){}  
  
EditformData=new FormGroup({
    fname:new FormControl(''),
    addres: new FormControl(''),
    Gmail: new FormControl('')
  })
  editdata:any=[];
ngOnInit():void{
  // this.resto.getlist().subscribe((result)=>{
  //   this.editdata =result;
  //   console.log(this.editdata);
  //   console.log();
    
  // })
  this.route.paramMap.subscribe((params)=>{
     let itemId = params.get('id');
    itemId && this.resto.UpdateProduct(itemId).subscribe((data)=>{
     this.editdata= data;
  console.log(this.editdata)
  })  
})
}  

editResto(data:any){
  if(this.editdata){
    data.id = this.editdata.id;
  }
  this.resto.editedData(data).subscribe((result)=>{
  // console.log(result)
  this.router.navigate(['']);
  })
}
}
