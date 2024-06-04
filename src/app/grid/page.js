"use client";

import React, { Fragment, Suspense, useEffect, useState } from "react";
import { wait } from "../../helper/util";

const Grid = async ({ key }) => {
  const data = [];
  const [finalRes, setFinalRes] = useState([]);

  const fetchData = async (param) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/${param}`, {
      cache: "no-store",
    });
    const da = await data.json();
    setFinalRes(da.slice(1, 10));
  };

  useEffect(() => {
    fetchData("photos");
  }, []);

  return (
    <Fragment key={key}>
      <div className="flex gap-5 justify-center items-center min-h-dvh flex-wrap">
        <button
          onClick={() => {
            fetchData("posts");
          }}
        >
          Update Data
        </button>
        {finalRes &&
          finalRes.map((el, i) => {
            return (
              <div className="box" key={i}>
                {el.title}
              </div>
            );
          })}
      </div>
    </Fragment>
  );
};

const Parent = () => {
  return (
    <>
      <Suspense fallback={<h1>Hello page is being loading state 2</h1>}>
        <Grid key={1} />
      </Suspense>

      <Suspense fallback={<h1>Hello page is being loading state 1</h1>}>
        <Grid key={1} />
      </Suspense>
      <Suspense fallback={<h1>Hello page is being loading state 4</h1>}>
        <Grid key={3} />
      </Suspense>
    </>
  );
};

export default Parent;
