import React, { Component } from "react";
import Publication from "../Publication/Publication";
import Controls from "../Controls/Controls";
import Counter from "../Counter/Counter";
import propTypes from "prop-types";
import styles from "./Reader.module.css";

class Reader extends Component {
  state = {};
  pubLength = this.props.publications.length;

  handleClick = ({ target: { name } }) => {
    this.pars = name === "next" ? this.pars + 1 : this.pars - 1;
  };

  render() {
    const {pars} = this.props
    const { id, title, text } = this.props.publications[pars - 1];
    const { path } = this.props.routProps.match;
    return (
      <div className={styles.reader}>
        <Controls
          handleClick={this.handleClick}
          currentPage={pars}
          pubLength={this.pubLength}
          category={path}
        />
        <Publication
          id={id}
          title={title}
          text={text}
          currentPage={pars}
        />
        <Counter
          publicationsLength={this.props.publications.length}
          currentPage={pars}
        />
      </div>
    );
  }
}
export default Reader;
Reader.propTypes = {
  props: propTypes.arrayOf(propTypes.object)
};
