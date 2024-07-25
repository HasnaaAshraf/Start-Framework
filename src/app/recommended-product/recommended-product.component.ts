import { Component } from '@angular/core';
import { product } from '../interface/interface';

@Component({
  selector: 'app-recommended-product',
  standalone: true,
  imports: [],
  templateUrl: './recommended-product.component.html',
  styleUrl: './recommended-product.component.css'
})
export class RecommendedProductComponent {
 recommendedProducts : product[] = [
  {pImg : "assets/images/samsung-galaxy-a24-8gb-128gb-1-year-warranty-792814.webp" , pName : " Sumsung" ,pColor : "Mixed colours" , pPrice : 7000 },
  {pImg : "assets/images/oppo-mobile-reno8-4g-8gb-256gb-black-cph2461blk.webp" , pName : "Oppo" ,pColor : "Black" , pPrice : 5000 },
  {pImg : "assets/images/pk-galaxy-a73-5g-a736-sm-a736blghpkd-532683352.avif" , pName : " Galaxy" ,pColor : "aquamarine" , pPrice : 6000 },
  {pImg : "assets/images/mobiles-nav-card-google-200323.webp" , pName : "Vivo" ,pColor : "Melt Green" , pPrice : 8000 },
  {pImg : "assets/images/oppo-mobile-reno8-4g-8gb-256gb-black-cph2461blk.webp" , pName : "Oppo" ,pColor : "Black" , pPrice : 5000 },
  {pImg : "assets/images/pk-galaxy-a73-5g-a736-sm-a736blghpkd-532683352.avif" , pName : " Galaxy" ,pColor : "aquamarine" , pPrice : 6000 },
  {pImg : "assets/images/mobiles-nav-card-google-200323.webp" , pName : "Vivo" ,pColor : "Melt Green" , pPrice : 8000 },
  {pImg : "assets/images/samsung-galaxy-a24-8gb-128gb-1-year-warranty-792814.webp" , pName : " Sumsung" ,pColor : "Mixed colours" , pPrice : 7000 },
  {pImg : "assets/images/pk-galaxy-a73-5g-a736-sm-a736blghpkd-532683352.avif" , pName : " Galaxy" ,pColor : "aquamarine" , pPrice : 6000 },
  {pImg : "assets/images/mobiles-nav-card-google-200323.webp" , pName : "Vivo" ,pColor : "Melt Green" , pPrice : 8000 },
  {pImg : "assets/images/oppo-mobile-reno8-4g-8gb-256gb-black-cph2461blk.webp" , pName : "Oppo" ,pColor : "Black" , pPrice : 5000 },
  {pImg : "assets/images/123e7c66-9816-4f84-a78c-b4c49cd7d37724100643_182x182.jpg" , pName : " Galaxy" ,pColor : "aquamarine" , pPrice : 6000 },
  
 ]
}
