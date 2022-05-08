import { useEffect, useState } from 'react';

const useLoadeddata = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://blooming-mountain-30106.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return [items, setItems]
};

export default useLoadeddata;