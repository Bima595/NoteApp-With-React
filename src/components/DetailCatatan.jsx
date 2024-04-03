// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const DetailCatatan = ({ catatan, hapusCatatan, toggleArchive }) => {
  const { id } = useParams();

  // Temukan catatan berdasarkan id dari params
  const selectedCatatan = catatan.find((note) => note.id === id);

  if (!selectedCatatan) {
    return <div>Catatan tidak ditemukan</div>;
  }

  return (
    <div>
      <h1>{selectedCatatan.title}</h1>
      <p>{selectedCatatan.body}</p>
      <button onClick={() => hapusCatatan(selectedCatatan.id)}>Hapus</button>
      <button onClick={() => toggleArchive(selectedCatatan.id)}>
        {selectedCatatan.archived ? "Batal Arsip" : "Arsipkan"}
      </button>
    </div>
  );
};

DetailCatatan.propTypes = {
  catatan: PropTypes.array.isRequired,
  hapusCatatan: PropTypes.func.isRequired,
  toggleArchive: PropTypes.func.isRequired,
};

export default DetailCatatan;
