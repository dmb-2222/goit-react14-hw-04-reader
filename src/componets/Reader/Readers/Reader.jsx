import React, { Component } from "react";
import Publication from "../Publication/Publication";
import Controls from "../Controls/Controls";
import Counter from "../Counter/Counter";
import propTypes from "prop-types";
import queryString from "query-string";
import styles from '../../../common/css/Reader.module.css'

class Reader extends Component {
  state = {};
  pubLength = this.props.publications.length;

  pars =
    +!queryString.parse(this.props.routProps.location.search).item ||
    +queryString.parse(this.props.routProps.location.search).item;
  currentIdex = this.pars - 1;
  handleClick = ({ target: { name } }) => {
    this.currentIdex =
      name === "next" ? this.currentIdex + 1 : this.currentIdex - 1;
    this.pars = name === "next" ? this.pars + 1 : this.pars - 1;
  };
  componentDidMount(prevProps) {
    console.log(prevProps);
    // console.log(this.prevProps.routProps.location.search);
    // this.props.routProps.history.push({
    //   pathname: this.props.routProps.location.pathname,
    //   search: this.props.routProps.location.search
    // });
  }

  render() {
    const { id, title, text } = this.props.publications[this.currentIdex];
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
