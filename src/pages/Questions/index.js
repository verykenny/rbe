import React from 'react';
import styled from 'styled-components';

const FaqPage = () => {
  return (
    <FaqContainer>
      <FaqTitle>Frequently Asked Questions</FaqTitle>
      <FaqItem>
        <FaqQuestion>What is a Resource-Based Economy?</FaqQuestion>
        <FaqAnswer>A resource-based economy is an economic system that is based on the intelligent management of resources and the use of advanced technologies to create a world without money, where goods and services are produced and distributed according to the needs of all people, not just a privileged few. In a resource-based economy, the planet's resources are managed as a common heritage of all people, not as the private property of a few individuals or corporations. The goal is to create a world that is sustainable, equitable, and efficient, where all people have access to the goods and services they need to live a healthy and fulfilling life.</FaqAnswer>
      </FaqItem>
      <FaqItem>
        <FaqQuestion>Why do we need a Resource-Based Economy?</FaqQuestion>
        <FaqAnswer>The current economic model is based on the unsustainable use of finite resources and the accumulation of wealth and power by a few individuals and corporations. This model has created unprecedented levels of poverty, inequality, and environmental destruction. A resource-based economy offers a new way of thinking about our relationship with the planet and each other, where the well-being of people and the planet are prioritized over the interests of profit and power.</FaqAnswer>
      </FaqItem>
      <FaqItem>
        <FaqQuestion>How does a Resource-Based Economy work?</FaqQuestion>
        <FaqAnswer>A resource-based economy is based on the intelligent management of resources and the use of advanced technologies to create a world without money, where goods and services are produced and distributed according to the needs of all people, not just a privileged few. The following are some of the key principles of a resource-based economy:
          <ol>
            <li>Resource Management: Resources are managed as a common heritage of all people, not as the private property of a few individuals or corporations. Advanced technologies are used to monitor and manage the use of resources, to ensure that they are used in a sustainable and efficient way.</li>
            <li>Advanced Technologies: Advanced technologies are used to automate production and distribution, to reduce the need for human labor, and to increase efficiency and productivity.</li>
            <li>Access instead of Ownership: Instead of owning goods and services, people have access to them when they need them, through a system of shared ownership and access.</li>
            <li>Sustainable and Equitable: The goal of a resource-based economy is to create a world that is sustainable, equitable, and efficient, where all people have access to the goods and services they need to live a healthy and fulfilling life.</li>
          </ol>
        </FaqAnswer>
      </FaqItem>
      <FaqItem>
        <FaqQuestion>Benefits of a Resource-Based Economy</FaqQuestion>
        <FaqAnswer>A resource-based economy offers many benefits, including:
          <ol>
            <li>Sustainability: A resource-based economy is based on the intelligent management of resources, which helps to ensure that resources are used in a sustainable and efficient way.</li>
            <li>Equity: A resource-based economy prioritizes the well-being of people and the planet over the interests of profit and power, which helps to reduce inequality and create a more equitable world.</li>
            <li>Efficiency: Advanced technologies are used to automate production and distribution, which helps to increase efficiency and productivity.</li>
            <li>Innovation: A resource-based economy encourages innovation and creativity, as people are freed from the constraints of the profit motive and are able to focus on solving real-world problems.</li>
          </ol>
        </FaqAnswer>
      </FaqItem>
      <FaqItem>
        <FaqQuestion>Join the Discussion</FaqQuestion>
        <FaqAnswer>Our website will also feature a forum and discussion board where people can share their ideas and ask questions about resource-based economy. We encourage you to join the discussion in the future and share your thoughts about how we can create a better world for all people and the planet. Together, we can build a sustainable, equitable, and efficient world that works for everyone.</FaqAnswer>
      </FaqItem>
    </FaqContainer>
  );
}

export default FaqPage;

const FaqContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 20px;
`;

const FaqTitle = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-bottom: 50px;
`;

const FaqItem = styled.div`
  margin-bottom: 20px;
`;

const FaqQuestion = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const FaqAnswer = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;
