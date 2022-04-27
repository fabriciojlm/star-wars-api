import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Image, Segment } from "semantic-ui-react";
import RelatedPersons from "./RelatedPersons";
import "../assets/css/styles.css";

const Film = () => {
  const [film, setFilm] = useState([]);
  const { id } = useParams();
  const imgURL = "https://starwars-visualguide.com/assets/img/films/";

  useEffect(() => {
    fetch(`https://swapi.dev/api/films/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFilm(data);
      });
  }, [id]);

  function getId(url) {
    return url?.split("/")[url?.split("/").length - 2];
  }

  var parseUrls = function (value) {
    var urls = [];
    var strippedUrls = [];
    if (value instanceof Array) {
      urls = value;
    } else {
      urls = [value];
    }
    strippedUrls = urls.map(function (url) {
      return url?.split("/")[url.split("/").length - 2];
    });

    return strippedUrls;
  };

  const personUrls = parseUrls(film.characters);

  return (
    <>
      <Segment className="segment-container">
        <Grid columns>
          <Image
            src={`${imgURL + getId(film.url)}.jpg`}
            size="large"
            ui={true}
            style={{ paddingLeft: "0" }}
          />
          <Grid.Column className="column-container">
            <h2>{film.title}</h2>
            <strong>Date Created</strong>
            <p>{film.release_date}</p>
            <strong>Director</strong>
            <p>
              {film.director?.charAt(0).toUpperCase() + film.director?.slice(1)}
            </p>
            <strong>Producer(s)</strong>
            <p>{film.producer}</p>
            <strong>Opening Crawl</strong>
            <p>{film.opening_crawl}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <div className="related-links">
          <strong>Characters in film</strong>
        </div>
        <RelatedPersons data={personUrls} />
      </Segment>
    </>
  );
};

export default Film;
