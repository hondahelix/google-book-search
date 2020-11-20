import React from "react";
import "./style.css";

function Results({results, handleSave}) {
  return <article className="resultsContainer container-fluid d-flex justify-content-center">
    <div class="row">

    {results.map((cards, index)  => (
      <div key={index} class="card">
        <div class="body">
          <div class="row">
            <div class="col-8 header">
              <h3 class="title">{cards.title}</h3>
              <h5 class="author">By {cards.authors}</h5>
              
            </div>
            <div class="col-4">
              <button class="view btn btn-outline-primary" onClick = {event => handleSave(event, index)}>Save</button>

              <button class="delete btn btn-outline-danger">Delete</button>
            </div>
            <hr/>
          </div>

          <a href = {cards.link} target= "_blank">
          <img class="image" src={cards.image} alt = {cards.title}/>
          </a>
          <p class="text">{cards.description}</p>

        </div>
      </div>
     ))}
    </div>
  </article>;
}

export default Results;