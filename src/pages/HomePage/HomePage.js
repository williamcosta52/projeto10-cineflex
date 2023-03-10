import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import styled from "styled-components"

export default function HomePage() {

    const [movieList, setMovieList] = useState([]);

    const { idMovie } = useParams();


    useEffect(() => {

        const url = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
        const promise = axios.get(url);

        promise.then((resp) => {
            setMovieList(resp.data);
        })
        promise.catch((err) => {
            console.log("deu ruim");
        })

    }, [])

    return (
        <PageContainer>
            Selecione o filme
            <ListContainer>
                    {movieList.length > 0 ? (
                        movieList.map((poster, index) => (
                            <Link to={{ pathname: `/sessoes/${movieList[index].id}`, movieId: movieList }} key={index}>
                                <MovieContainer data-test="movie">
                                    <img src={movieList[index].posterURL} alt="poster"/>
                                </MovieContainer>
                            </Link>
                        ))
                    ) : (
                        <div>Carregando...</div>
                    )}
            </ListContainer>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-top: 70px;
`
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
const MovieContainer = styled.div`
    width: 145px;
    height: 210px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    img {
        width: 130px;
        height: 190px;
    }
`