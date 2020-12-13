import React from "react";
import T from "prop-types";
import Loader from "../Loader";
import NothingToShow from "./NothingToShow";

const EmptyWrap = ({ loading = false, empty, children = null }) => {
  return loading ? (
    <Loader />
  ) : empty ? (
    <NothingToShow />
  ) : (
    children
  );
};

EmptyWrap.defaultProps = {
  loading: false,
  children: null,
};

EmptyWrap.propTypes = {
  loading: T.bool,
  empty: T.bool.isRequired,
  children: T.oneOfType([T.element, T.array, T.node]),
};

export default EmptyWrap;
