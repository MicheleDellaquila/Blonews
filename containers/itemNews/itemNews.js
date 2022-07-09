import classes from './itemNews.module.scss';
import CategoryNews from '../../reusable/categoryNews/categoryNews';
import Link from 'next/link';

const ItemNews = ({ category, title, author }) => {
  const titleNews = title
    .replace(/[,'"’+-:%]/g, ' ')
    .split(' ')
    .join('-');

  return (
    <li className={classes.ItemNews}>
      <CategoryNews category={category.toLowerCase()} />
      <Link href='/articolo/[titleNews]' as={`/articolo/${titleNews}`}>
        <a className={classes.ItemNews__title}>{title.substring(0, 70)}...</a>
      </Link>
      <p className={classes.ItemNews__text}>{author ?? 'Autore sconosciuto'}</p>
    </li>
  );
};

export default ItemNews;
