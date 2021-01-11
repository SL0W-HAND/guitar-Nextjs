import React, { Component } from 'react'

export class Product_detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            guitar:{}
        }
    }

    componentDidMount(){
        this.setState({guitar: this.props.guitar})
    }

    render() {
        const {guitar} = this.state
        return (
            <div>
              {guitar.name}
            </div>
        )
    }
}

export default Product_detail
