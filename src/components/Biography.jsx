import "/src/css/biography.css";
import LetterByLetter from "./LetterByLetter";
import Profile from '/image/profile-image.png';
//images/Archivist.png
function Biogprahy() {
  const para1 = `Hi, I'm Miguel Mañabo, a seasoned IT professional with 4 years of
  experience working with development projects. Over those years, I
  developed a unique expertise in Web Development, Data Analytics and
  Artificial Intelligence Modeling.`;

  const para2 = `Born and Raised in Cavite, I was surrounded by tech at a very young
  age. I pursued my Bachelor's degree in Information Systems at La
  Verdad Christian College where I developed a solid foundation of
  programming languages, leadership skills, data structures and project
  management.`;
  return (
    <>
      <img src={Profile} className="bioImage" />
      <div className="biographyContent">
        <p className="headline">
          CODING <span style={{ color: "#3CBDBD" }}>VISION</span> INTO{" "}
          <span style={{ color: "#3CBDBD" }}>REALITY</span>
        </p>
        <p>
          <LetterByLetter content={para1} />
        </p>
        <p>
        <LetterByLetter content={para2} />
        </p>
      </div>
    </>
  );
}

export default Biogprahy;
