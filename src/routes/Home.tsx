import { useQuery } from "@apollo/client";
import { IMarvels, allMarvels } from "../graphql";
import Header from "../components/Header";
import CharacterList from "../components/CharacterList";
import { styled } from "styled-components";

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export default function Home() {
  const { data, loading, error } = useQuery(allMarvels);

  if (loading) {
    return <h2>Loading ...</h2>;
  }

  if (error) {
    return <h1>Error is occured</h1>;
  }
  return (
    <>
      <Header />
      <ListWrapper>
        {data?.allMarvels
          .filter(
            (marvel: IMarvels) =>
              marvel.description.length > 0 &&
              !marvel.description.startsWith("<") &&
              !marvel.description.startsWith("&")
          )
          .map((marvel: IMarvels) => (
            <CharacterList key={marvel.id} data={marvel} />
          ))}
      </ListWrapper>
    </>
  );
}
