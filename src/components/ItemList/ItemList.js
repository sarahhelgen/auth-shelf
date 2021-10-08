function ItemList({ item }) {

    return(
        <> 
            <td id="delete-item">X</td>
            <td>{item.description}</td>
            <td>{item.image_url}</td>
        </>
    )
}

export default ItemList;