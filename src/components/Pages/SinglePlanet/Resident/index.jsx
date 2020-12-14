import React from "react";
import T from "prop-types";
const Resident = ({ resident }) => {
  return (
    <>
      <span>{resident?.name}</span>
    </>
  );
};

Resident.propTypes = {
  resident: T.object,
};

export default Resident;
