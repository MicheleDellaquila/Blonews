import classes from './hero.module.scss';
import MainNews from '../mainNews/mainNews';
import AnotherNews from '../anotherNews/anotherNews';
import Link from 'next/link';

const Hero = ({ todayNews }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${todayNews[0].image})`,
      }}
      className={classes.Hero}
    >
      <div className={classes.Hero__row}>
        <MainNews
          category={todayNews[0].category}
          title={todayNews[0].title}
          author={todayNews[0].author}
          date={todayNews[0].publishedAt}
        />
        <AnotherNews news={todayNews} />
      </div>
      <div className={classes.Hero__overlay} />

    </div>
  );
};

export default Hero;
