import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
 
  class Clothing extends React.Component {
    constructor(props){
        super(props)
        this.state={
            Text : 'Buy Now'
        }
    }
    render(){
        if(this.props.buttonClick){
            this.setState({
                Text : 'Go To Cart'
            })
         }
        return (
        <div>
            {/* to add elements dynamically make use of map function */}
            <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button onClick={this.props.onButtonClick}>{this.state.Text}</Button>
            </CardBody>
            </Card>
        
        </div>
        );
    }
  }
export default Clothing;