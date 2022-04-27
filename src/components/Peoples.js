import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Grid,
  Image,
  Pagination,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import "../assets/css/styles.css";

const Peoplelist = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const imgURL = "https://starwars-visualguide.com/assets/img/characters/";
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${page}`, {
      cache: "no-cache",
    })
      .then((res) => res.json())
      .then((resp) => {
        setPeople(resp.results);
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
        Peoples
        <Pagination
          activePage={page}
          onPageChange={handlePageChange}
          pointing
          secondary
          totalPages={9}
          inverted
        />
      </h1>
      {loading ? (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      ) : (
        <Grid columns={5}>
          {people.map((people, i) => {
            let id = getId(people.url);
            return (
              <Grid.Column key={i}>
                <Card color="red" className="card-container">
                  <Link to={`/people/${id}`}>
                    <Image
                      src={`${imgURL + getId(people.url)}.jpg`}
                      size="medium"
                      ui={true}
                    />
                  </Link>
                  <Card.Content textAlign="center">
                    <Card.Header>{people.name}</Card.Header>
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

export default Peoplelist;
