import classes from './anotherNews.module.scss';
import ItemNews from '../itemNews/itemNews';

const AnotherNews = ({ news }) => {
  return (
    <div className={classes.AnotherNews}>
      <h4 className={classes.AnotherNews__title}>Notizie del giorno</h4>
      <div className={classes.AnotherNews__body}>
        <ul className={classes.AnotherNews__list}>
          {news?.slice(1, 5).map((item, index) => {
            return (
              <ItemNews
                key={index}
                title={item.title}
                category={item.category}
                author={item.author}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AnotherNews;
