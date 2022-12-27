import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
//here it is not the installed axios but the custom axios 
import { API_KEY, imageUrl } from '../../constants/constatnts'

function Banner() {

    const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            // console.log(response.data);
            console.log(response.data.results[0]);
            setMovie(response.data.results[0])
        }) //TO WRITE API_KEY insie we have to use backtick and dollar sign
    }, [])

    // useEffect will only work after the below component is worked ie., the return function below

    return (
        <div
            style={{ backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ''})` }}
            className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ''}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ''}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner