import React, {useState} from "react";
import styled from 'styled-components';
import BurgerButton from '../BurgerButton/BurgerButton'
import ButtonReact from '../button/Button';
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";
/* import Modal from "../modal/Modal"; */

export const NavBar = () =>{
    const[cliked, setCliked] = useState(false);
    
    const handleClick = () => {
        setCliked(!cliked);
    }

    const chamuyo = () => {
        alert("jajasent")
    }
    const [estadoModal, cambiarEstadoModal] = useState(false);

    return(
        <>
            <NavConteiner>
                <div className='navLogo'>
                    <h1>Léete La Vida</h1>
                </div>

                <div className={`links ${cliked ? 'active' : '' }`}>
                    <Link to="/">Home</Link> {" "}
                    <Link to="/resenas">Reseñas</Link> {" "}
                    <Link to="/miEspacio">Mi espacio</Link> {" "}
                    <Link to="/contacto">Contacto</Link> {" "}
                    <Link to="/about">Sobre Mi</Link> {" "}
                    <a href="/">
                        <div className='hidenOnDesktop'>
                            <ButtonReact>Login</ButtonReact>
                        </div>
                    </a>
                </div>

                <div className='nav-login'>
                    <ButtonReact 
                        pepeito={chamuyo} 
                        title="login" 
                    />  
                </div>
                
                <div className="burger">
                    <BurgerButton cliked={cliked} handleClick={handleClick} />
                </div>

                <BgDiv className={`initial ${cliked ? 'active' : ''}`} >

                </BgDiv>

                <Modal 
                    estado={estadoModal}
                    cambiarEstado={cambiarEstadoModal}
                >
                    <h1>LOGIN</h1>

                </Modal>

            </NavConteiner>
        
        </>
    )
}
export default NavBar;

const NavConteiner = styled.nav `
    
    padding: 0.5rem;
    background-color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
    .navLogo h1{
        font-weight: 400;
        font-size: 30px;
    }

    a{
        color: black;
        text-decoration: none;
        margin-right: 1rem;
        font-size: x-large;
    }
    .links{
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        a{
            font-size: 2rem;
            display: block;
        }
        @media(min-width: 768px){
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                display: inline;
            }
        }
    }

    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        z-index:2;
        a{
            font-size: 2rem;
            margin-top: 1rem;
        }
    }
    .burger{
        z-index: 2;
        @media (min-width: 768px){
            display: none;
        }
    }
    .nav-login{
        @media(max-width: 768px){
            display: none;
        }
    } 
    .hidenOnDesktop{
        display: none;
        @media (min-width: 768px){
            display: none;
        }
    }
`
const BgDiv = styled.div`
    position: absolute;
    background-color: #fdcae1; 
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease ;
    &.active{
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        
    }
`

