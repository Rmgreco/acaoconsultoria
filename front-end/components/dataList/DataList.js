"use client";
import React, { useState, useEffect } from "react";
import UserCard from "../userCard/UserCard";
import { CardList } from "./DataListStyles";



const DataList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/random-data")
      .then((response) => response.text())
      .then((data) => {
        return JSON.parse(data);
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Erro ao obter dados:", error));
  }, []);
  console.log(data, "aqui");

  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <div>
      <h1>Random Data Viewer</h1>
      <CardList>
        {data.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </CardList>
    </div>
  );
};

export default DataList;
