import classes from './card.module.scss';
import CategoryNews from '../categoryNews/categoryNews';
import moment from 'moment';
import 'moment/locale/it';
import Link from 'next/link';
moment.locale('it');

const Card = ({ image, title, category, description, author, date }) => {
  const titleNews = title
    .replace(/[,'"’+-:%]/g, ' ')
    .split(' ')
    .join('-');

  return (
    <article className={classes.Card}>
      {image && <img className={classes.Card__image} src={image} alt={title} />}
      <div className={classes.Card__body}>
        <CategoryNews category={category} />
        <h1 className={classes.Card__title}>{title}</h1>
        <p className={classes.Card__description}>{description}</p>
        <p className={classes.Card__text}>
          {author || 'Autore sconosciuto'} - {moment(date).format('LLL')}
        </p>
      </div>
      <Link href='/articolo/[titleNews]' as={`/articolo/${titleNews}`}>
        <a className={classes.Card__link} />
      </Link>
    </article>
  );
};

export default Card;
