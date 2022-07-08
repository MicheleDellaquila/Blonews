import Link from 'next/link';
import enumCategory from '../../utility/enumCategoryNews';
import classes from './categoryNews.module.scss';

const CategoryNews = ({ category }) => {
  const link =
    enumCategory[category].charAt(0).toLowerCase() +
    enumCategory[category].substring(1, enumCategory[category].length);

  return (
    <div className={classes.CategoryNews}>
      <div className={`${classes[`CategoryNews--${category}`]}`}>
        <Link href={`/categoria/${link}`}>
          <a className={`${classes[`CategoryNews__text--${category}`]}`}>
            {enumCategory[category]}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CategoryNews;
