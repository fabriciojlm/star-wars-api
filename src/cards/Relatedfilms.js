import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Grid, Image } from "semantic-ui-react";

export default function Relatedfilms(data) {
  const [films, setFilms] = useState([]);
  let urls = data.data;
  let requests = urls.map((urls) =>
    fetch(`https://swapi.dev/api/films/${urls}`, {
      cache: "reload",
    })
  );

  useEffect(() => {
    Promise.all(requests)
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((data) => setFilms(data));
  }, [data]);

  function getId(url) {
    return url?.split("/")[url?.split("/").length - 2];
  }

  const getRomanNumeral = function (number) {
    var numeral;
    // eslint-disable-next-line default-case
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
      <Grid columns={6} relaxed>
        {films.map((films, i) => {
          let id = getId(films.url);
          return (
            <Grid.Column key={i}>
              <Card raised={true}>
                <Image
                  src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
                  size={"small"}
                />
                <Card.Content>
                  <Link to={`/films/${id}`}>
                    <strong>
                      {"Episode " +
                        getRomanNumeral(films.episode_id) +
                        ": " +
                        films.title}
                    </strong>
                  </Link>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
}
