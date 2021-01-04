import React, { Component } from 'react'
import Image from 'next/image'

export class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            price: null,
            image: null,
            name:"",
            stars:0
        }
    }
    //<Image className='image' src={this.state.image} alt={this.state.name}/>

    componentDidMount(){
        this.setState({price: this.props.price, image: this.props.image.toString(), name:this.props.name, stars:this.props.stars})
    }

    render() {
        return (
            <div className='card'>
                <img src={this.state.image} alt={this.state.name.concat(' IMAGE')} className='card-img-top'/>
                <div className='card-body'>
                    <h4 className='card-title'>{this.state.name}</h4>
                    <h5 className='card-text'>Price: {this.state.price} $</h5>
                    <div>
                        <span><p>{this.state.stars}</p></span>
                        <button className='btn btn-primary'>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
