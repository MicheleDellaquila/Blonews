import { Fragment } from 'react';
import classes from './techNews.module.scss';
import Card from '../../reusable/card/card';
import Button from '../../reusable/button/button';
import { useRouter } from 'next/router';

const TechNews = ({ news }) => {
  const router = useRouter();

  return (
    <Fragment>
      <div className={`${classes.TechNews__row} row`}>
        <div className='col-xs-12'>
          <div className={classes.TechNews__box}>
            <h1 className={classes.TechNews__title}>Notizie Tecnologia</h1>
            <Button
              size='sm'
              variant='primary'
              onClick={() => router.push('/categoria/tecnlogia')}
            >
              Mostra tutti
            </Button>
          </div>
        </div>
      </div>
      <div className='row'>
        {news?.map((item, index) => {
          return (
            <div key={index} className='col-xs-12 col-lg-4'>
              <Card
                title={item.title}
                image={item.image}
                category={item.category}
                description={item.description}
                author={item.author}
                date={item.date}
              />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default TechNews;
