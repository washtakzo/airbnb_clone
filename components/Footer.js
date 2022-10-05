import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>Site projet</p>
        <p>Pour port folio</p>
        <p>Forum</p>
        <p>Contact</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Zoher Ouazzar</p>
        <p>Dev React</p>
        <p>N'hésitez pas</p>
        <p>à me contacter</p>
        <p>Pour echanger sur vos projet</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help center</p>
        <p>Trust & Safety</p>
        <p>Easter Eggs</p>
        <p>Hard worker</p>
        <p>For the text</p>
      </div>
    </div>
  );
}

export default Footer;
