import React from 'react'
import LinkdinIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import '../styles/Home.css'

 const Home = () => {
  return (
    <div className='home'>
     <div className='about'>
      <h2>Hello, My name is Raj</h2>
      <div className='prompt'>
       <p><b>Passion for learning and creating.</b></p>

          <LinkdinIcon/>
          <EmailIcon/>
          <GithubIcon/>
      </div>
     </div>
        <div className='skills'>
            <h2>Skills</h2>
            <ol className='list'>
                <li className='item'>
                    <h3> Programming Languages:</h3>
                    <span>Python, R, C, Java, C++, HTML, CSS, JavaScript, SQL</span>
                    <h3>Software/framework/libraries:</h3>
                    <span>NumPy, Pandas, Matplotlib, SciPy, React.js, Node.js</span>
                    <h3> Database:</h3>
                    <span>MySQL, MongoDB</span>
                    <h3>Tools:</h3>
                    <span>Git, VS, VS Code</span>
                    <h3>Soft Skills:</h3>
                    <span> Critical Thinking, Leadership, Team Management, Communication</span>



                </li>
            </ol>
        </div>
    </div>

  )
}
export default Home;