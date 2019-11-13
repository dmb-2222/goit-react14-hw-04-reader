import React from "react";
import propTypes from "prop-types";
import styles from './Controls.module.css'
import { Link, withRouter } from "react-router-dom";

const Controls = ({
  handleClick,
  currentPage,
  pubLength,
  category,
  match
}) => (
  <section className={styles.controls}>
    <Link
      to={`${category}?item=${currentPage > 1 ? currentPage - 1 : currentPage}`}
    >
      <button
        type="button"
        className={styles.button}
        onClick={handleClick}
        disabled={currentPage <= 1}
        name="prev"
      >
        Назад
      </button>
    </Link>
    <Link
      to={`${match.path}?item=${
        currentPage < pubLength ? currentPage + 1 : currentPage
      }`}
    >
      <button
        type="button"
        className={styles.button}
        onClick={handleClick}
        disabled={currentPage >= pubLength}
        name="next"
      >
        Вперед
      </button>
    </Link>
  </section>
);
export default withRouter(Controls);

Controls.propTypes = {
  next: propTypes.func,
  prev: propTypes.func,
  isActiveButtonNext: propTypes.bool,
  isActiveButtonPrev: propTypes.bool
};
