import React from 'react'
import Layout from '../containers/Layout'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Problematicas from '../components/Problematicas';
import Guia from '../components/Guia';
import QueEs from '../components/QueEs';
import Productos from '../components/Productos';
import Vegetales from '../components/Vegetales';
import CtaFinal from '../components/CtaFinal';

const Home = () => {
    return(
        <Layout>
            <Navbar/>
            <Hero/>
            <Problematicas/>
            <Guia/> 
            <QueEs/>
            <Productos/>
            <Vegetales/>
            <CtaFinal/>
        </Layout>
    );
}

export default Home;