import { useQuery } from "@apollo/client";
import { IMarvels, allMarvels } from "../graphql";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const Thumbnail = styled.img`
  width: 55vw;
  height: 500px;
  border-radius: 20px;
  margin-bottom: 20px;
  &:hover {
    -webkit-animation: rotate-in-center 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: rotate-in-center 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;

const DetailTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 20px;
  text-decoration: underline;
`;

const ComicsList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ComicsListItem = styled.li`
  padding: 10px 15px;
`;

export default function Character() {
  const { data, loading, error } = useQuery(allMarvels);
  const { charId } = useParams();
  console.log(
    data?.allMarvels.filter((marvel: IMarvels) => {
      return marvel.id === charId;
    })[0]
  );
  if (loading) {
    return <h2>Loading ...</h2>;
  }

  if (error) {
    return <h1>Error is occured</h1>;
  }
  return (
    <>
      {data?.allMarvels
        .filter((marvel: IMarvels) => marvel.id === charId)
        .map((marvel: IMarvels) => (
          <ComicsList key={marvel.id}>
            <div>
              <Thumbnail src={`${marvel.thumbnail.path}.jpg`} />
            </div>
            <DetailTitle style={{ color: "#7562B3" }}>
              Name : {marvel.name}
            </DetailTitle>
            <DetailTitle>Comics Volumes</DetailTitle>
            {marvel.comics.items.map((comic) => (
              <ComicsListItem key={comic.name}>{comic.name}</ComicsListItem>
            ))}
          </ComicsList>
        ))}
    </>
  );
}
