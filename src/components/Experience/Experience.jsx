import React from "react";
import "./Experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="d-flex justify-content-center align-items-center experience_container mb-5">
        {/* <div className="experience_frontened">
                              <h3>Devops Engineer</h3>
                              <div className="experience_content">
                                    <article className='experience_details'>
                                          <BsFillPatchCheckFill className='experience_details-icons' />
                                          <div>
                                                <h4>Aws</h4>
                                                <small className='text-light'>Experienced</small>
                                          </div>
                                    </article>
                                    <article className='experience_details'>
                                          <BsFillPatchCheckFill className='experience_details-icons' />
                                          <div>
                                                <h4>Docker</h4>
                                                <small className='text-light'>Intermediate</small>
                                          </div>
                                    </article>
                                    <article className='experience_details'>
                                          <BsFillPatchCheckFill className='experience_details-icons' />
                                          <div>
                                                <h4>Terraform</h4>
                                                <small className='text-light'>Experienced</small>
                                          </div>
                                    </article>
                                    <article className='experience_details'>
                                          <BsFillPatchCheckFill className='experience_details-icons' />
                                          <div>
                                                <h4>Ansible</h4>
                                                <small className='text-light'>Experienced</small>
                                          </div>
                                    </article>
                                    <article className='experience_details'>
                                          <BsFillPatchCheckFill className='experience_details-icons' />
                                          <div>
                                                <h4>Jenkins</h4>
                                                <small className='text-light'>Experienced</small>
                                          </div>
                                    </article>
                                    <article className='experience_details'>
                                          <BsFillPatchCheckFill className='experience_details-icons' />
                                          <div>
                                                <h4>Github</h4>
                                                <small className='text-light'>Experienced</small>
                                          </div>
                                    </article>
                              </div>
                        </div> */}
      </div>
      <div className="d-flex justify-content-center align-items-center experience_container">
        <div className="experience_frontened">
          <h3>Frontened Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>React Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>AntD</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backened">
          <h3>Backened Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>REST API </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Auth0</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>NoSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
