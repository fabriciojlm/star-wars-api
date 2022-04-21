import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Image, Segment } from "semantic-ui-react";
import Relatedfilms from "./Relatedfilms";

const Person = () => {
  const [person, setPerson] = useState([]);
  const [home, setHome] = useState([]);
  const { id } = useParams();
  const imgURL = "https://starwars-visualguide.com/assets/img/characters/";

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPerson(data);
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

  const filmsUrl = parseUrls(person.films);
  return (
    <>
      <Segment style={{ border: "none" }}>
        <Grid columns>
          <Image
            src={`${imgURL + getId(person.url)}.jpg`}
            size="large"
            ui={true}
            style={{ paddingLeft: "0" }}
          />
          <Grid.Column style={{ width: "50%" }}>
            <h2>{person.name}</h2>
            <strong>Birth Year</strong>
            <p>{person.birth_year}</p>
            <strong>Species</strong>
            <p>
              {person.specie?.charAt(0).toUpperCase() + person.gender?.slice(1)}
            </p>
            <strong>Height</strong>
            <p>{person.height?.concat("cm")}</p>
            <strong>Mass</strong>
            <p>{person.mass?.concat("Kg")}</p>
            <strong>Gender</strong>
            <p>
              {person.gender?.charAt(0).toUpperCase() + person.gender?.slice(1)}
            </p>
            <strong>Hair Color</strong>
            <p>
              {person.hair_color?.charAt(0).toUpperCase() +
                person.hair_color?.slice(1)}
            </p>
            <strong>Skin Color</strong>
            <p>{person.skin_color}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <div style={{ textAlign: "center", paddingBottom: "1rem" }}>
          <strong>Films</strong>
        </div>
        <Relatedfilms data={filmsUrl}></Relatedfilms>
      </Segment>
    </>
  );
};

export default Person;
