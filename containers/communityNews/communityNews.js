import { Fragment } from 'react';
import classes from './communityNews.module.scss';
import Card from '../../reusable/card/card';

const CommunityNews = ({ news }) => {
  return (
    <Fragment>
      <div className={`${classes.CommunityNews__row} row`}>
        <div className='col-xs-12'>
          <h1 className={classes.CommunityNews__title}>
            Dalla nostra community
          </h1>
        </div>
      </div>
      <div className='row'>
        {news?.map((item, index) => {
          return (
            <div key={index} className='flex col-xs-12 col-lg-4'>
              <Card
                title={item.title}
                image={item.image}
                category={item.category}
                description={item.description}
                author={item.author}
                date={item.date}
                views={item.views}
                numComments={item.comments.length}
              />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default CommunityNews;
