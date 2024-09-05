import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Food.PNG";
import IMG2 from "../../assets/Weather.PNG";
import IMG3 from "../../assets/Todo.PNG";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Food Management",
      gitub: "https://git.technetgrp.com/sofit/web/frontend/food-management",
      demo: "https://git.technetgrp.com/sofit/web/frontend/food-management",
    },
    {
      id: 2,
      image: IMG2,
      title: "Weather App",
      gitub: "https://github.com/MuhammadHamzaWaqar1317/WeatherApp",
      demo: "https://hamza1317-weather-app.netlify.app/",
    },
    {
      id: 3,
      image: IMG3,
      title: "Todo App",
      gitub: "https://github.com/MuhammadHamzaWaqar1317/RTK-Auth-Todo",
      demo: "https://todo-hamza-app.netlify.app/",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map((item) => {
          return (
            <article key={item.id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={item.image} alt="" />
              </div>
              <h3>{item.title}</h3>
              <div className="porifolio_item-cta">
                <a
                  href={item.gitub}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Gitub
                </a>
                <a
                  href={item.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
