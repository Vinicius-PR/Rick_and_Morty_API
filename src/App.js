import Characters from "./components/Characters/Characters";
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const Title = styled.h1`
  text-align: center;
  color: #FFF;
  margin-top: 1rem;

  @media (max-width: 450px) {
    font-size: 1.5rem;
  }

  @media (max-width: 375px) {
    /* font-size: 1rem; */
  }
`;

const SubTitle = styled.h2`
  text-align: center;
  color: #FFF;

  @media (max-width: 450px) {
    font-size: 1rem;
  }

  @media (max-width: 375px) {
    /* font-size: 0.6rem; */
  }
`;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Title>Rick and Morty API</Title>
      <SubTitle>Using React Query</SubTitle>
      <Characters />
    </QueryClientProvider>
  );
}

export default App;
