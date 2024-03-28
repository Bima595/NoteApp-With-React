// NoteDetail.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const NoteDetail = ({ catatan }) => {
  const { id } = useParams();

  const note = catatan.find((note) => note.id === parseInt(id));

  if (!note) {
    return <p>Catatan tidak ditemukan</p>;
  }

  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <p>Dibuat pada: {note.createdAt}</p>
      <button>Hapus</button>
    </div>
  );
};

NoteDetail.propTypes = {
  catatan: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      body: PropTypes.string,
      createdAt: PropTypes.string,
      archived: PropTypes.bool,
    })
  ).isRequired,
};

export default NoteDetail;
