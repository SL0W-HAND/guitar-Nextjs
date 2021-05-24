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
        console.log(this.props.guitarist.link_videos)
    }
    render() {
        const {guitarist} = this.state
     
        
        return (
            <section className='Guitarist'>
                <section className='Guitarist_Cover'>
                    <img src={guitarist.image} alt={guitarist.name} className='cover_image'/>
                    <h1>{guitarist.name}</h1>
                </section>
                <section className='Guitarist_container'>
                    <section>
                        <div className='Guitarist_band'> 
                            <h2>Band: {guitarist.band}</h2>
                            <img src={guitarist.band_logo}/>
                        </div>
                        <div className='Guitarist_Guitar'>
                            <h2>Guitar used: {guitarist.guitar_used}</h2> 
                            <img src={guitarist.guitar_image}/>
                        </div>
                    </section>
                    <article className='Guitarist_description'>
                        <span><p>{guitarist.description}</p></span>
                    </article>
                    <article className='Guitarist_videos'>
                        <h1>Watch him</h1>
                        {this.props.guitarist.link_videos.lenght == 0 
                        ? null 
                        : this.props.guitarist.link_videos.map((item)=>{
                            return<iframe src={item}></iframe>
                        }) 
                        }
                    </article>
                </section>
            </section>
        )
    }
}

export default Guitarist_detal
