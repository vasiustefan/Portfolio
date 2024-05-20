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
            <div className="home__a" id="home__a">
              <a href="./#projects">Projects</a>
            </div>
          </div>
          <div className="social__icons">
            <a href="https://github.com/vasiustefan" target="_blank" rel="noreferrer"><FaGithub className="social__ico"/></a>
            <a href="https://www.linkedin.com/in/stefan-vasiu-516559264/" target="_blank" rel="noreferrer"><FaLinkedin className="social__ico" /></a>
            <a href="https://www.facebook.com/profile.php?id=100081885259340" target="_blank" rel="noreferrer"><FaFacebook className="social__ico" /></a>
            <a href="https://www.instagram.com/stefan.vasiu/" target="_blank" rel="noreferrer"><FaInstagram className="social__ico"/></a>
          </div>
        </div>

        <div className="about__section">
          <h2>
            About me
            <span> - </span>
            <span>asdakdlasdlsakdaslfkaslsfalskfslalafsk</span>
          </h2>
          <div>
            <div>
              <h3>Get to know me!</h3>
              <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias maxime porro accusantium dicta quia nemo ducimus! Maxime, alias consectetur. Minima, numquam nostrum provident recusandae deleniti labore voluptatum necessitatibus aliquid maxime.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias maxime porro accusantium dicta quia nemo ducimus! Maxime, alias consectetur. Minima, numquam nostrum provident recusandae deleniti labore voluptatum necessitatibus aliquid maxime.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias maxime porro accusantium dicta quia nemo ducimus! Maxime, alias consectetur. Minima, numquam nostrum provident recusandae deleniti labore voluptatum necessitatibus aliquid maxime.</p>
              </div>
              <a href="./#contact">Contact like a button in CSS</a>
            </div>
            <div>
              <h3>My skills</h3>
              <div>
                <div>HTML</div>
                <div>CSS</div>
                <div>JavaScript</div>
                <div>React.JS</div>
                <div>Vue.JS</div>
              </div>
            </div>
          </div>
        </div>

        <section id="projects">
          <div>
            <div>
                <h2>Projects
                  <span> - </span>
                  <span>Here you will find some of the personal projects that I created, with each project containing it's own case study</span>
                </h2>
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
