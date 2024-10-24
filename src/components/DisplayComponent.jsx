import Biography from "./Biography.jsx";
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import Gallery from "./Gallery.jsx";
import Skills from "./Skills.jsx";
import Resume from "./Resume.jsx";
import Contact from "./Contact.jsx";

function DisplayComponent( { activePage }) {
    switch (activePage) {
    case "Home":
        {console.log('biography')}
        return <Home />;
    case "Biography":
        {console.log('biography')}
        return <Biography />
    case "Projects":
        {console.log('projects')}
        return <Projects />
    case "Gallery":
        {console.log('Gallery')}
        return <Gallery />
    case "Skills":
        {console.log('Skills')}
        return <Skills />
    case "Resume":
        {console.log('Resume')}
        return <Resume />
        case "Contact":
        {console.log('Contact')}
        return <Contact />
    default:
      return <Home />;
  }
}

export default DisplayComponent;