/* eslint-disable no-unused-vars */
// Home.jsx
import React from "react";
import FormTambahCatatan from "./FormTambahCatatan";
import PropTypes from "prop-types";

const Home = ({ tambahCatatan }) => {
  return (
    <div>
      <FormTambahCatatan tambahCatatan={tambahCatatan} />
    </div>
  );
};

Home.propTypes = {
  tambahCatatan: PropTypes.func.isRequired,
};

export default Home;
