import React from "react";
import Search from "../components/searchBar/Search";
import Categories from "./Categories";
import ListImageCard from "./ListImageCard";

const Main = () => {
  return (
    <>
      <Search />
      <Categories />
      <ListImageCard />
    </>
  );
};

export default Main;
