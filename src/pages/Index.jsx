import React from "react";
import { MainLayout } from "../components/layout/Layout";
import Showcase from "../components/showcase/Showcase";
import styled from "styled-components";
import { ContenLayout } from "../components/layout/ContenLayout";
import { CardResena } from "../components/itemCard/CardResena";
import { Bar } from "../components/bar/Bar";
// import NavBar from "../components/navBar/NavBar";

export const Index = () => {
    return (
        <MainLayout>  
            <Showcase />
            <ContenLayout>
                <Bar barText="Reseñas"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam omnis explicabo nostrum ab minima architecto error similique, facere laborum eum, non voluptas. Architecto ea quo modi, temporibus nihil laudantium.</p>
                <CardResena />
                <CardResena />
                <CardResena />
                <CardResena />
                <CardResena />
                <CardResena />
                <CardResena />
            </ContenLayout>                 
        </MainLayout>
    )
} 

export default Index;



