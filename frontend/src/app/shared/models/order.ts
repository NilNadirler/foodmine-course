import { CartItem } from './cart-item';
import {LatLng} from 'leaflet'
export class Order{
   id!:number;
   items!:CartItem[];
   totalPrice!:number;
   name!:string;
   address!:string;
   paymentId!:string;
   createdAt!:string;
   status!:string
   addressLatLng?:LatLng


}