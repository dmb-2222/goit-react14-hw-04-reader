import React, { Component } from "react";
import Publication from "../Publication/Publication";
import Controls from "../Controls/Controls";
import Counter from "../Counter/Counter";
import propTypes from "prop-types";
import styles from "./Reader.module.css";

class Reader extends Component {
  state = {};
  pubLength = this.props.publications.length;
  pars = +!this.props.pars || this.props.pars;

  handleClick = ({ target: { name } }) => {
    this.pars = name === "next" ? this.pars + 1 : this.pars - 1;
  };

  render() {
    const { id, title, text } = this.props.publications[this.pars - 1];
    const { path } = this.props.routProps.match;
    return (
      <div className={styles.reader}>
        <Controls
          handleClick={this.handleClick}
          currentPage={this.pars}
          pubLength={this.pubLength}
          category={path}
        />
        <Publication
          id={id}
          title={title}
          text={text}
          currentPage={this.pars}
        />
        <Counter
          publicationsLength={this.props.publications.length}
          currentPage={this.pars}
        />
      </div>
    );
  }
}
export default Reader;
Reader.propTypes = {
  props: propTypes.arrayOf(propTypes.object)
};
