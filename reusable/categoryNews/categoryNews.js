import enumCategory from '../../utility/enumCategoryNews';
import classes from './categoryNews.module.scss';

const CategoryNews = ({ category }) => {
  return (
    <div className={classes.CategoryNews}>
      <div className={`${classes[`CategoryNews--${category}`]}`}>
        <p className={`${classes[`CategoryNews__text--${category}`]}`}>
          {enumCategory[category]}
        </p>
      </div>
    </div>
  );
};

export default CategoryNews;
