'use client'
import React from 'react'
import { Btn, Navbar, Componentsnav, Texto, Section, Titulo } from './components/meuscomponenetes';
import Imagem from './images/imagemhat.png'; 
export default function Home() {
    return (
        <main>
            <Navbar>
            <Componentsnav href="#">Porto</Componentsnav>
            </Navbar>

            <Section>
                <Titulo>Siga bem</Titulo>
                <Texto>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</Texto>
                <img src={Imagem}/>
            </Section>


            <Btn>Saiba mais</Btn>
        </main>
    );
}

