'use client'

import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const apiRes = await res.json();
  return apiRes;
};

const ListWithSearch = async () => {
  let data: any = await getData();

  return (
    <>
      <div>
        {data.length ? (
          data.map((user:any) => (
            <h2 className="p-5 border-2 border-gray-600 m-10 cursor-pointer">
              <Link href={`/listwithsearch/${user.id}`} className="inline-block w-100">{user.username}</Link>
            </h2>
          ))
        ) : (
          <h1>Loading....</h1>
        )}
      </div>
    </>
  );
};

export default ListWithSearch;
