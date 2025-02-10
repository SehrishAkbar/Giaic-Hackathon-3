export interface product {
  
    inventory: number;
    quantity: number;

  name: string;
  _id : string
  product : string;
  _type:"product" ;
  image? :{
      asset : {
          _ref: string
          _type : "image";
      }
  };
  price :number;
  description : string;
  type : number;
   slug : {
     _type : "slug"
     current : string,
    };
     dimensions:number
  
}



