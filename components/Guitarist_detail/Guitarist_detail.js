import image from 'next/image';
import React, { Component } from 'react'

class Guitarist_detal extends Component {
    constructor(props){
        super(props);
        this.state = {
            guitarist:{}
        }
    }

    componentDidMount(){
        this.setState({guitarist: this.props.guitarist})
      
    }
    render() {
        const {guitarist} = this.state
        console.log( this.state.guitarist)
        return (
            <section classname='Guitarist'>
                <div classname='Guitarist_Cover'>
                    <img src={guitarist.image} alt={guitarist.name} classname='cover_image'/>
                    <h1>{guitarist.name}</h1>
                </div>
                <div classname='Guitarist_band'> 
                    <h2>Band:{guitarist.band}</h2>
                    <img src={guitarist.guitar_image}/>
                </div>
                <div classname='Guitarist_description'>
                    <span>{guitarist.description}</span>
                </div>
                <div classname='Guitarist_Guitar'>
                    <h2>{guitarist.guitar_used}</h2> 
                    <img src={guitarist.guitar_image}/>
                </div>
            </section>
        )
    }
}

export default Guitarist_detal
