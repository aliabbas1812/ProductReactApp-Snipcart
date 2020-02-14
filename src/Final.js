import React, { Component } from 'react';
import PostData from './list.json';
import Image from './Image';
import Button from './Button.js';
import Product from './Product';
import './product.css';

class Final extends Component{
    
    render() {
        
        return (
            <div className="container">
                <Image/> 
                <Product/>
            </div>
           
            
            )}
        }
            export default Final;

            
