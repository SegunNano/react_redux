import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ordered, restocked } from './cakeSlice';


const CakeView = () => {
    const [order, setOrder] = useState();
    const [restock, setRestock] = useState();
    const cakeNum = useSelector((state) => state.cake.cakeNum);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number Of  Cakes -{cakeNum} </h2>
            <input type="number" value={order} onChange={(e) => setOrder(parseInt(e.target.value))} />
            <button onClick={() => dispatch(ordered(order))}>OrderCakes</button>
            <input type="number" value={restock} onChange={(e) => setRestock(parseInt(e.target.value))} />
            <button onClick={() => dispatch(restocked(restock))}>RestockCakes</button>
        </div>
    );
};

export default CakeView;
