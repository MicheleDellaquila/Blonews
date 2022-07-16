import classes from './news.article.module.scss';
import CategoryNews from '../../reusable/categoryNews/categoryNews';
import moment from 'moment';
import 'moment/locale/it';
import Wishlist from '../../components/wishlist/wishlist';

const NewsArticle = ({
  id,
  image,
  title,
  category,
  inWishlist,
  date,
  author,
}) => {
  return (
    <div className={`${classes.NewsArticle} col-xs-12`}>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className={classes.NewsArticle__container}
      >
        <div className={classes.NewsArticle__box}>
          <CategoryNews category={category.toLowerCase()} />
          <h1 className={classes.NewsArticle__title}>{title}</h1>
          <p className={classes.NewsArticle__text}>
            {author || 'Autore anonimo'} - {moment(date).format('LLL')}
          </p>
        </div>
        <div className={classes.NewsArticle__overlay} />
        <Wishlist articleId={id} inWishlist={inWishlist} />
      </div>
    </div>
  );
};

export default NewsArticle;
