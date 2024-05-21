import { Component } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub  } from "react-icons/fa";
import logo from "./vs-logo.png";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <input type="checkbox" id="check"/>
          <label htmlFor="check" className="checkbtn">
            <i><RxHamburgerMenu/></i>
          </label>
          <a href="./"><img id="logo" src={logo} alt="VS-logo"/></a>
          <ul>
            <li><a id="nav__a" href="./">Home</a></li>
            <li><a id="nav__a" href="./#about">About</a></li>
            <li><a id="nav__a" href="./#projects">Projects</a></li>
            <li><a id="nav__a" href="./#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="home__section">
          <div className="home__hero">
            <h1>Hey, I'm Stefan</h1>
            <p>I am determined to become a skilled web developer <br/> and actively working towards that goal.</p>
            <div id="home__projects">
              <a href="./#projects">Projects</a>
            </div>
          </div>
          <div className="social__icons">
            <a href="https://github.com/vasiustefan" target="_blank" rel="noreferrer"><FaGithub className="social__react__icons"/></a>
            <a href="https://www.linkedin.com/in/stefan-vasiu-516559264/" target="_blank" rel="noreferrer"><FaLinkedin className="social__react__icons" id="linkedin__icon"/></a>
            <a href="https://www.facebook.com/profile.php?id=100081885259340" target="_blank" rel="noreferrer"><FaFacebook className="social__react__icons" id="facebook__icon"/></a>
            <a href="https://www.instagram.com/stefan.vasiu/" target="_blank" rel="noreferrer"><FaInstagram className="social__react__icons" id="instagram__icon"/></a>
          </div>
        </div>

        <div className="about__section">
          <div className="about__hero">
            <h1>About me</h1>
            <span> - </span>
            <p>Here you will find more information about me, <br/> what I do, and my current skills mostly in terms of programming and technology</p>
          </div>
          <div className="about__info">
            <div className="about__info__first">
              <h3>Get to know me!</h3>
              <div>
                <p>I am a serious and focused <b>Web Developement Enthusiast</b> who is eager to learn and improve himself.</p>
                <p>Although I may not know a lot currently, <b>I am determined</b> to become a skilled web developer and <b>actively working</b> towards that goal.</p>
                <p>My <b>dedication</b> and <b>willingness</b> to learn are admirable traits that will undoubtedly help me achieve my ambitions.</p>
              </div>
              <div id="about__contact">
                <a href="./#contact">Contact</a>
              </div>
            </div>
            <div className="about__info__second">
              <h3>My skills</h3>
              <div className="skills__tree">
                <div className="skills">HTML</div>
                <div className="skills">CSS</div>
                <div className="skills">JavaScript</div>
                <div className="skills">React.JS</div>
                <div className="skills">Vue.JS</div>
                <div className="skills">GIT</div>
                <div className="skills">GitHub</div>
                <div className="skills">Responsive Design</div>
                <div className="skills">Leadership</div>
                <div className="skills">Time Management</div>
              </div>
            </div>
          </div>
        </div>

        <section className="projects__section">
          <div>
            <div className="projects__hero">
              <h1>Projects</h1>
              <span> - </span>
              <p>Here you will find some of the personal projects that I created,<br/> with each project containing it's own case study</p>
            </div>
            <div className="project_content">
              <div className="project_row">
                <div className="project_row_img"></div>
                <div className="project_row_content">
                  <h3>Name</h3>
                  <p>Description</p>
                  <a href="/project-1">Project Mo. 1</a>
                </div>
              </div>
              <div className="project_row">
                <div className="project_row_img"></div>
                <div className="project_row_content">
                  <h3>Name</h3>
                  <p>Description</p>
                  <a href="/project-1">Project Mo. 1</a>
                </div>
              </div>
              <div className="project_row">
                <div className="project_row_img"></div>
                <div className="project_row_content">
                  <h3>Name</h3>
                  <p>Description</p>
                  <a href="/project-1">Project Mo. 1</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div>
            <h2>Contact
              <span> - </span>
              <div className="contact_form-container">
                <form action="#">
                  <div>Name</div>
                  <div>Email</div>
                  <div>Message</div>
                  <button>Submit</button>
                </form>
              </div>
            </h2>
          </div>
        </section>

        <footer>
          
        </footer>
      </div>
    );
  }
}
export default App;
