// DetailNote.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const DetailNote = ({ catatan, match }) => {
  const { id } = match.params;
  const note = catatan.find((note) => note.id.toString() === id);

  if (!note) {
    return <p>Not found</p>;
  }

  return (
    <div>
      <h2>{note.title}</h2>
      <p><strong>Author:</strong> {note.author}</p>
      <p><strong>Year:</strong> {note.year}</p>
      <p><strong>Status:</strong> {note.isComplete ? "Completed" : "Not Completed"}</p>
    </div>
  );
};

DetailNote.propTypes = {
  catatan: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
  match: PropTypes.object.isRequired,
};

export default DetailNote;
