import React from "react";

export default function Getfilms() {
  const data = [
    {
      name: "Luke Skywalker",
      homeworld: "http://swapi.dev/api/planets/1/",
      films: [
        "http://swapi.dev/api/films/1/",
        "http://swapi.dev/api/films/2/",
        "http://swapi.dev/api/films/3/",
        "http://swapi.dev/api/films/6/",
      ],
      url: "http://swapi.dev/api/people/1/",
    },
    {
      name: "Anakin Skywalker",
      homeworld: "http://swapi.dev/api/planets/1/",
      films: [
        "http://swapi.dev/api/films/4/",
        "http://swapi.dev/api/films/5/",
        "http://swapi.dev/api/films/6/",
      ],
      url: "http://swapi.dev/api/people/11/",
    },
  ];
  const getNames = () => {
    const datas = Promise.all(
      data.map(({ films }, i) =>
        Promise.all(
          films.map((film) => fetch(film).then((res) => res.json()))
        ).then((res) => res)
      )
    ).then(() => {});
    console.log(datas);
  };
  getNames();
  return <div></div>;
}
