import React from 'react';
import '../css/kaleidoscope-mountain.css';
import mtns from '../assets/mtns-lake-transparent.png';
import mtnsInside from '../assets/mtn-lake-center.png';

class KaleidoscopeMountain extends React.Component {
    render() {
        return (
            <section className="kaleidoscope-mountain-container">
                <div className="kaleidoscope-mountain">
                    <div className="kaleidoscope-mountain-p-background">
                    <img className="mtns-lake-img" alt="Animated Mountain Kaleidoscope Outer" src={mtns}/>
                    <img className="mtns-lake-img mnt-lake-img-inside" alt="Animated Mountain Kaleidoscope Inner" src={mtnsInside}/>
                        <div className="kaleidoscope-mountain-p">
                            <p>Design</p>
                            <p>Driven</p>
                            <span>Development</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default KaleidoscopeMountain;
