import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public products$: IProduct[] = [];
  public displayedColumns = ['ProductId', 'ProductCode']
  public selectedProduct: IProduct | null = null;

  constructor(private fetchDataService: FetchDataService) { }

  ngOnInit(): void {
    this.fetchDataService.getData().subscribe(data => this.products$ = data)
  }

  setSelectedProduct(product: IProduct): void {
    this.selectedProduct = product;
  }

  checkIfSelected(product: IProduct): boolean {
    return this.selectedProduct?.ProductId === product.ProductId;
  }

  close(): void {
    this.selectedProduct = null;
  }

}
