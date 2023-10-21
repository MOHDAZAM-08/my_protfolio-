import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiMysql
} from "react-icons/si";
import { DiCss3, DiReact, DiJava } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import carrerboot from "../../assets/carrer.png";
import college from "../../assets/college.png";
import hoda from "../../assets/hoda.png";
import news from "../../assets/news.png";
import design from "../../assets/design.png";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
        <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={college} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>CollegeEazy</h2>
                <p>
                  Full stack project which provide notes of B tech . front-end in full on React and backend is full on SpringBoot
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <DiJava />
                  <SiMysql />
                </div>
                <div>
                  <a
                    href="https://collegeeazy.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={hoda}
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              
              <div className="project_information">
                <h2>Hoda electricals</h2>
                <p>
                  It's a Company's portfolio website which deals with Industrial Electrical works.
                  Monthly 100s of users visit this Website.

                </p>
                <div>
                  <DiCss3 />
                  <DiReact />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://hodaelectricals.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  {/* <a
                    href="https://github.com/Shreyasgkhakal100/Weather-App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={design}
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              
              <div className="project_information">
                <h2>The Design Yard</h2>
                <p>
                  It's a Company's portfolio website which deals with Interior Design.
                  Monthly 500+ of users visit this Website.
                </p>
                <div>
                  <DiCss3 />
                  <DiReact />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://thedesignyard.co.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  {/* <a
                    href="https://github.com/Shreyasgkhakal100/Weather-App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

         
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={carrerboot}
                    alt="Rockstar Games"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>CarrerBoot</h2>
                <p>
                  CarrerBoot provides the best community base for learners and beginners with all the top rated content with help of mchine learning.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://career-boot-project.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  {/* <a
                    href="https://github.com/aman-638/store.rockstartgames.com-Frontend-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={news}
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Samachar-4-U</h2>
                <p>
                  API for a newsweb like app built using NodeJS,

                  Express, Mongoose, MongoDB  for storage. provide live news.update live.
                  React help make it faster and without loading web
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <DiReact />
                  {/* <SiMongodb /> */}
                </div>
                <div>
                  {/* <a
                    href="https://drive-system.herokuapp.com/user/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      URL for the API
                    </span>
                  </a>
                  <a
                    href="https://github.com/imbickydutta/file-system-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/934WpdD/uniqlo-clone.png"
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Uniqlo Clone</h2>
                <p>
                  UNIQLO is a clothing apparel company, from Japan. They also
                  sell their products in online mode through their website. We
                  cloned their website.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://uniqlo-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/uniqlo-backend-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/KVBGkdy/FFD69103-C304-42-E8-BCCD-8836-AAEFEA9-C.jpg"
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>PulsePlus Clone</h2>
                <p>
                  PulsePlus is an E-commerce web application for online Buying
                  Medicines and Consult to Doctor and Book a near Testlab.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://pulseplus-clone.netlify.app/landing_page.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/www.pulseplus.in-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

    </>
  );
};
