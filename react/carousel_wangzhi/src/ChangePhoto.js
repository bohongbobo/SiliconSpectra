import React, { Fragment } from "react";

const ChangePhoto = (props) => {
  const { minus, plus, search } = props;
  return (
    <Fragment>
      <button onClick={(e) => minus(e)}>Last</button>
      <input placeholder="search" onKeyPress={(e) => search(e)} />
      <button onClick={(e) => plus(e)}>Next</button>
    </Fragment>
  );
};

export default ChangePhoto;
