import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
            return (<div key={education.school}><h3>{education.school}</h3>
                <p className="info">{education.degree} <span></span><em className="date">{education.graduated}</em></p>
                <p>{education.description}</p></div>
            )
        });
      var certifications = this.props.data.certifications.map(function (certifications) {
            return (<div key={certifications.certification}><h3>{certifications.certification}</h3>
                <p className="info">{certifications.authority} <span></span><em className="date">{certifications.issued}</em></p>
                <p>{certifications.description}</p></div>
            )
        });
      var work = this.props.data.work.map(function (work) {
          return (<div key={work.company}><h3>{work.company}</h3>
              <p className="info">{work.title}<span></span> <em className="date">{work.years}</em></p>
              <ul className="description">
                  <li>{work.description11}</li>
                  <li>{work.description12}</li>
                  <li>{work.description13}</li>
                  <li>{work.description14}</li>
                  <li>{work.description15}</li>
              </ul>
              <p className="info">{work.title2}<span></span> <em className="date">{work.years2}</em></p>
              <ul className="description">
                  <li>{work.description21}</li>
                  <li>{work.description22}</li>
                  <li>{work.description23}</li>
                  <li>{work.description24}</li>
                  <li>{work.description25}</li>
              </ul>
          </div>
          )
      });
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

    <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Certifications</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {certifications}
               </div>
            </div>
         </div>
      </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
