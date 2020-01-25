import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const Count = () => {
  const [count, setCount] = useState(5);
  return (
    <div>
      <h2>My Count</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment!</button>
      <button onClick={() => setCount(count - 1)}>Decrement!</button>
    </div>
  );
};

export default Count;

Count.propTypes = {
  count: PropTypes.number,
  setCount: PropTypes.func
};
