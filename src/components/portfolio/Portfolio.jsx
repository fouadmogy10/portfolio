import React from 'react';
import IMG1 from '../../assets/redux.PNG';
import IMG2 from '../../assets/res.PNG';
import IMG3 from '../../assets/New.PNG';
import IMG4 from '../../assets/cart.png';
import IMG5 from '../../assets/R.PNG';
import IMG6 from '../../assets/eco.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Cart Redux',
      img: IMG1,
      description:
        'BookStore app that allows users to store books and update progress',
      technologies: 'React | Redux',
      link: 'https://cart1-react-redux.netlify.app/',
      github: 'https://github.com/fouadmogy10/cart-redux',
    },
    {
      id: 2,
      title: 'cart redux-toolkit',
      img: IMG4,
      description:
        'FakeStore app that provides information about available products and their details',
      technologies: 'React | Redux-tool-kit',
      link: 'https://649bdea71a03b242af93a2f2--fabulous-madeleine-7c9d97.netlify.app/',
      github: 'https://github.com/fouadmogy10/cart_reduxToolkit',
    },
    {
      id: 3,
      title: 'resturant-templete',
      img: IMG2,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'React | Webpack',
      link: 'https://restorant-ui.netlify.app',
      github: 'https://github.com/fouadmogy10/resturant-templete',
    },
    {
      id: 4,
      title: 'new-event',
      img: IMG3,
      description:
        'Fully responsive interactive website ',
      technologies: 'React | React-bootstrap',
      link: 'https://new-event-r.netlify.app/',
      github: 'https://github.com/fouadmogy10/new-event-temp---React',
    },
    {
      id: 5,
      title: 'retierd project',
      img: IMG5,
      description:
        'Fully responsive interactive website',
      technologies: 'React | React-bootstrap',
      link: 'https://teal-seahorse-070d22.netlify.app/',
      github: 'https://github.com/fouadmogy10/react-axios-and-reactRouter',
    },
    {
      id: 1,
      title: 'E-commerce app',
      img: IMG6,
      description:
        'Ecommerce Front-End only ',
      technologies: 'React',
      link: 'eco-system-front-end.vercel.app',
      github: 'https://github.com/fouadmogy10/ecoSystem-frontEnd',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
