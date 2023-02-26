import Article from '../../components/Article'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
      <h1>Articles</h1>
      <Article articleText={articleText} />
    </div>
  );
}

export default ArticlePage;
