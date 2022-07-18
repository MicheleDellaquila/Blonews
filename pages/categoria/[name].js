import { useCallback } from "react";
import classes from "./index.module.scss";
import category from "../../utility/category";
import CategoryFilter from "./category.filter";
import CategoryList from "./category.list";
import { Fragment, useState } from "react";
import { getMostNew, getPopular } from "../../utility/httpRequests";
import Toast from "../../reusable/toast/toast";
import Loader from "../../reusable/loader/loader";

const Category = ({ articles, category }) => {
  const [articlesList, setArtilesList] = useState([...articles]);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState(null);
  const [typeMessage, setTypeMessage] = useState(null);

  // filter articles
  const filterArticles = useCallback(async (type) => {
    switch (type) {
      case "Più nuovo": {
        try {
          setLoader((prev) => !prev);
          const response = await getMostNew(category);
          setArtilesList([...response.data.articles]);
          setLoader((prev) => !prev);
        } catch (e) {
          setTypeMessage("error");
          setMessage(e.response?.data.message);
          setLoader((prev) => !prev);
        }
      }

      case "Popolare": {
        try {
          setLoader((prev) => !prev);
          const response = await getPopular(category);
          setArtilesList([...response.data.articles]);
          setLoader((prev) => !prev);
        } catch (e) {
          setTypeMessage("error");
          setMessage(e.response?.data.message);
          setLoader((prev) => !prev);
        }
      }

      default:
        return;
    }
  }, []);

  // clear toast
  const clearToastHandler = () => {
    setTypeMessage(null);
    setMessage(null);
  };

  return (
    <Fragment>
      <Toast type={typeMessage} message={message} onClose={clearToastHandler} />
      {loader && (
        <div className={classes.Category__laoder}>
          <Loader />
        </div>
      )}
      <div className={`${classes.Category} col-xs-12`}>
        <CategoryFilter onChange={filterArticles} />
        {!loader && (
          <CategoryList articles={articlesList} category={category} />
        )}
      </div>
    </Fragment>
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
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await response.json();

    // checking if articles has not been retrive
    if (res?.message) {
      return {
        redirect: {
          permanent: false,
          destination: "/errore",
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
        destination: "/errore",
      },
    };
  }
}

export default Category;
