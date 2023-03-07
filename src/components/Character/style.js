import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(60, 62, 68);
  display: flex;
  height: 11.75rem;
  width: 35.5rem;
  border-radius: 1rem;
  margin: 1rem;

  @media (max-width: 450px) {
    flex-direction: column;
    height: auto;
  }
`;

export const ImgContainer = styled.div`
  width: 11.75rem;
  height: 11.75rem;

  @media (max-width: 450px) {
    flex-direction: column;
    height: 15.75rem;
    width: 100%;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    height: auto;
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;

    @media (max-width: 450px) {
      border-bottom-left-radius: 0;
      border-top-right-radius: 1rem;
    }
  }
`;

export const InfoContainer = styled.div`
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  padding: 1rem;
`;

export const NameStatus = styled.section`
  p {
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 1.5rem;

    @media (max-width: 375px) {
      font-size: 1rem;
    }
  }
`;

export const Location = styled.section`
  @media (max-width: 450px) {
    margin-top: 1rem;
  }
`;

export const FirstSeen = styled.section`
  @media (max-width: 450px) {
    margin-top: 1rem;
  }
`;

export const WeakText = styled.p`
  color: rgb(158, 158, 158);
  margin-bottom: 0.2rem;
`;

export const SpanContainer = styled.span`
  margin-right: 0.5rem;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
