import React from 'react'
import ProjectItem from "../components/ProjectItem";
import img1 from '../images/speech_to_text.jpg';

import '../styles/Projects.css';

 function Projects() {
  return (
    <div className='projects'>
     <h1>Academic Projects</h1>
     <div className='projectList'>
         <ProjectItem name='Speech to Text Summerization' image={img1}/>
         <ProjectItem name='Speech to Sign Translation' image={img1}/>

     </div>
    </div>
  )
}
export default Projects;