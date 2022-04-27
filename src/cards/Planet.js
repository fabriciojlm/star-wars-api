import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Image, Segment } from "semantic-ui-react";
import "../assets/css/styles.css";

const Planet = () => {
  const [planet, setPlant] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPlant(data);
      });
  }, [id]);

  function getImage(id) {
    return (
      <Image
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt=""
        size="large"
        ui={true}
        style={{ paddingLeft: "0" }}
        onError={(event) => {
          event.target.src =
            "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
          event.onerror = null;
        }}
      ></Image>
    );
  }

  return (
    <>
      <Segment className="segment-container">
        <Grid columns>
          {getImage(id)}
          <Grid.Column className="column-container">
            <h2>{planet.name}</h2>
            <strong>Population</strong>
            <p>{planet.population}</p>
            <strong>Rotation Period</strong>
            <p>
              {planet.rotation_period?.charAt(0).toUpperCase() +
                planet.rotation_period?.slice(1)?.concat(" days")}
            </p>
            <strong>Orbital Period</strong>
            <p>{planet.orbital_period?.concat(" days")}</p>
            <strong>Diameter</strong>
            <p>{planet.diameter?.concat("km")}</p>
            <strong>Gravity</strong>
            <p>
              {planet.gravity?.charAt(0).toUpperCase() +
                planet.gravity?.slice(1)}
            </p>
            <strong>Terrain</strong>
            <p>
              {planet.terrain?.charAt(0).toUpperCase() +
                planet.terrain?.slice(1)}
            </p>
            <strong>Surface Water</strong>
            <p>{planet.surface_water?.concat("%")}</p>
            <strong>Climate</strong>
            <p>
              {planet.climate?.charAt(0).toUpperCase() +
                planet.climate?.slice(1)}
            </p>
          </Grid.Column>
        </Grid>
      </Segment>
    </>
  );
};

export default Planet;
