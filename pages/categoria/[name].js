import classes from './index.module.scss';
import category from '../../utility/category';
import CategoryFilter from './category.filter';
import CategoryList from './category.list';
import { useState } from 'react';

const Category = ({ articles, category }) => {
  const [articlesList, setArtilesList] = useState([...articles]);

  // filter articles 
  const filterArticles = () => {

  }

  return (
    <div className={`${classes.Category} col-xs-12`}>
      <CategoryFilter />
      <CategoryList articles={articlesList} category={category} />
    </div>
  );
};

export async function getStaticPaths() {
  const paths = category.map((item) => {
    return {
      params: {
        name: item.name,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PATH}/categoria/${params.name}`,
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
      props: { articles: res.articles, category: params.name },
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

export default Category;
