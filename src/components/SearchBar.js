import React, { useState } from "react";
import "../Style/SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import "../Style/LandingPage.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import {
  InputGroup,
  Input,
  Button,
  FormGroup,
  Label,
  Spinner
} from 'reactstrap';

function SearchBar({ placeholder, data }) {
  // const [filteredData, setFilteredData] = useState([]);
  // const [wordEntered, setWordEntered] = useState("");
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  const handleSubmit = () => {
    setLoading(true);
    if (maxResults > 40 || maxResults < 1) {
      toast.error('max results must be between 1 and 40');
    } else {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
        )
        .then(res => {
          if (startIndex >= res.data.totalItems || startIndex < 1) {
            toast.error(
              `max reults must be between 1 and ${res.data.totalItems}`
            );
          } else {
            if (res.data.items.length > 0) {
              setCards(res.data.items);
              setLoading(false);
            }
          }
        })
        .catch(err => {
          setLoading(true);
          console.log(err.response);
        });
    }
  };

  return(
    <div style={{ width: '100%', zIndex: 2 }}>
    <InputGroup size='lg' className='mb-3 mt-4'>
      <Input
        placeholder='Cari Judul Buku, Nama Penerbit, atau Nama Penulis'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
        <Button className='searchIcon' color="primary" onClick={handleSubmit}>
          <SearchIcon />
        </Button>
    </InputGroup>
    
    <div className='d-flex text-white justify-content-between expand-lg mt-4'>
      <FormGroup >
        <Label for='maxResults'>Jumlah Hasil Pencarian</Label>
        <Input
          type='number'
          id='maxResults'
          placeholder='Max Results'
          value={maxResults}
          onChange={e => setMaxResults(e.target.value)}
        />
      </FormGroup>
      <FormGroup className='ml-5'>
        <Label for='startIndex'>Start Index</Label>
        <Input
          type='number'
          id='startIndex'
          placeholder='Start Index'
          value={startIndex}
          onChange={e => setStartIndex(e.target.value)}
        />
      </FormGroup>
    </div>
  </div>
  );
  // const handleFilter = (event) => {
  //   const searchWord = event.target.value;
  //   setWordEntered(searchWord);
  //   const newFilter = data.filter((value) => {
  //     return value.title.toLowerCase().includes(searchWord.toLowerCase());
  //   });

  //   if (searchWord === "") {
  //     setFilteredData([]);
  //   } else {
  //     setFilteredData(newFilter);
  //   }
  // };

  // const clearInput = () => {
  //   setFilteredData([]);
  //   setWordEntered("");
  // };

  // return (
  //   <div className="search d-flex justify-content-center">
  //     <div className="searchInputs">
  //       <input
  //         type="text"
  //         placeholder={placeholder}
  //         value={wordEntered}
  //         onChange={handleFilter}
  //       />
  //       <div className="searchIcon">
  //         {filteredData.length === 0 ? (
  //           <SearchIcon />
  //         ) : (
  //           <CloseIcon id="clearBtn" onClick={clearInput} />
  //         )}
  //       </div>
  //     </div>
  //     {filteredData.length != 0 && (
  //       <div className="dataResult">
  //         {filteredData.slice(0, 15).map((value, key) => {
  //           return (
  //             <a className="dataItem" href={value.link} target="_blank">
  //               <p>{value.title} </p>
  //             </a>
  //           );
  //         })}
  //       </div>
  //     )}
  //   </div>
  // );
}

export default SearchBar;