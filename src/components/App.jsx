// App.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./../styles/index.css"; // Import file CSS di sini
import Home from "./Home";
import Note from "./Note";
import DetailCatatan from "./DetailCatatan.jsx";
// import SearchResult from "./SearchResult"; // Import SearchResult
import Navbar from "./navbar"; // Import Navbar
import { initialData } from "./../utils/local-data.js"; // Import initialData dari utils
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes dan Route
import { v4 as uuidv4 } from "uuid"; // Import uuid untuk membuat id yang unik

function App() {
  const [catatan, setCatatan] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");

  function tambahCatatan(newCatatan) {
    const id = uuidv4(); // Gunakan uuid untuk membuat id yang unik
    const createdAt = new Date().toISOString();
    const updatedCatatan = [...catatan, { id, ...newCatatan, createdAt }];
    setCatatan(updatedCatatan);
  }

  function hapusCatatan(id) {
    const newCatatan = catatan.filter((note) => note.id !== id);
    setCatatan(newCatatan);
  }

  function toggleArchive(id) {
    const updatedCatatan = catatan.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    setCatatan(updatedCatatan);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  function filterCatatan(catatan) {
    return catatan.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  function handleSearch() {
    const searchResult = catatan.find((note) => note.title === searchTerm);
    return searchResult;
  }

  return (
    <Router>
      <div className="App">
        <Navbar
          handleSearchChange={handleSearchChange}
          handleSearch={handleSearch}
        />
        <Routes>
          <Route path="/" element={<Home tambahCatatan={tambahCatatan} />} />
          <Route
            path="/note"
            element={
              <Note
                catatan={filterCatatan(catatan)}
                hapusCatatan={hapusCatatan}
                toggleArchive={toggleArchive}
              />
            }
          />
          <Route
            path="/note/:id"
            element={
              <DetailCatatan
                catatan={catatan}
                hapusCatatan={hapusCatatan}
                toggleArchive={toggleArchive}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
