import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      <h1>About Us</h1>
      <p>Welcome to BlueEconomy, a platform dedicated to promoting the principles and benefits of a resource-based economy. Our mission is to inspire a shift in the way we view and use resources, towards a more sustainable and equitable future.</p>
      <p>At BlueEconomy, we believe that our current economic system is no longer fit for purpose. It is based on the outdated idea of endless growth, which has led to the depletion of natural resources, pollution, and social inequalities. We need a new approach that prioritizes the well-being of people and the planet over short-term profits.</p>
      <p>A resource-based economy is an alternative system that is based on the intelligent management of resources. It is a system that aims to create abundance for all by optimizing the use of natural resources and technological advancements. A resource-based economy is a world where everyone has access to the basic necessities of life, and where the environment is protected and restored.</p>
      <p>Our team at BlueEconomy is dedicated to spreading the word about the benefits of a resource-based economy. We believe that education is the first step towards change, and we are committed to providing informative and engaging content that inspires people to take action. We also collaborate with individuals, organizations, and businesses that share our vision, to build a community that works towards a common goal.</p>
      <p>Join us on this journey towards a more sustainable and equitable future. Together, we can create a world where everyone thrives.</p>
    </AboutContainer>
  );
}

export default About;


const AboutContainer = styled.div`
  text-align: center;
  padding: 20px;
  margin: 2rem auto;
  width: 90%;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0px 5px 5px #ccc;
`;
