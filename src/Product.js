import React, { Component } from 'react';
import PostData from './list.json';
import Image from './Image';
import Button from './Button.js';

import './product.css';

    class Product extends Component {
        render(){
            return(
                <div>
                    {PostData.map((postDetail,index)=>{
                        return(
                          
                            <div className="prod" key={index}>
                                
             <h4 className="title">&nbsp;&nbsp;Title:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {postDetail.Title}</h4>
            <h5 className="Description"><b>&nbsp;&nbsp;Description: 
        </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{postDetail.Description}</h5>
        <form>&nbsp;&nbsp;<label>
            Review: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="review"></input></label></form>
                                
                                &nbsp;&nbsp;
                               
                                <button  className="buy-button snipcart-add-item" data-item-id={postDetail.Id} 
                                   data-item-price={postDetail.price} 
                                   data-item-url={postDetail.Url} 
                                   data-item-name={postDetail.Title} 
                                   data-item-image={postDetail.img}>Add to cart</button>                                                         
                                </div>
                        )

                    })}
                </div>
            )
        }
    }
    
    export default Product;
    







    //    data-item-custom1-name="Frame color"
                                //    data-item-custom1-options="Black|Brown[+100.00]|Gold[+300.00]"