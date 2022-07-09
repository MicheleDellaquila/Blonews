import { Fragment } from 'react';
import classes from './mostViewedNews.module.scss';
import Card from '../../reusable/card/card';

const MostViewedNews = ({ news }) => {
  return (
    <Fragment>
      <div className={`${classes.MostViewedNews__row} row`}>
        <div className='col-xs-12'>
          <h1 className={classes.MostViewedNews__title}>Più visitati</h1>
        </div>
      </div>
      <div className='row'>
        <div className='flex col-xs-12 col-lg-7'>
          <Card
            image={news[0].image}
            title={news[0].title}
            category={news[0].category}
            description={news[0].description}
            author={news[0].author}
            date={news[0].date}
            views={news[0].views}
            numComments={news[0].comments.length}
          />
        </div>
        <div className='flex col-xs-12 col-lg-5'>
          <div className={classes.MostViewedNews__column}>
            {news?.slice(1, 3).map((item, index) => {
              return (
                <Card
                  key={index}
                  title={item.title}
                  category={item.category}
                  description={item.description}
                  author={item.author}
                  date={item.date}
                  views={item.views}
                  numComments={item.comments.length}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MostViewedNews;
