import React, { Component } from 'react';
import PostData from './list.json';
import Button from './Button';

import './product.css';
class Image extends Component {
    render() {
        return (
            <div>
                         {PostData.map((postDetail, index)=>{
                
                    return (
                    
                        <div key={index} >
                            <img src={postDetail.img}></img> 
                            </div>
                    );    
                })}
            </div>
        )
    }
}
 
export default Image;