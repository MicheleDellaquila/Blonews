import classes from './mainNews.module.scss';
import CategoryNews from '../../reusable/categoryNews/categoryNews';
import moment from 'moment';
import 'moment/locale/it';
moment.locale('it');

const MainNews = ({ category, title, author, date }) => {
  return (
    <div className={classes.MainNews}>
      <CategoryNews category={category.toLowerCase()} />
      <h1 className={classes.MainNews__title}>{title}</h1>
      <p className={classes.MainNews__text}>
        {author} - {moment(date).format('LLL')}
      </p>
    </div>
  );
};

export default MainNews;
