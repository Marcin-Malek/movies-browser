import React, { useEffect } from 'react';
import { MovieDetails } from './MovieDetails';
import { MoviePoster } from './MoviePoster';
import { People } from './People';
import { MainWrapper } from './styled';
import { useParams } from "react-router-dom";
import { fetchMovie, selectFetchStatus } from '../moviesSlice';
import { useSelector, useDispatch } from "react-redux";
import { selectMovieDetails } from "../moviesSlice";
import Loader from '../../../common/Loader';
import { ErrorPage } from '../../../common/ErrorPage';

export const MoviePage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movieDetails = useSelector(selectMovieDetails);
    const fetchStatus = useSelector(selectFetchStatus);

    useEffect(() => {
        dispatch(fetchMovie(id));
    }, [id, dispatch]);

    switch (fetchStatus) {
        case "completed":
            return (
                <>
                    <MoviePoster
                        title={movieDetails.original_title}
                        image={`https://image.tmdb.org/t/p/w1280/${movieDetails.backdrop_path}`}
                        rating={movieDetails.vote_average}
                        votes={movieDetails.vote_count} />
                    <MainWrapper>
                        <MovieDetails
                            image={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                            title={movieDetails.original_title}
                            year={movieDetails.release_date}
                            production={movieDetails.production_countries[0].name}
                            release={movieDetails.release_date}
                            tags={movieDetails.genres}
                            rating={movieDetails.vote_average}
                            votes={movieDetails.vote_count}
                            description={movieDetails.overview}
                        />
                        <People header={"Cast"} />
                        <People header={"Crew"} />
                    </MainWrapper>
                </>
            );
        case "error":
            return (<ErrorPage />);
        default:
            return (<Loader />);
    }
};