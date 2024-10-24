import "/src/css/projects.css";
import KnowThyCoffee from '/src/project/Know-Thy-Coffee.JPG'
import PathFinder from '/src/project/PathFinder.JPG'
import SignUp from '/src/project/Sign Up Page.JPG'
import Simmons from '/src/project/Simmons.JPG'
function Projects() {
  return (
    <>
      <div className="allign">
        <p className="projHeader">SAMPLE PROJECTS I DID FROM THE PAST YEARS</p>
        <div className="projects">
          <a href="https://know-thy-coffee.vercel.app/"  target="_blank" rel="noopener noreferrer">
            <img src={KnowThyCoffee} className="projImage" />
          </a>
          <a href="https://pathfinder4.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={PathFinder} className="projImage" />            
          </a>
          <a href="https://web-simmons.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={Simmons} className="projImage" />
          </a>
          <a href="https://simple-sign-up-page-blush.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={SignUp} className="projImage" />
          </a>
        </div>
      </div>
    </>
  );
}
//public
export default Projects;
