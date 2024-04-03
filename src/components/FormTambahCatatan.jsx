// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";

function FormTambahCatatan({ tambahCatatan }) {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [archived, setArchived] = useState(false); // State untuk menyimpan status archived

  function handleSubmit(e) {
    e.preventDefault();
    if (judul.trim() !== "" && isi.trim() !== "") {
      tambahCatatan({
        title: judul,
        body: isi,
        archived,
        createdAt: new Date().toISOString(),
      });
      setJudul("");
      setIsi("");
      setArchived(false);
    } else {
      alert("Judul dan isi catatan harus diisi!");
    }
  }

  function handleToggleArchived() {
    setArchived(!archived); // Toggle nilai archived
  }

  return (
    <form onSubmit={handleSubmit} className="tambah-form">
      <input
        type="text"
        placeholder="Judul"
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
        className="border rounded py-2 px-4 mr-2"
      />
      <textarea
        placeholder="Isi Catatan"
        value={isi}
        onChange={(e) => setIsi(e.target.value)}
        className="border rounded py-2 px-4 mr-2"
      ></textarea>
      <button
        type="button"
        onClick={handleToggleArchived}
        className={`mr-4 px-4 py-2 rounded ${
          archived ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        } text-white font-bold`}
      >
        {archived ? "Batal Arsipkan" : "Arsipkan"}
      </button>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Tambah Catatan
      </button>
    </form>
  );
}

FormTambahCatatan.propTypes = {
  tambahCatatan: PropTypes.func.isRequired,
};

export default FormTambahCatatan;
