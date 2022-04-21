import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Dimmer, Grid, Image, Loader } from "semantic-ui-react";
import "../assets/css/styles.css";

const Films = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const imgURL = "https://starwars-visualguide.com/assets/img/films/";

  useEffect(() => {
    fetch(`https://swapi.dev/api/films/`)
      .then((res) => res.json())
      .then((resp) => {
        setFilms(resp.results);
        setLoading(false);
      });
  }, []);

  function getId(url) {
    return url.split("/")[url.split("/").length - 2];
  }

  const getRomanNumeral = function (number) {
    var numeral;
    switch (number) {
      case 1:
        numeral = "I";
        break;
      case 2:
        numeral = "II";
        break;
      case 3:
        numeral = "III";
        break;
      case 4:
        numeral = "IV";
        break;
      case 5:
        numeral = "V";
        break;
      case 6:
        numeral = "VI";
        break;
      case 7:
        numeral = "VII";
        break;
      case 8:
        numeral = "VIII";
        break;
      case 9:
        numeral = "IX";
        break;
      case 10:
        numeral = "X";
        break;
    }
    return numeral;
  };

  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        Films
      </h1>
      {loading ? (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      ) : (
        <Grid columns={5}>
          {films.map((films, i) => {
            let id = getId(films.url);
            return (
              <Grid.Column key={i}>
                <Card color="red" className="card-container">
                  <Link to={`/films/${id}`}>
                    <Image
                      src={`${imgURL + getId(films.url)}.jpg`}
                      size="medium"
                      ui={true}
                    />
                  </Link>
                  <Card.Content textAlign="center">
                    <Card.Header>
                      {"Episode " +
                        getRomanNumeral(films.episode_id) +
                        ": " +
                        films.title}
                    </Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default Films;
