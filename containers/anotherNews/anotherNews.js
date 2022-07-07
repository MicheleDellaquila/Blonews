import ItemNews from '../itemNews/itemNews';
import classes from './anotherNews.module.scss';

const AnotherNews = ({ news }) => {
  return (
    <div className={classes.AnotherNews}>
      <h4 className={classes.AnotherNews__title}>Notizie del giorno</h4>
      <div className={classes.AnotherNews__body}>
        {news.map((item) => {
          return <ItemNews />;
        })}
      </div>
    </div>
  );
};

export default AnotherNews;
