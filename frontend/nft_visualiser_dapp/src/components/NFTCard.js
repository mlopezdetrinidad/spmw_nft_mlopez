import React from 'react';
import styled from 'styled-components';

const NFTCard = (props) => {
    const { nft, toggleModal } = props;
  
    return (
        <NftCard onClick={() => toggleModal()}>
          <NftPhoto backgroundImageURL={nft.image} />
          <div style={{ margin: 5}}>
              <NftCollectionText> {nft && nft.symbol} </NftCollectionText>
              <NftName> {nft && nft.name} </NftName>
              <NftName float="right"> {`x${nft && nft.copies}`} </NftName>
          </div>
        </NftCard>
    );
};

const NftCollectionText = styled.div`
  font-size: 12px;
  color: gray;
`;

const NftName = styled.div`
  font-size: 12px;
  font-weight: bold;
  display: inline;
  float: ${({float}) => float};
`;

export const NftPhoto = styled.div`
  display: block;
  width: 200px;
  height: 200px;
  background-position: center center;
  background-size: cover;
  background-image: url(${({backgroundImageURL}) => backgroundImageURL});
  border-radius: 10px;
  margin: auto;
`;

const NftCard = styled.div`
  width: 200px;
  height: 250px;
  margin: auto;
  border-radius: 10px;
  padding: 0;
  cursor: pointer;
  box-shadow: 8px 8px 16px #d9d9d9,
            -8px -8px 16px #ffff;
`;

export default NFTCard;