import Article from '../../components/Article'
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ArticlePage = () => {
  const { id } = useParams();
  const [articleText, setArticleText] = useState('');

  useEffect(() => {
    const getFileContent = async () => {
      const response = await fetch(`/Posts/${id}.txt`);
      const text = await response.text();
      setArticleText(text);
    }
    getFileContent();
    // Fetch the Markdown file for the post with the specified ID
    // fetch(`Posts/${id}.txt`)
    //   .then(response => response.text())
    //   .then(text => setArticleText(text));
  }, [id]);

  return (
    <div>
      <ArticleHeader>
      <BackLink to="/articles">Back</BackLink>
      <h1>Article</h1>
      </ArticleHeader>
      <Article articleText={articleText} />
    </div>
  );
}

export default ArticlePage;

const ArticleHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

`;

const BackLink = styled(Link)`
  color: green;
  text-decoration: none;
  padding: 10px;
  position: absolute;
  left: 0;

  &:hover {
    font-weight: 500;
  }

`;
