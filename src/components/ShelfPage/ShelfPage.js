import React from 'react';
import ItemList from '../ItemList/ItemList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";


function ShelfPage() {
  const dispatch = useDispatch();
  const store = useSelector(store => store);

  useEffect(() => {
    dispatch({ type: 'FETCH_ITEMS' });
}, []);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <table id="items-table">
        <tr>
          <th></th>
          <th>Description</th>
          <th>Image Url</th>
        </tr>
      {store.items.map(item => (
        <tr key={item.id}>
          <ItemList item={item}/>
        </tr>
      ))}
    </table>
    </div>
  );
}

export default ShelfPage;
