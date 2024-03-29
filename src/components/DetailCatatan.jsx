// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import Catatan from "./Catatan";
import { useParams } from "react-router-dom";

const DetailCatatan = ({ catatan, hapusCatatan, toggleArchive }) => {
  const { id } = useParams();
  const note = catatan.find((note) => note.id === parseInt(id));

  if (!note) {
    return <p>Catatan tidak ditemukan</p>;
  }

  return (
    <div>
      <Catatan
        key={note.id}
        {...note}
        hapusCatatan={() => hapusCatatan(note.id)}
        toggleArchive={() => toggleArchive(note.id)}
      />
    </div>
  );
};

DetailCatatan.propTypes = {
  catatan: PropTypes.array.isRequired,
  hapusCatatan: PropTypes.func.isRequired,
  toggleArchive: PropTypes.func.isRequired,
};

export default DetailCatatan;
