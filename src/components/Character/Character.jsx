import React from "react";
import {
  Container,
  FirstSeen,
  ImgContainer,
  InfoContainer,
  Location,
  NameStatus,
  SpanContainer,
  WeakText,
} from "./style";

export default function Character({ props }) {
  return (
    <Container>
      <ImgContainer>
        <img src={props.image} alt={props.name} />
      </ImgContainer>
      <InfoContainer>
        <NameStatus>
          <h1>{props.name}</h1>
          <p>
            <SpanContainer
              color={
                props.status === "Alive"
                  ? "green"
                  : props.status === "Dead"
                  ? "red"
                  : "yellow"
              }
            ></SpanContainer>
            {props.status} - {props.species}
          </p>
        </NameStatus>

        <Location>
          <WeakText>Last known location:</WeakText>
          <p>{props.origin.name}</p>
        </Location>

        <FirstSeen>
          <WeakText>First seen in:</WeakText>
          <p>{props.location.name}</p>
        </FirstSeen>
      </InfoContainer>
    </Container>
  );
}
