import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCareer } from './careerSlice';

const Career = () => {
    const career = useSelector(state => state.career);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCareer());
    }, []);

    return (
        <div>
            <h2>List of Career</h2>
            {career.loading && <div>Loading......</div>}
            {career.error && <div >Error: {career.error}</div >}
            {career.careers ? (
                <ul style={{ listStyle: 'none' }}>
                    {
                        career.careers.map(c => (
                            <li key={c.id}>
                                <h3 style={{ textDecoration: 'underline' }}>{c.title}</h3>
                                <p>Avereage Salary - <b>${c.salary}</b></p>
                                <p>Location -<b>{c.location}</b></p>
                            </li>
                        ))
                    }
                </ul>
            ) : null}
        </div>
    );
};

export default Career;
