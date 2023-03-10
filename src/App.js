import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

export default function App() {

    const [id, setID] = useState("");
    const [secondID, setSecondID] = useState("");
    const [infoSucess, setInfoSucess] = useState([]);
    const [infoSeats, setInfoSeats] = useState([]);

    return (
        <><NavContainer>CINEFLEX</NavContainer><BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/assentos/:idMovie" element={<SeatsPage id={id} secondID={secondID} setInfoSucess={setInfoSucess} setInfoSeats={setInfoSeats}/>} />
                <Route path="/sessoes/:idSession" element={<SessionsPage setID={setID} setSecondID={setSecondID} />} />
                <Route path="/sucesso" element={<SuccessPage infoSucess={infoSucess} infoSeats={infoSeats}/>}/>
            </Routes>
        </BrowserRouter></>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
