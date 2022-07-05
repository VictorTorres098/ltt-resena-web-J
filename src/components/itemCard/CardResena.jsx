import React from 'react'
import styled from 'styled-components'
import portada from '../../img/renegados.jpg'
import ButtonReact from '../button/Button'

export const CardResena = () => {
  return (
    <Section >
        <div className="c">  

            <div className="card-image">
                <img className="portada" src={portada} />
            </div>

            <div className="card-content">
                <div className="card-details">

                    <div className="icon-text">
                        <span className="icon"><i class="fa-solid fa-calendar-day"></i></span>
                        <span className="text">09/04/22</span>
                    </div>

                    <div className="icon-text">
                        <span className="icon"><i class="fa-solid fa-feather-pointed"></i></span>
                        <span className="text">Autor</span>
                    </div>

                    <div className="icon-text">
                        <span className="icon"><i class="fa-solid fa-heart"></i></span>
                        <span className="text">122</span>
                    </div>

                </div>

                <div className="card-metadata">
                    <h2 className="title">Titulo</h2>
                    <p className="excerpt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur saepe enim quod atque praesenti
                    um vero fugiat nobis aliquam? Molestiae facere sunt ab veritatis impedit
                    provident nesciunt quis in distinctio!</p>

                    <div className="blog-cta">                
                        <ButtonReact buttonText="Leer mas!" />
                    </div>
                </div>
            </div>

        </div>
    </Section>
  )
}

const Section = styled.section`
    .c{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 0.5rem;
        background-color: #e6e6e6;
        margin-bottom: 1rem;
        box-shadow: 1px 1px 7px rgba(0,0,0,.5);
    }
    .card-content{
        display: flex;
        flex-direction: column;
    }
    .card-image{
        width: 100%;
        height: 240px;
        margin-bottom: 1rem;
    }
    .card-image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .card-details{
        display: flex;
        margin-bottom: 1rem;
    }
    .icon-text{
        margin-right: 1rem;
    }
    .button {
        margin-right: 1rem;
    }
    .blog-cta{
        display: flex;
        justify-content: flex-end;
        margin-right: 1rem;
    }
    @media (min-width: 900px) {
    .c{
        flex-direction: row;
    }
    .card-image{
       
        margin-right: 1rem;
        border-radius: 40px;
        overflow: hidden;
       
    }
    .card-content{
        flex-direction: column-reverse;
    }
   
    }

`
