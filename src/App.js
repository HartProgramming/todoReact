import logo from "./logo.svg";
import classes from "./App.css";
import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Entry from "./components/Entry/Entry";
import ListItem from "./components/ListItem/ListItem";

function App() {
  const [data, setData] = useState();
  const [arr, setArr] = useState([]);
  const [cool, setCool] = useState([])
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    if(data !== undefined){
    arr.push(data)
    setTimeout(() => {
      setCool(arr)
      console.log(cool)
    }, 500);
      
    }
  }, [data, arr])

  return (
    <>
      <Header />
      <Entry data={setData} />
    </>
  );
}

export default App;
