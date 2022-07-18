import Comments from '../comments/comments';
import NewsArticle from './news.article';
import NewsDescription from './news.description';

const News = ({ article }) => {
  return (
    <div className='row'>
      <NewsArticle
        id={article._id}
        image={article.image}
        title={article.title}
        category={article.category}
        inWishlist={article.inWishlist}
        publishedAt={article.publishedAt}
        author={article.author}
      />
      <NewsDescription />
      <Comments newsId={article._id} comments={article.comments} />
    </div>
  );
};

export default News;
