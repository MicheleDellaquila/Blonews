import { useState, startTransition } from "react";
import classes from "./category.filter.module.scss";

const CategoryFilter = ({ onChange }) => {
  const [filterActive, setFilterActive] = useState(null);
  const classActiveFilter1 =
    filterActive === "Più nuovo"
      ? classes.CategoryFilter__item__active
      : classes.CategoryFilter__item;
  const classActiveFilter2 =
    filterActive === "Popolare"
      ? classes.CategoryFilter__item__active
      : classes.CategoryFilter__item;

  // select filter active
  const filterActiveHandler = (type) => {
    setFilterActive(type);
    startTransition(() => onChange(type), 1000);
  };

  return (
    <div className={classes.CategoryFilter}>
      <p className={classes.CategoryFilter__text}>Filtra: </p>
      <div className={classes.CategoryFilter__option}>
        <ul className={classes.CategoryFilter__list}>
          <li
            className={classActiveFilter1}
            onClick={() => filterActiveHandler("Più nuovo")}
          >
            Più nuovo
          </li>
          <li
            className={classActiveFilter2}
            onClick={() => filterActiveHandler("Popolare")}
          >
            Popolare
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryFilter;
