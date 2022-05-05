import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Dimmer,
  Grid,
  Image,
  Loader,
  Pagination,
} from "semantic-ui-react";
import "../assets/css/styles.css";

const Planets = () => {
  const [planets, setPlantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/?page=${page}`)
      .then((res) => res.json())
      .then((resp) => {
        setPlantes(resp.results);
        setLoading(false);
      });
  }, [page]);

  function getId(url) {
    return url.split("/")[url.split("/").length - 2];
  }

  function getImage(id) {
    return (
      <Image
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        size="medium"
        ui={true}
        alt=""
        onError={(event) => {
          event.target.src =
            "https://starwars-visualguide.com/assets/img/placeholder.jpg";
          event.onerror = null;
        }}
       />
    );
  }

  const handlePageChange = useCallback((e, { activePage }) => {
    setPage(activePage);
  }, []);

  return (
    <>
      <h1 className="title">
        Planets
        <Pagination
          boundaryRange={0}
          activePage={page}
          onPageChange={handlePageChange}
          totalPages={5}
          siblingRange={4}
          firstItem={null}
          lastItem={null}
          inverted
        />
      </h1>
      {loading ? (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      ) : (
        <Grid columns={5}>
          {planets.map((planets, i) => {
            let id = getId(planets.url);
            return (
              <Grid.Column key={i}>
                <Card color="green" className="card-container">
                  <Link to={`/planets/${id}`}>{getImage(id)}</Link>
                  <Card.Content textAlign="center">
                    <Card.Header>{planets.name}</Card.Header>
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

export default Planets;
