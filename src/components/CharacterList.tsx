import { styled } from "styled-components";
import { IMarvels } from "../graphql";
import { Link } from "react-router-dom";

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
`;

const ListItemWrapper = styled(Link)`
  width: 80%;
  height: 110px;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 15px;
  & > div:first-child {
    margin-right: 20px;
  }

  &:hover {
    box-shadow: 0 2px 5px 1px ${(props) => props.theme.textColor};
    border-radius: 8px;
    cursor: pointer;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

export default function CharacterList(props: { data: IMarvels }) {
  const { data } = props;
  return (
    <ListItemWrapper to={`marvels/${data.id}`}>
      <div>
        <Thumbnail src={`${data.thumbnail.path}.jpg`} />
      </div>
      <Description>
        <p> 🟣 Name : {data.name}</p>
        <p> 🟣 Description : {data.description ? data.description : ""}</p>
        <p> 🟣 Comics : Volum {data.comics.available} </p>
      </Description>
    </ListItemWrapper>
  );
}
