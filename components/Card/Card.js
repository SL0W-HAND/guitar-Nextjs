import React, { Component } from 'react'
import Image from 'next/image'

export class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            price: null,
            image: null,
            name:""
        }
    }
    //<Image className='image' src={this.state.image} alt={this.state.name}/>

    componentDidMount(){
        this.setState({price: this.props.price, image: this.props.image.toString(), name:this.props.name})
    }

    render() {
        return (
            <div className='card'>
                <h1 className='title'>{this.state.name}</h1>
                <figure>
                    <img src={this.state.image} alt={this.state.name.concat(' IMAGE')}/>
                </figure>
                <h3>Price: {this.state.price} $</h3>
                
            </div>
        )
    }
}

export default Card
