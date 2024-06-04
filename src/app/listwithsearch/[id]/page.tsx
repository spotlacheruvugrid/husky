import React from 'react';

async function getUser(id: any) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const apiRes = await res.json();
  return apiRes;
}

const UserDetail = async ({ params }: any) => {
  const user = await getUser(params.id);
  return (
    <>
      <h1>{JSON.stringify(user)}</h1>
    </>
  );
};

export default UserDetail;
