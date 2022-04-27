import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";

export default function Relatedfilms(data) {
  const [films, setFilms] = useState([]);
  let urls = data.data;
  let requests = urls.map((urls) =>
    fetch(`https://swapi.dev/api/people/${urls}`, {
      mode: "cors",
      cache: "no-cache",
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
  return (
    <>
      {" "}
      <Grid columns={6}>
        {films.map((films, i) => {
          let id = getId(films.url);
          return (
            <Grid.Column style={{ paddingBottom: "0" }}>
              <Link to={`/people/${id}`}>
                <strong>{films.name}</strong>
              </Link>
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
}
