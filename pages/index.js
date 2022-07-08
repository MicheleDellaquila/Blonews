import { Fragment } from 'react';
import CommunityNews from '../containers/communityNews/communityNews';
import Hero from '../containers/hero/hero';
import MostViewedNews from '../containers/mostViewedNews/mostViewedNews';
import TechNews from '../containers/techNews/techNews';

const Home = ({ todayNews, mostViewedNews, communityNews, techNews }) => {
  return (
    <Fragment>
      <Hero todayNews={todayNews} />
      <MostViewedNews news={mostViewedNews} />
      <CommunityNews news={communityNews} />
      <TechNews news={techNews} />
    </Fragment>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_PATH}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const res = await response.json();

    return {
      props: {
        todayNews: res.todayNews,
        mostViewedNews: res.mostViewedNews,
        communityNews: res.communityNews,
        techNews: res.techNews,
      },
    };
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: '/error',
      },
    };
  }
}

export default Home;
