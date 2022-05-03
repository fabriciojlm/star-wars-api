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

const Species = () => {
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);
  const imgURL = "https://starwars-visualguide.com/assets/img/species/";
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.dev/api/species/?page=${page}`)
      .then((res) => res.json())
      .then((resp) => {
        setSpecies(resp.results);
        setLoading(false);
      });
  }, [page]);

  function getId(url) {
    return url.split("/")[url.split("/").length - 2];
  }

  const handlePageChange = useCallback((e, { activePage }) => {
    setPage(activePage);
  }, []);

  return (
    <>
      <h1 className="title">
        Species
        <Pagination
          boundaryRange={0}
          activePage={page}
          onPageChange={handlePageChange}
          totalPages={4}
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
          {species.map((species, i) => {
            let id = getId(species.url);
            return (
              <Grid.Column key={i}>
                <Card color="orange" className="card-container">
                  <Link to={`/species/${id}`}>
                    <Image
                      src={`${imgURL + getId(species.url)}.jpg`}
                      size="medium"
                      ui={true}
                    />
                  </Link>
                  <Card.Content textAlign="center">
                    <Card.Header>{species.name}</Card.Header>
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

export default Species;
