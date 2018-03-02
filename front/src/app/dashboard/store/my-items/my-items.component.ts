import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { MyItemsService } from './my-items.service';
@Component({
  selector: 'app-my-items',
   templateUrl: './my-items.component.html'
   ,
  styleUrls: ['./my-items.component.scss']
})
export class MyItemsComponent implements OnInit {
  MyItemsService: any;
  source: LocalDataSource;
  data = [
    {
      id: 1,
      name: "gt",
      price: 330,
      createdAt: "5/5/2015",
      updatedAt: "8/3/2018",
      sellerName: "ibraam"
    },
    {
      id: 2,
      name: "x",
      price: 550,
      createdAt: "3/3/2013",
      updatedAt: "16/2/2018",
      sellerName: "ibraam"
    }
  ];
  settings = {
   add:{
     confirmCreate:true
    },
    
edit:{
  confirmSave:true
 },
    columns: {
      name: {
        title: 'Name',
        filter:false
      },
      price: {
        title: 'Price',
        filter:false
      },
      createdAt: {
        title: 'Created At',
        filter:false
      },
      updatedAt: {
        title: 'Updated At',
        filter:false
      },
      sellerName: {
        title: 'Seller Name',
        filter:false
      },
      componentNo: {
        title: 'Component No',
        filter:false
      },
    }
  };
  constructor() { this.source = new LocalDataSource(this.data);}

  ngOnInit() {
  }
  add(event) {
    var data = {
                "name" : event.newData.name,
                "price" : event.newData.price,
                "sellerName" : event.newData.sellerName,
                "componenetNo" : event.newData.componenetNo,
                };
 this.MyItemsService.createProduct(data).subscribe(
        res => {
          console.log(res);
          event.confirm.resolve(event.newData);
      })
    
  }
  update(event) {
    var data = {"id" : event.newData.id,
                "name" : event.newData.name,
                "price" : event.newData.price,
                "createdAt" : event.newData.createdAt,
                "updatedAt" : event.newData.updatedAt,
                "sellerName" : event.newData.sellerName,
                "componenetNo" : event.newData.componenetNo,
                };
                this.MyItemsService.updateProduct(data).subscribe(
        res => {
          console.log(res);
          event.confirm.resolve(event.newData);
      });
  }
}
