// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Catatan = ({ id, title, body, archived, createdAt, hapusCatatan, toggleArchive }) => {
  return (
    <div className={`catatan ${archived ? 'archived' : ''}`} style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px' }}>
      <Link to={`/note/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <h3 style={{ marginBottom: '5px' }}>{title}</h3>
      </Link>
      <p style={{ marginBottom: '5px', fontSize: '12px', color: '#666' }}>Tanggal: {createdAt}</p>
      <p style={{ marginBottom: '10px' }}>{body}</p>
      <button onClick={hapusCatatan} style={{ padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Hapus</button>
      {archived ? (
        <button onClick={() => toggleArchive(id)} style={{ marginLeft: '5px', padding: '5px 10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Batal Arsip</button>
      ) : (
        <button onClick={() => toggleArchive(id)} style={{ marginLeft: '5px', padding: '5px 10px', backgroundColor: '#ffc107', color: '#000', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Arsipkan</button>
      )}
    </div>
  );
}

Catatan.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  hapusCatatan: PropTypes.func.isRequired,
  toggleArchive: PropTypes.func.isRequired,
};

export default Catatan;
