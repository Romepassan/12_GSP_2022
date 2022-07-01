import { Component, OnInit, ViewChild  } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/shared/models/product';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit  {


  displayedColumns : string[] = ['date', 'ref', 'cat', 'nom', 'stock', 'pamp', 'val_stock', 'action'];
  dataSource!:MatTableDataSource<any>;

  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getListProducts().subscribe((response:any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;


    });

  }

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }


}
