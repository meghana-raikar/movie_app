import React from 'react'
import './movieContent.css'
import titleImg from "../images/transformer-title.png";
import Button from './Button';


const MovieContent = () => {
  return (
    <>
      <div className="content active">
        <img src={titleImg} alt="Movie-title" className="movie-title" />
        <h4>
          <span>year</span>
          <span>
            <i>age</i>
          </span>
          <span>length</span>
          <span>category</span>
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          accusantium pariatur? Sapiente veritatis maiores quod odit ab, tempora
          illum libero? Repudiandae accusamus corrupti asperiores aut ullam
          praesentium, ut minima reiciendis.
        </p>
        <div className="button">
            <Button />
        </div>
      </div>
    </>
  );
}

export default MovieContent