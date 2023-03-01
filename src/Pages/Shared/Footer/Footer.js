import React from "react";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="bg-slate-900 py-10 text-center text-white">
      Copyright &copy; {year} by Arabic-Bangla
    </div>
  );
};

export default Footer;
