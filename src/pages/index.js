import Head from 'next/head';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 50px;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Next.js Bootstrap</title>
      </Head>
      <h1>Next.js Bootstrap</h1>
      <p>A simple Next.js Bootstrap for getting your POCs up and running quickly!</p>
      <p>I have setup or already included a bunch of stuff up already: Prettier, Material-UI, Husky, and Axios.</p>
      <p>Have fun.</p>
    </Container>
  );
}
