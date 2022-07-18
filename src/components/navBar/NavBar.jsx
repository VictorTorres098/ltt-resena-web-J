import React, {useState} from "react";
import styled from 'styled-components';
import BurgerButton from '../BurgerButton/BurgerButton'
import ButtonReact from '../button/Button';
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";
import Login from "../login/Login";
/* import Modal from "../modal/Modal"; */




export const NavBar = (startAdminService) =>{

    const[cliked, setCliked] = useState(false);
    
    const handleClick = () => {
        setCliked(!cliked);
    };

    const [estadoModal, cambiarEstadoModal] = useState(false);

    const buttonFuncion = () =>{
        cambiarEstadoModal(!estadoModal)
    }; /* paso las acciones de onclick ya que sin esto no funciona */

    return(
        <>
            <NavConteiner>
                <div className='navLogo'>
                    <h1>Léete La Vida</h1>
                </div>

                <div className={`links ${cliked ? 'active' : '' }`}>
                    <div className="nav-logo-movil">
                        <h1>Léete La Vida</h1>
                    </div>
                    <Link to="/">Home</Link> {" "}
                    <Link to="/resenas">Reseñas</Link> {" "}
                    <Link to="/miEspacio">Mi espacio</Link> {" "}
                    <Link to="/contacto">Contacto</Link> {" "}
                    <Link to="/about">Sobre Mi</Link> {" "}
                    {startAdminService ? <Link to="/Admin">Admin</Link> : '' }
                    <div className="nav-login-movil"> {/* Solo es visible en modo movil */}
                            <ButtonReact metodoModal={buttonFuncion} title="Login" />
                    </div>
                </div>

                <div className='nav-login'>
                    <ButtonReact 
                        metodoModal={buttonFuncion}
                        title="Login" 
                    ></ButtonReact>  
                </div>
                <div className="burger">
                    <BurgerButton cliked={cliked} handleClick={handleClick} />
                </div>

                <BgDiv className={`initial ${cliked ? 'active' : ''}`} >

                </BgDiv>

                <Modal 
                    estado={estadoModal}
                    cambiarEstado={cambiarEstadoModal}
                    titleModal={"Login"}
                >
                    <Login /> 
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
        font-size: 40px;
        font-family: 'The Nautigal', cursive;
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
        top: 20%;
        left: 0;
        right: 0;
        text-align: center;
        z-index:2;
        a{
            font-size: 2rem;
            margin-top: 1rem;
            color: white;
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
    .nav-login-movil{
        @media(min-width: 768px){
            display: none;
        }
        margin-top: 50px;
    }
    .nav-logo-movil{
        @media(min-width: 768px){
            display: none;
        }
        color: whitesmoke;
        /* margin-bottom: 10%; */
        font-family: 'The Nautigal', cursive;
        font-size: large;

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

