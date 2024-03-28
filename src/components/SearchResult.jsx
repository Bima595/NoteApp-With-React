// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

const DetailNote = ({ catatan, id }) => {
  const note = catatan.find((note) => note.id === Number(id));

  return (
    <div>
      {note ? (
        <div>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
          <p>Created At: {note.createdAt}</p>
          <p>Archived: {note.archived ? "Yes" : "No"}</p>
        </div>
      ) : (
        <p>Note not found</p>
      )}
    </div>
  );
};

// Menambahkan PropTypes untuk memvalidasi prop catatan dan id
DetailNote.propTypes = {
  catatan: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
  id: PropTypes.string.isRequired,
};

export default DetailNote;
