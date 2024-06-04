// 'use client'

import React from "react";

const UniqueId = async (props) => {
  console.log(props);

  //const [newD , setD] =  useState([])


  // useEffect(()=>{

  // },[])
  // const apiRes = await fetch("http://localhost:3000/api/times", { next : {
  //   revalidate : 5
  // }});

   const apiRes = await fetch("http://localhost:3000/api/times", { cache : 'no-store'});
  const data = await apiRes.json();
  console.log(data);

  const getData = async () => {
    const apiRes = await fetch("http://localhost:3000/api/times", { cache : 'no-store'});
    const data = await apiRes.json();
    console.log(data);
  }
  return (
    <div>
      {/* {data.map((el) => (
        <h1>{el.title}</h1>
      ))} */}
      {data.date}<br/>
      <button > Hello Click</button>
    </div>
  );
};

export default UniqueId;

// Next JS main features

/// APP routing
/// Data fetching part
/// cache
