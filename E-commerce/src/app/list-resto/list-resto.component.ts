import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service'
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrl: './list-resto.component.css'
})
export class ListRestoComponent implements OnInit {
  constructor(private resto:RestoService){};
  collection:any =[];
  ngOnInit(): void {
    this.resto.getlist().subscribe((result)=>{
     this.collection = result;

    });
  }
  deleteResto(item:any):void {
    this.resto.deleteResto(item).subscribe((result)=>{
      console.log(result);
      console.log(result)
      
    })
        // Find the index of the item with the specified id
        const index = this.collection.findIndex((items: { id: any; }) => items.id === item);
        // If the item is found, remove it
        if (index !== -1) {
          this.collection.splice(index, 1);
        }
    
    // this.collection.splice(item,-1)
  }
  editResto(){
   console.log('editId');
       
  }




}
