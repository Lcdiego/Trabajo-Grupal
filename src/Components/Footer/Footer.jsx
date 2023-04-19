
import React from 'react';
import './Footer.css';
import {FaYoutube,FaFacebook } from 'react-icons/fa';
import { AiFillInstagram} from "react-icons/ai";
import { AiFillTwitterCircle} from "react-icons/ai";

const Footer = () => {
    return(
        <div className='contenedor_Footer'>
            <div className='contenedor_Menu'>
                <div className='menuFooter'>
                    <div className='menu'>
                        <h5 className='tituloAnclas' href="">Bookish</h5>
                        <a className='anclas' href="">About</a>
                        <a className='anclas' href="">Team</a>
                        <a className='anclas' href="">Policies</a>
                        <a className='anclas' href="">Carres</a>
                        <a className='anclas' href="">Press</a>
                    </div>

                    <div className='menu'>
                        <h5 className='tituloAnclas' href="">Explore</h5>
                        <a className='anclas' href="">Home</a>
                        <a className='anclas' href="">About</a>
                        <a className='anclas' href="">Trust & Safety</a>
                        <a className='anclas' href="">Sustainability</a>
                        <a className='anclas' href="">FAQs</a>
                        <a className='anclas' href="">Get help</a>
                    </div>

                    <div className='menu'>
                        <h5 className='tituloAnclas' href="">Top cities</h5>
                        <a className='anclas' href="">Atlanta</a>
                        <a className='anclas' href="">Austin</a>
                        <a className='anclas' href="">Boston</a>
                        <a className='anclas' href="">Chariotte</a>
                        <a className='anclas' href="">Chicago</a>
                        <a className='anclas' href="">Dallas</a>
                    </div>

                    <div className='menu'>
                        <h5 className='tituloAnclas' href="">Section</h5>
                        <a className='anclas' href="">Delivery</a>
                        <a className='anclas' href="">Payment</a>
                        <a className='anclas' href="">Price</a>
                        <a className='anclas' href="">Writers</a>
                    </div>
                </div>
                <div className='redes_Footer'>

                    <h3 className='titulo_redes'>Bookish</h3>
                    <a className='redes' href=""><FaYoutube/></a>
                    <a className='redes'  href=""><AiFillInstagram/></a>
                    <a className='redes'  href=""><FaFacebook/></a>
                    <a className='redes'  href=""><AiFillTwitterCircle/></a>

                </div>
             
            
            </div>
            
           

        <div className='raya'></div>
            <p className='parrafoFooter'>copyright @ 2023 turo corporation All rights reserved </p>



        </div>
    )
}

export default Footer 