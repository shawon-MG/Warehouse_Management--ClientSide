import { useEffect, useState } from 'react';

const useLoadeddata = () => {

    const [items, setItems] = useState({});
    useEffect(() => {
        fetch('http://localhost:4000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return { items }
};

export default useLoadeddata;