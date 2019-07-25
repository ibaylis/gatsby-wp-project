import React from 'react';

import tangoFB from '../images/tango-facebook-icon.svg';
import tangoIG from '../images/tango-instagram-icon.svg';
import tangoLI from '../images/tango-linkedin-icon.svg';

import { FooterWrapper } from './styles/FooterStyles';

const Footer = () => (
    <FooterWrapper>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="whiteText">CONTACT</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h3>Ian J Baylis</h3>
                    <p className="tango-contact">
                        <a href="mailto:ibaylis@tangobrandalliance.se">
                            ibaylis@tangobrandalliance.se
                        </a>
                    </p>
                    <p className="tango-contact">+46 (0) 706 531 992 </p>
                    <span className="social">
                        <a
                            target="_blank"
                            rel="noopener norefferrer"
                            href="https://www.linkedin.com/ibaylis"
                        >
                            <img src={tangoLI} alt="tango-li" />    
                        </a>
                    </span>
                </div>
                <div className="col-md-4">
                    <h3>Natasha Brabham</h3>
                    <p className="tango-contact">
                        <a href="mailto:nbrabham@tangobrandalliance.se">
                            nbrabham@tangobrandalliance.se
                        </a>
                    </p>
                    <p className="tango-contact">+46 (0) 706 328 845 </p>
                    <span className="social">
                        <a
                            target="_blank"
                            rel="noopener norefferrer"
                            href="https://www.linkedin.com/nbrabham"
                        >
                            <img src={tangoLI} alt="tango-li" />    
                        </a>
                    </span>
                </div>
                <div className="col-md-4">
                    <h3>TANGO BRAND ALLIANCE AB</h3>
                    <p className="tango-contact"> Box 160, 101 23 Stockholm</p>
                    <p className="tango-contact"> Visit: Convendum, Vasagatan 16</p>
                    <span className="social">
                        <a
                            target="_blank"
                            rel="noopener norefferrer"
                            href="https://www.facebook.com/tangobrandalliance/"
                        >
                            <img className="facebook" src={tangoFB} alt="tango-fb" />    
                        </a>
                        <a
                            target="_blank"
                            rel="noopener norefferrer"
                            href="https://www.instagram.com/tangobrandalliance/"
                        >
                            <img className="instagram" src={tangoIG} alt="tango-ig" />    
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </FooterWrapper>
)

export default Footer;