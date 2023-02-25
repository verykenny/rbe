import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Article = ({ fileName }) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getFileContent = async () => {
      const response = await fetch(fileName);
      const text = await response.text();
      const [titleText, contentText] = text.split('\n\n\n', 2);
      setTitle(titleText);
      setContent(contentText);
    };
    getFileContent();
  }, [fileName]);

  const renderContent = () => {
    return content.split('\n').map((paragraph, i) => (
      <ArticleParagraph key={i}>{paragraph}</ArticleParagraph>
    ));
  };

  return (
    <ArticleContainer>
      {title && <ArticleTitle>{title}</ArticleTitle>}
      <ArticleContent>{renderContent()}</ArticleContent>
    </ArticleContainer>
  );
}

export default Article;

const ArticleContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ArticleTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.4rem;
`;

const ArticleContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.5;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ArticleParagraph = styled.p`
  margin-bottom: 1rem;
`;
