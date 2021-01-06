import React, { Component } from 'react'
import Link from 'next/link'

export class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            price: null,
            image: null,
            name:"",
            stars:0,
            id:""
        }
    }

    componentDidMount(){
        this.setState({price: this.props.price, image: this.props.image.toString(), name:this.props.name, stars:this.props.stars, id:this.props.id})
    }

    render() {
        return (
            <div className='card'>
                <Link href={`/product/${this.state.id}`} passHref>
                    <a><img src={this.state.image} alt={this.state.name.concat(' IMAGE')} className='card-img-top'/></a>
                </Link>
                <div className='card-body'>
                    <Link href={`/product/${this.state.id}`} passHref>
                        <a><h4 className='card-title'>{this.state.name}</h4></a>
                    </Link>
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
