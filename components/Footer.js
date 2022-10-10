import React from "react";

function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 px-32 py-14 max-w-7xl mx-auto gap-12 sm:gap-0">
        <div className="footer__grid__element">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        <div className="footer__grid__element">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessibility</p>
          <p>Site projet</p>
          <p>Pour port folio</p>
          <p>Forum</p>
          <p>Contact</p>
        </div>
        <div className="footer__grid__element">
          <h5 className="font-bold">HOST</h5>
          <p>Zoher Ouazzar</p>
          <p>Dev React</p>
          <p>Ne pas hésitez</p>
          <p>à me contacter</p>
          <p>Pour echanger sur vos projet</p>
        </div>
        <div className="footer__grid__element">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Help center</p>
          <p>Trust & Safety</p>
          <p>Easter Eggs</p>
          <p>Hard worker</p>
          <p>For the text</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
