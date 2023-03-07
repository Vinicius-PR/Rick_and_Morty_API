import React, { useState } from "react";
import Character from "../Character/Character";
import { useQuery } from "react-query";
import { Container, StatusText, Main } from "./style";
import Pagination from "../Pagination/Pagination";

export default function Characters() {
  const [page, setPage] = useState(1);

  async function fetchCharacters({ queryKey }) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  }

  const { data, isLoading, isError, error } = useQuery(
    ["characters", page],
    fetchCharacters,
    { keepPreviousData: true }
  );

  if (isError) {
    return <StatusText>Error : {error.message}</StatusText>;
  }

  if (isLoading) {
    return <StatusText>Loading...</StatusText>;
  }

  return (
    <Main>
      <Pagination
        page={page}
        numberOfPages={data?.info.pages}
        haddleChangePage={setPage}
      />

      <Container>
        {data?.results.map((character, index) => (
          <Character key={index} props={character} />
        ))}
      </Container>

      <Pagination
        page={page}
        numberOfPages={data?.info.pages}
        haddleChangePage={setPage}
      />
    </Main>
  );
}
