import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
        var testimonials = this.props.data.testimonials.map(function (testimonials) {
            return (<li key={testimonials.text}>
                <p className="testimonialText">{testimonials.text}</p>
            </li>
            );
        });
    }

    return (
      <section id="otheractivities">
      <div className="text-container">
         <div className="row">

            <div className="header-col">
                        <h1><span>Get to know Me</span></h1>
                        <h3>(outside of work)</h3>
            </div>

            <div className="columns flex-container">
                  <ul className="slides">
                      {testimonials}
                  </ul>
            </div>
            
         </div>
      </div>
      </section>
    );
  }
}

export default Testimonials;
