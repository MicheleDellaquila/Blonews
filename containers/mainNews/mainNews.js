import classes from './mainNews.module.scss';
import CategoryNews from '../../reusable/categoryNews/categoryNews';
import moment from 'moment';
import 'moment/locale/it';
import Link from 'next/link';
moment.locale('it');

const MainNews = ({ category, title, author, date }) => {
  const titleNews = title
    .replace(/[,'"’+-:%]/g, ' ')
    .split(' ')
    .join('-');

  return (
    <div className={classes.MainNews}>
      <CategoryNews category={category.toLowerCase()} />
      <Link href="/articolo/[titleNews]" as={`/articolo/${titleNews}`}>
        <a className={classes.MainNews__title}>{title}</a>
      </Link>
      <p className={classes.MainNews__text}>
        {author} - {moment(date).format('LLL')}
      </p>
    </div>
  );
};

export default MainNews;
