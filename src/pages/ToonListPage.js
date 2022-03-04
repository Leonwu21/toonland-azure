import React from "react";
import { Link } from "react-router-dom";
import toons from "../data/toons";
import ToonList from "../components/ToonList";
const ToonListPage = () => (
  <React.Fragment>
    <h1>Toons List Page</h1>
    <ToonList />
    {toons.map((person, key) => (
      <Link key={key} to={`/detail/${person.id}`}>
        <h6>
          {person.id} {person.firstName} {person.lastName}
        </h6>
      </Link>
    ))}
  </React.Fragment>
);
export default ToonListPage;
