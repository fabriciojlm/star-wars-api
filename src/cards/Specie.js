import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Image, Segment } from "semantic-ui-react";

const Specie = () => {
  const [specie, setSpecie] = useState([]);

  const { id } = useParams();
  const imgURL = "https://starwars-visualguide.com/assets/img/species/";

  useEffect(() => {
    fetch(`https://swapi.dev/api/species/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSpecie(data);
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

    console.log(strippedUrls);
    return strippedUrls;
  };

  return (
    <>
      <Segment style={{ border: "none" }}>
        <Grid columns>
          <Image
            src={`${imgURL + getId(specie.url)}.jpg`}
            size="large"
            ui={true}
            style={{ paddingLeft: "0" }}
          />
          <Grid.Column style={{ width: "50%" }}>
            <h2>{specie.name}</h2>
            <strong>Classification</strong>
            <p>{specie.classification}</p>
            <strong>Designation</strong>
            <p>
              {specie.designation?.charAt(0).toUpperCase() +
                specie.designation?.slice(1)}
            </p>
            <strong>Language</strong>
            <p>{specie.language}</p>
            <strong>Avg Lifespan</strong>
            <p>{specie.average_lifespan?.concat(" years")}</p>
            <strong>Avg Height</strong>
            <p>
              {specie.average_height?.charAt(0).toUpperCase() +
                specie.average_height?.slice(1)?.concat("cm")}
            </p>
            <strong>Hair Color(s)</strong>
            <p>
              {specie.hair_colors?.charAt(0).toUpperCase() +
                specie.hair_colors?.slice(1)}
            </p>
            <strong>Skin Color(s)</strong>
            <p>{specie.skin_colors}</p>
            <strong>Eye Color(s)</strong>
            <p>
              {specie.eye_colors?.charAt(0).toUpperCase() +
                specie.eye_colors?.slice(1)}
            </p>
          </Grid.Column>
        </Grid>
      </Segment>
    </>
  );
};

export default Specie;
