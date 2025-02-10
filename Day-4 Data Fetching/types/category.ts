export interface Category {
    _id : string
    category : string;
    _type:"category" ;
    image? :{
        asset : {
            _ref: string
            _type : "image";
        }
    };
    price :number;
    description : string;
    type : number;
};

