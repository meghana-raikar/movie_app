import React, { useState, useEffect } from "react";
import "./schedule.css";
import Card from "../components/Card";


// here we used to 2 usestate because when we filter the movie we do not manipulate the original data fron File.apply.insted we create duplicate usestate named movies to deal after filter data
const Schedule = () => {
    const [data, setData] = useState([])
    const [movies, setMovies] = useState([])

      const fetchData = () => {
        fetch("http://localhost:3000/data/movieData.json")
          .then((res) => res.json())
          .then((data) => setData(data))
          .catch((e) => console.log(e.message));
      };
  
        useEffect(() => {
          fetchData();
        }, []);

        useEffect(()=> {
            setMovies(data);
        })


  return (
    <section id="schedule" className="schedule">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Opening this week</h4>
        </div>
        <div className="row">
          <div className="filters">
            <p>filter</p>
          </div>
        </div>
        <div className="row mt-5">
            {movies && movies.length>0 && movies.map(movie=> (
                <Card key={movie._id} movie = {movie}/>
            ))}
            
        </div>
      </div>
    </section>
  );
};

export default Schedule;
