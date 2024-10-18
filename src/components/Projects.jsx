import "/src/css/projects.css";
//public/images/project/Simmons.JPG
function Projects() {
  return (
    <>
      <div className="allign">
        <p className="projHeader">SAMPLE PROJECTS I DID FROM THE PAST YEARS</p>
        <div className="projects">
          <a href="https://know-thy-coffee.vercel.app/"  target="_blank" rel="noopener noreferrer">
            <img src="images/project/Know Thy Coffee.JPG" className="projImage" />
          </a>
          <a href="https://pathfinder4.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src="images/project/PathFinder.JPG" className="projImage" />            
          </a>
          <a href="https://web-simmons.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src="images/project/Simmons.JPG" className="projImage" />
          </a>
          <a href="https://simple-sign-up-page-blush.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src="images/project/Sign Up Page.JPG" className="projImage" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Projects;
