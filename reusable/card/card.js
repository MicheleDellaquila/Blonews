import classes from './card.module.scss';
import CategoryNews from '../categoryNews/categoryNews';
import moment from 'moment';
import 'moment/locale/it';
import Link from 'next/link';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { AiOutlineMessage } from 'react-icons/ai';
moment.locale('it');

const Card = ({
  image,
  title,
  category,
  description,
  author,
  date,
  views,
  numComments,
}) => {
  const titleNews = title
    .replace(/[,'"’+-:%]/g, ' ')
    .split(' ')
    .join('-');

  return (
    <article className={classes.Card}>
      {image && (
        <figure className={classes.Card__imageBox}>
          <img className={classes.Card__image} src={image} alt={title} />
        </figure>
      )}
      <div className={classes.Card__body}>
        <CategoryNews category={category} />
        <h1 className={classes.Card__title}>{title}</h1>
        <p className={classes.Card__description}>{description}</p>
        <p className={classes.Card__text}>
          {author || 'Autore sconosciuto'} - {moment(date).format('LLL')}
        </p>
      </div>
      <footer className={classes.Card__footer}>
        <div className={classes.Card__footer__box}>
          <div className={classes.Card__boxValue}>
            <MdOutlineRemoveRedEye className={classes.Card__icon} />
            <span className={classes.Card__value}>{views}</span>
          </div>
          <div className={classes.Card__boxValue}>
            <AiOutlineMessage className={classes.Card__icon} />
            <span className={classes.Card__value}>{numComments}</span>
          </div>
        </div>
      </footer>
      <Link href='/articolo/[title]' as={`/articolo/${titleNews}`}>
        <a className={classes.Card__link} />
      </Link>
    </article>
  );
};

export default Card;
