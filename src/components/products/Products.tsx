import React, {FC} from 'react';
import {productsArray} from "../../data"
import {IProductModel} from "../../models/IProductModel";
import Product from "../product/Product";

const Products: FC = () => {
  return (
      <div>
        {
            productsArray.map((product : IProductModel) => (
              <Product item = {product}/>))
        }
      </div>
  );
};

export default Products;