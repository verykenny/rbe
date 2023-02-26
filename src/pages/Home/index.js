import styled from 'styled-components';

const Home = () => {
  return (
    <HomeContainer>
      <h1>Sustainable economy for future generations.</h1>
      <ContentContainer>
      <TextContainer>
        <p>BlueEconomy is here to provide information and resources on the opportunities and benefits of a resource-based economy. We believe that by focusing on how we can use resources effectively, we can achieve both environmental sustainability and economic prosperity</p>
        <p>Our mission is to inspire a shift in the way we view and use resources, towards a more sustainable and equitable future. Our vision is a blue economy — one where our economy is aligned with the natural world and social need. From this perspective, our work highlights the concurrent crisis of overconsumption, resource depletion and social inequality.</p>
      </TextContainer>
      <ImageContainer>
        <Image src="/treeisland.png"></Image>
      </ImageContainer>
      </ContentContainer>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  margin: 2rem;
`;

const ImageContainer = styled.div`
  border: 1px solid #ccc;
  box-shadow: 0 0 5px #ccc;
  height: 17rem;
  overflow: hidden;
  margin: 2rem;
`;

const Image = styled.img`
  width: 100%;
`;
