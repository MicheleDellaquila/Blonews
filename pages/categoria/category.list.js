import { Fragment } from 'react';
import classes from './category.list.module.scss';
import Card from '../../reusable/card/card';

const CategoryList = ({ articles, category }) => {
  return (
    <Fragment>
      <div className='row'>
        <div className='flex col-xs-12 col-md-6 col-lg-4'>
          <div className={classes.CategoryList__cardInfo}>
            <div className={classes.CategoryList__top}>
              <h1 className={classes.CategoryList__title}>{category}</h1>
              <p className={classes.CategoryList__text}>
                Il meglio della {category} racchiuso in questa categoria , per
                esser sempre aggiornato sulle ultime notizie.
              </p>
            </div>
            <div className={classes.CategoryList__bottom}>
              <p className={classes.CategoryList__totalArticles}>
                {articles.length}
              </p>
              <p className={classes.CategoryList__postTotal}>Post totali</p>
            </div>
          </div>
        </div>
        <div className='flex col-xs-12 col-md-6 col-lg-4'>
          <Card {...articles[0]} />
        </div>
        <div className='flex col-xs-12 col-lg-4'>
          <Card {...articles[1]} />
        </div>
      </div>
      <div className='row'>
        {articles.slice(2, articles.length).map((article, index) => {
          return (
            <div key={index} className='flex col-lg-4'>
              <Card {...article} />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default CategoryList;
