import React from "react";

import Title from "./Header/Title";

export default Header = () => {
  //
  const handleChange = e => {
    const title = e.target.value;
    this.props.changeTitle(title);
  };

  return (
    <div>
      <Title title={this.props.title} />
      <input value={this.props.title} onChange={handleChange.bind(this)} />
    </div>
  );
};
