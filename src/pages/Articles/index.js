// import Article from '../../components/Article'
import { Link } from 'react-router-dom';

const Articles = () => {

  const articles = [
    { id: '0001', path: '/Articles/0001_understandingthefundamentals.txt', title: 'Understanding the fundamentals of a resource-based economy' },
  ];

  return (
    <div>
      <h1>Articles</h1>
      {/* <Article fileName="/Articles/0001_understandingthefundamentals.txt" /> */}

      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Articles;
