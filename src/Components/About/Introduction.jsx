import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/pic.png";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">MOHD AZAM </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Delhi (India)
                </span>
                . I am pursuing my graduation in BTech (IT. Engineering)
                from{" "}
                <span className="different">
                  IP University, Shahdara (Delhi)
                </span>
                .  I have done many projects in MERN full stack development.  {" "}
                {/* <span className="different">Masai School</span>  */}Passionate about to create innovative and user-friendly web solutions. Committed to collaborating with a talented team to deliver exceptional user experiences
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
               MERN Stack Developer {" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Freelancer{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Full Stack web Developer {" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                UI/UX Designer{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
