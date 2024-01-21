import React from 'react';
import '../styles/Banner.css'
import logo from '../assets/casas.PNG'
function Titre() {
    return  <h1 className='titre'> Casa Da Djerba </h1>       }

    function Description()
    {
        return <p className='description'>a primeira sala de chá oriental em Leria</p>
    }
function Image()
{
     return ( <img className='logo' src={logo} alt='casas da djerba'/>)
}

function Banner()
{
    return <React.Fragment><Titre /> <Image /><Description /></React.Fragment>
}

export default Banner;