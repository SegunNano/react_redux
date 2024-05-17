import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ordered, restocked } from './iceCreamSlice';

const IceCreamView = () => {
    const iceCreamNum = useSelector((state) => state.iceCream.iceCreamNum);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number Of  Ice Creams - {iceCreamNum}</h2>
            <button onClick={() => dispatch(ordered(1))}>Order Ice Creams</button>
            <button onClick={() => dispatch(restocked(5))}>Restck Ice Creams</button>
        </div>
    );
};

export default IceCreamView;
