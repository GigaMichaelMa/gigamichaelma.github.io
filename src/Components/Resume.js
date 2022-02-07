import React, { Component } from 'react';
const onMouseOver = event => {
  const el = event.target;
  let colorhex = [
    "#0693E3",
  ];
  el.style.color = colorhex[0];
};
const onMouseOut = event => {
  const el = event.target;
  let black = "#000000";
  el.style.color = black;
};

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company} ><a href={work.url} target="_blank" onMouseOut={event => onMouseOut(event)} onMouseEnter={event => onMouseOver(event)}><h3>{work.company}</h3></a>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }
    
  function changeBackground(e) {
    e.target.style.background = 'red';
  }
    return (
      <section id="resume">

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


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>
   </section>
    );
  }
}

export default Resume;
