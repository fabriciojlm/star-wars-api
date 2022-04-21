import React, { useState } from "react";
import { Menu, Container, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Star Wars Api");
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Container>
          <Link to="/">
            <Menu.Item
              name="Star Wars API"
              active={activeItem === "Star Wars API"}
              onClick={handleItemClick}
            />
          </Link>
          <Link to="/people">
            <Menu.Item
              name="Characters"
              active={activeItem === "Characters"}
              onClick={handleItemClick}
            />
          </Link>
          <Link to="/planets">
            <Menu.Item
              name="Planets"
              active={activeItem === "Planets"}
              onClick={handleItemClick}
            />
          </Link>
          <Link to="/species">
            <Menu.Item
              name="Species"
              active={activeItem === "Species"}
              onClick={handleItemClick}
            />
          </Link>
          <Link to="/films">
            <Menu.Item
              name="Films"
              active={activeItem === "Films"}
              onClick={handleItemClick}
            />
          </Link>
        </Container>
      </Menu>
    </Segment>
  );
}
