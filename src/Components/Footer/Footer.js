import React from 'react'
import logo from '../../Images/coinbase_logo.svg';
import './Footer.css'

function Footer() {
    return (
        <footer className="footer-section">
            <div className="container row">
                <div className="lastsect col-3">
                    <div className="footer-col">
                        <div className="foot-col">
                        <img  className="coin-img" src={logo} alt="coinbase"/>
                        <select className="languages">
                            <option selected value="en">English</option>
                            <option value="es">Espanol</option>
                            <option value="de">Deutsch</option>
                            <option value="fr">Francais</option>
                            <option value="twi">Twi</option>
                        </select>
               

                        <div className="footerrow">
                            <div className="copyright">© 2021 Coinbase</div>
                            <div className="social"><a href="https://blog.coinbase.com/" className="social-link" color="slate">Blog</a>
                            <span className="social-dot">•</span><a href="https://twitter.com/coinbase" className="social-link">Twitter</a>
                            <span class="social-dot">•</span><a href="https://www.facebook.com/Coinbase" className="social-link">Facebook</a>
                        </div>

                        </div>
                        </div>                   
                    </div>
                </div>

                <div className="footer-col2 col">
                    <div>
                        <div className="links-container">
                            <h2 className="footer-head">Company</h2>
                            <a className="social-link">About</a>
                            <a className="social-link">Careers</a>
                            <a className="social-link">Affiliates</a>
                            <a className="social-link">Blog</a>
                            <a className="social-link">Press</a>
                            <a className="social-link">Investors</a>
                            <a className="social-link">Legal {'&'} privacy</a>
                            <a className="social-link">Cookie policy</a>
                            
                            </div>

                            <div className="links-container">
                                < h2 className="footer-head">Learn</h2>
                                <a className="social-link">Browse crypto</a>
                                <a className="social-link">Crypo basics</a>
                                <a className="social-link">Tips {'&'} tutorials</a>
                                <a className="social-link">Market updates</a>
                                <a className="social-link">What is Bitcoin?</a>
                                <a className="social-link">What is crypto?</a>
                                <a className="social-link">What is a blockchain?</a>
                                <a className="social-link">How to set up a cypto wallet</a>
                                <a className="social-link">How to send crypto</a>
                                <a className="social-link">Taxes</a>

                            </div>
                    </div>
                    <div>
                          <div  className="links-container">
                              <h2 className='footer-head'>Individuals</h2>
                              <a className="social-link">Earn free crypto</a>
                              <a className="social-link">Wallet</a>
                              <a className="social-link">Card</a>
                          </div>

                          <div className="links-container">
                              <h2 className="footer-head">Businesses</h2>
                              <a className="social-link">Prime</a>
                              <a className="social-link">Custody</a>
                              <a className="social-link">Asset Hub</a>
                              <a className="social-link">Commerce</a>
                          </div>
                          <div className="links-container">
                              <h2 className="footer-head">Developers</h2>
                              <a className="social-link">Coinbase Cloud</a>
                              <a className="social-link">Connect</a>
                              <a className="social-link">Commerce</a>
                              <a className="social-link">Pro</a>
                              <a className="social-link">Bison Trails</a>
                              <a className="social-link">WalletLink</a>
                              <a className="social-link">Rosetta</a>
                              <a className="social-link">USDC</a>
                          </div>
                    </div>

                    <div>
                        <div className="links-container">
                            <h2 className="footer-head">Support</h2>
                            <a className="social-link">Help center</a>
                            <a className="social-link">Contact us</a>
                            <a className="social-link">Create account</a>
                            <a className="social-link">ID verification</a>
                            <a className="social-link">Account information</a>
                            <a className="social-link">Payment methods</a>
                            <a className="social-link">Account access</a>
                            <a className="social-link">Supported crypto</a>
                            <a className="social-link">Supported countries</a>
                            <a className="social-link">Status</a>
                        </div>
                    </div>
                   
                </div>
            </div>
        </footer>
    )
}

export default Footer
