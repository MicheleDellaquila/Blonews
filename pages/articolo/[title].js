import { Fragment } from 'react';
import News from '../../containers/news/news';

const Index = ({ article }) => {
  return (
    <Fragment>
      <News article={article} />
    </Fragment>
  );
};

export async function getStaticPaths() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_PATH}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const res = await response.json();

    // create array of paths
    const paths = res.articles.map((item) => {
      return {
        params: {
          title: item.title
            .replace(/[,'"’+-:%]/g, ' ')
            .split(' ')
            .join('-'),
        },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: '/errore',
      },
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PATH}/articolo/${params.title}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const res = await response.json();

    // checking if articles has not been retrive
    if (res?.message) {
      return {
        redirect: {
          permanent: false,
          destination: '/errore',
        },
      };
    }

    return {
      props: { article: { ...res.article, inWishlist: res.inWishlist } },
    };
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: '/errore',
      },
    };
  }
}

export default Index;
