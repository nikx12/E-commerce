import React from 'react';
import { Carousel } from 'antd';
import './Footwear.css'

class Footwear extends React.Component{
    render(){
        return(
            <div>
                <h1>Hi on Footwear Tab!!!!!!!!!!</h1>
                <Carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
            </div>
        )
       
    }
}
export default Footwear;