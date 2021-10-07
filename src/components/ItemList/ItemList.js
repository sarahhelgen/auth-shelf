import { useEffect } from "react";
import useReduxStore from '../../hooks/useReduxStore';

function ItemList() {
    const dispatch = useDispatch();
    const store = useReduxStore();
    
    useEffect(() => {
        dispatch({ type: 'FETCH_ITEMS' });
    }, []);

    return(
        <>
        {store.items.map((item) => (
            <div key={item.id}>
                <p>{item.description}</p>
                <p>{item.image_url}</p>
            </div>
        ))}
        </>
    )
}

export default ItemList;