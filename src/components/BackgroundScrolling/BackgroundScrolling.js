import React,{Component} from 'react';
import './BackgroundScrolling.css'


class BackgroundScrolling extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            scroll_position:''
        };

        window.onscroll = () => {
            this.setState({ scroll_position :(document.documentElement.scrollTop)/2});
            // let section = document.getElementById('section')
        }
    }
    
   

    render() {
        return (
        <div className="backgroundScrollingContainer">
            <section id="section" style={{'background-position-x': - this.state.scroll_position + 'px'}}></section>
        </div>
        );
    }

  
}


export default BackgroundScrolling;
