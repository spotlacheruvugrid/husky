import React from 'react';

export const mockData = [
  {
    title: 'sundar',
  },
  {
    title: 'test',
  },
];

const ListItems = ({ listData = mockData, bgColor = 'yellow' }) => {
  console.log({ listData });

  return (
    <>
      {listData.length &&
        listData.map((item) => (
          <div style={{ background: bgColor, padding: '10px', margin: '10px' }}>
            {item.title}
          </div>
        ))}
    </>
  );
};

export default ListItems;
