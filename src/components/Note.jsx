// Note.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Catatan from "./Catatan";

const Note = ({ catatan, hapusCatatan, toggleArchive }) => {
  return (
    <div>
      {catatan.length === 0 ? (
        <p>Tidak ada catatan</p>
      ) : (
        catatan.map((note) => (
          <Catatan
            key={note.id}
            {...note}
            hapusCatatan={() => hapusCatatan(note.id)}
            toggleArchive={() => toggleArchive(note.id)}
          />
        ))
      )}
    </div>
  );
};

Note.propTypes = {
  catatan: PropTypes.array.isRequired, // Validasi bahwa catatan harus berupa array dan wajib ada
  hapusCatatan: PropTypes.func.isRequired, // Validasi bahwa hapusCatatan harus berupa fungsi dan wajib ada
  toggleArchive: PropTypes.func.isRequired, // Validasi bahwa toggleArchive harus berupa fungsi dan wajib ada
};

export default Note;
