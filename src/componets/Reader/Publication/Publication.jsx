import React from "react";
import propTypes from "prop-types";
import styles from './Publication.module.css'

const Publication = ({ id, title, text, currentPage }) => {
  console.log(currentPage)
  return (
    <article className={styles.publication} data-id={id}>
      <h2>
        {currentPage}.{title}
      </h2>
      <p>{text}</p>
    </article>
  );
};
export default Publication;

Publication.propTypes = {
  title: propTypes.string,
  text: propTypes.string,
  currentPage: propTypes.number,
  id: propTypes.string
};
