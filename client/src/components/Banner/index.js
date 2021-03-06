import React from "react";
import "./style.css";


function Banner() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">React Google Books</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/">Search</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/saved">Saved</a>
          </li>
        </ul>
      </div>
    </nav>



  );
}

export default Banner;
