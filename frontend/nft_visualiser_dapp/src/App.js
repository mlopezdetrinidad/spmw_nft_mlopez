import React from 'react';
import styled from 'styled-components';
import NFTCard, { NftPhoto } from './components/NFTCard';

function App() {
  let nfts = [
    { name: 'Mario', symbol: 'SMWC', copies: 10, image: 'https://via.placeholder.com/150'},
    { name: 'Luigi', symbol: 'SMWC', copies: 10, image: 'https://via.placeholder.com/150'},
    { name: 'Yoshi', symbol: 'SMWC', copies: 10, image: 'https://via.placeholder.com/150'},
    { name: 'Donkey Kong', symbol: 'SMWC', copies: 10, image: 'https://via.placeholder.com/150'},
    { name: 'Mario', symbol: 'SMWC', copies: 10, image: 'https://via.placeholder.com/150'},
    { name: 'Luigi', symbol: 'SMWC', copies: 10, image: 'https://via.placeholder.com/150'},
    { name: 'Yoshi', symbol: 'SMWC', copies: 10, image: 'https://via.placeholder.com/150'},
    { name: 'Donkey Kong', symbol: 'SMWC', copies: 10, image: 'https://via.placeholder.com/150'},
  ];
  return (
    <div className="App">
      <Container>
        <Title>Super Mario World Collection</Title>
        <Subtitle>The rarest and best Super Mario World</Subtitle>
        <Grid>
            {nfts.map((nft, i) => (
            <React.Fragment key={i}>
              <NFTCard nft={nft} />
            </React.Fragment>
            ))}
        </Grid>
      </Container>
      <NFTModal nft={nfts[0]} />
    </div>
  );
}

const NFTModal = (props) => {
  const { nft } = props;
  return (
    <Modal>
      <ModalContent>
        <ModalGrid>
          <NftPhoto style={{ height: 400, width: 400 }} backgroundImageURL={nft && nft.image} />
          <div>
            <ModalTitle>{nft && nft.name}</ModalTitle>
            <Paragraph> {`You own ${nft && nft.copies} copies`} </Paragraph>
            <SectionText> Description </SectionText>
            <Paragraph style={{width: 400}}> {nft && nft.description} </Paragraph>
            <SectionText> Attributes </SectionText>
          </div>
        </ModalGrid>
      </ModalContent>
    </Modal>
  );
};

const ModalTitle = styled.h1`
  margin: 0;
`;

const Paragraph = styled.p`
  margin: 0 0 15px 0;
`;

const SectionText = styled.h3`
  margin: 5px 0 5px 0;
`;

const ModalGrid = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
`;

const Modal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  position: relative;
  width: 900px;
  margin: auto;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;
`;

const Subtitle = styled.h4`
  color: gray;
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
`;

const Container = styled.div`
  width: 70%;
  max-width: 1200px;
  margin: auto;
  margin-top: 100px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 40px;
`;

export default App;
