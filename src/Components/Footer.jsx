import React from "react";
export default function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-container-left">
            <h2 className="foot-logo">Pixabay</h2>
            <p style={{color:'grey'}}>Over 5 million+ high quality stock images, videos and music shared by our talented community.</p>
            <div className="foot-icons"><span><i class="fa-brands fa-instagram"></i></span><span><i class="fa-brands fa-pinterest"></i></span><span><i class="fa-brands fa-square-x-twitter"></i></span><span><i class="fa-brands fa-facebook"></i></span></div>
            </div>
            <div className="footer-container-right">
                <ul>
                    <li><h3>Discover</h3></li>
                    <li>Editor's Choice</li>
                    <li>Curated Collections</li>
                    <li>Pixabay Radio</li>
                    <li>Popular Images</li>
                    <li>Popular Videos</li>
                    <li>Popular Music</li>
                    <li>Popular Searches</li>
                </ul>
                <ul>
                    <li><h3>Community</h3></li>
                    <li>Blog</li>
                    <li>Forum</li>
                    <li>Creators</li>
                    <li>Carmeras</li>
                </ul>
                <ul>
                    <li><h3>About</h3></li>
                    <li>About Us</li>
                    <li>FAQ</li>
                    <li>License Summary</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookies Policy</li>
                    <li>Digital Services</li>
                    <li>Report Content</li>
                    <li>API</li>
                </ul>
            </div>
            <footer>
                <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
            </footer>
        </div>
    )
}