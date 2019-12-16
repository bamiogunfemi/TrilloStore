import React from "react";
import Loader from '../loader/loader.component'

const Spinner = WrappedComponent => ({ isLoading, ...otherProps }) => {

  return isLoading ? (
    <Loader />
  ) : (
      <WrappedComponent {...otherProps} />
    )
}
export default Spinner;
