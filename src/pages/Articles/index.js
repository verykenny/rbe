import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Articles = () => {

  const articles = [
    { id: '0001', path: '/Articles/0001', title: 'Understanding the fundamentals of a resource-based economy' },
    { id: '0002', path: '/Articles/0002', title: 'The history and evolution of resource-based economies' },
    { id: '0003', path: '/Articles/0003', title: 'Advantages and disadvantages of resource-based economies compared to other economic systems' },
  ];

  return (
    <ArticlesListContainer>
      <h1>Articles</h1>

      <ArticleList>
        {articles.map(article => (
          <ArticleListItem key={article.id}>
            <ArticleLink to={`/articles/${article.id}`}>{article.title}</ArticleLink>
          </ArticleListItem>
        ))}
      </ArticleList>
    </ArticlesListContainer>
  );
}

export default Articles;

const ArticlesListContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 2rem;
`;

const ArticleList = styled.ul`
  list-style: none;
  margin: 0 auto;
`;

const ArticleListItem = styled.li`
  padding: 1rem 0;
  text-align: left;
`;

const ArticleLink = styled(Link)`
  color: #333;
  text-decoration: none;

  &:hover {
    font-weight: 500;
  }
`;
