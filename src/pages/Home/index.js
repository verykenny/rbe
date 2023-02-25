import styled from 'styled-components';

const Home = () => {
  return (
    <HomeContainer>
      <h1>Sustainable economy for future generations.</h1>
      <p>BlueEconomy is here to provide information and resources on the opportunities and benefits of a resource-based economy. We believe that by focusing on how we can use resources effectively, we can achieve both environmental sustainability and economic prosperity</p>
      <p>Our mission is to inspire a shift in the way we view and use resources, towards a more sustainable and equitable future. Our vision is a blue economy — one where our economy is aligned with the natural world and social need. From this perspective, our work highlights the concurrent crisis of overconsumption, resource depletion and social inequality.</p>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0px 5px 5px #ccc;
`;
