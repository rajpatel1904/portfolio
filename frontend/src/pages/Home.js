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
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2> Programming Languages:</h2>
                    <span>Python, R, C, Java, C++, HTML, CSS, JavaScript, SQL</span>
                    <h2>Software/framework/libraries:</h2>
                    <span>NumPy, Pandas, Matplotlib, SciPy, React.js, Node.js</span>
                    <h2> Database:</h2>
                    <span>MySQL, MongoDB</span>
                    <h2>Tools:</h2>
                    <span>Git, VS, VS Code</span>
                    <h2>Soft Skills:</h2>
                    <span> Critical Thinking, Leadership, Team Management, Communication</span>



                </li>
            </ol>
        </div>
    </div>

  )
}
export default Home;