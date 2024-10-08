import React, {FC} from 'react';
import {IProductModel} from "../../models/IProductModel";

const Product: FC<{item:IProductModel}> = ({item}) => {
  return (
      <div>
        <h2>{item.id} {item.title}</h2>
        <img src={item.thumbnail} alt={item.title}/>
        <p><b>Description</b> - {item.description}</p>
        <p><b>Category</b> - {item.category}</p>
        <p><b>Price</b> : {item.price}; <b>Discount</b> = {item.discountPercentage}%</p>
        <p><b>Rating</b> - {item.rating}; <b>Stock</b> : {item.stock}</p>
        <div>
          <h4>Tags</h4>
          <ul>
            {item.tags.map((tag) => (
                <li><p>{tag}</p></li>
            ))}
          </ul>
        </div>
        <p><b>Brand</b> : {item.brand}</p>
        <p><b>Sku</b> - {item.sku}; <b>Weight</b> = {item.weight}</p>
        <div>
          <h4>Dimensions</h4>
          <p>Width: {item.dimensions.width} cm</p>
          <p>Height: {item.dimensions.height} cm</p>
          <p>Depth: {item.dimensions.depth} cm</p>
        </div>
        <p><b>Warranty information</b> - {item.warrantyInformation}; <b>Shipping
          information</b> - {item.shippingInformation}</p>
        <p><b>Status</b> - {item.availabilityStatus}</p>
        <div>
          <h4>Reviews</h4>
          <ul>
            {item.reviews.map((review) => (
                <li>
                  <p><b>Reviewer name:</b> {review.reviewerName}</p>
                  <p><b>Reviewer email:</b> {review.reviewerEmail}</p>
                  <p><b>Rating:</b> {review.rating}/5</p>
                  <p><b>Comment:</b> {review.comment}</p>
                  <p><b>Date:</b> {review.date}</p>
                </li>
            ))}
          </ul>
        </div>
        <p><b>Return policy</b> : {item.returnPolicy}</p>
        <p><b>Min order quantity</b> - {item.minimumOrderQuantity}</p>
        <div>
          <h4>Meta</h4>
          <p>Created: {item.meta.createdAt}</p>
          <p>Updated: {item.meta.updatedAt}</p>
          <p>Bar code: {item.meta.barcode}</p>
          <p>QR code: {item.meta.qrCode}</p>
        </div>
        {/*<p>{item.images}</p>*/}
        <div>
          <h4>Images</h4>
          <ul>
            {item.images.map((images) => (
                <li>{images}</li>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default Product;