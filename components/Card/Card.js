import React, { Component } from 'react'
import Link from 'next/link'

export class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: null,
            name:"",
            id:""
        }
    }

    componentDidMount(){
        this.setState({
            price: this.props.price, 
            image: this.props.image.toString(), 
            name:this.props.name, 
            stars:this.props.stars, 
            id:this.props.id})
    }

    render() {
        return (
            <div className='card'>
                <Link href={`/guitarist/${this.state.id}`} passHref>
                    <a><img src={this.state.image} alt={this.state.name.concat(' IMAGE')} className='card-img-top'/></a>
                </Link>
                <div className='card-body'>
                    <Link href={`/guitarist/${this.state.id}`} passHref>
                        <a><h4 className='card-title'>{this.state.name}</h4></a>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Card
