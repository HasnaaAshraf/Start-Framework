import { Component } from '@angular/core';
import { product } from '../interface/interface';
import { RecommendedProductComponent } from '../recommended-product/recommended-product.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterOutlet,RecommendedProductComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  productsList : product[] = [
  
    {pImg : "assets/images/61l9ppRIiqL._AC_UF894,1000_QL80_.jpg" , pName : " IPhone" ,pColor : "Pink" , pPrice : 20000 },
    {pImg : "assets/images/61BGE6iu4AL._AC_UF1000,1000_QL80_.jpg" , pName : "IPhone" ,pColor : "Baby blue" , pPrice : 15000 },
    {pImg : "assets/images/61l9ppRIiqL._AC_UF894,1000_QL80_.jpg" , pName : " IPhone" ,pColor : "Pink" , pPrice : 20000 },
    {pImg : "assets/images/61BGE6iu4AL._AC_UF1000,1000_QL80_.jpg" , pName : "IPhone" ,pColor : "Baby blue" , pPrice : 15000 },
    {pImg : "assets/images/61l9ppRIiqL._AC_UF894,1000_QL80_.jpg" , pName : " IPhone" ,pColor : "Pink" , pPrice : 20000 },
    {pImg : "assets/images/61l9ppRIiqL._AC_UF894,1000_QL80_.jpg" , pName : " IPhone" ,pColor : "Pink" , pPrice : 20000 },
    {pImg : "assets/images/61BGE6iu4AL._AC_UF1000,1000_QL80_.jpg" , pName : "IPhone" ,pColor : "Baby blue" , pPrice : 15000 },
    {pImg : "assets/images/61l9ppRIiqL._AC_UF894,1000_QL80_.jpg" , pName : " IPhone" ,pColor : "Pink" , pPrice : 20000 },
    {pImg : "assets/images/61BGE6iu4AL._AC_UF1000,1000_QL80_.jpg" , pName : "IPhone" ,pColor : "Baby blue" , pPrice : 15000 },
    {pImg : "assets/images/61l9ppRIiqL._AC_UF894,1000_QL80_.jpg" , pName : " IPhone" ,pColor : "Pink" , pPrice : 20000 },
    {pImg : "assets/images/61l9ppRIiqL._AC_UF894,1000_QL80_.jpg" , pName : " IPhone" ,pColor : "Pink" , pPrice : 20000 },
    {pImg : "assets/images/61BGE6iu4AL._AC_UF1000,1000_QL80_.jpg" , pName : "IPhone" ,pColor : "Baby blue" , pPrice : 15000 },
  ]
}
