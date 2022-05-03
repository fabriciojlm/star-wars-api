import React from "react";
import "../assets/css/starwarsintro.css";

export default function Home() {
  return (
    <div className="container-home">
      <div class="star-wars-intro">
        <p class="intro-text">UM DESAFIO A SER CUMPRIDO</p>

        <div class="main-content">
          <div class="title-content">
            <p class="content-header">
              STAR WARS - DESAFIO
              <br />A Movie of Atlantico
              <p class="content-body">
                After years of galactic silence, civilization is on the brink of
                a new Star Wars release. Now, with the Force preparing to
                awaken, the people of Earth seek solace in films of old. With
                nowhere to turn, they gather in great numbers and watch the
                original trilogy without rest. Three films. 6 hours. 24 minutes.
                Popcorn. Slushies. Total elation.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
