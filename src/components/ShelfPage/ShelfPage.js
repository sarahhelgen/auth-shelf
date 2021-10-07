import React from 'react';
import ItemList from '../ItemList/ItemList';

function ShelfPage() {
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ItemList />
    </div>
  );
}

export default ShelfPage;
