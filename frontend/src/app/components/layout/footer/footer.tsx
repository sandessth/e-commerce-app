// import { Link } from "react-router-dom";
import { FooterComp } from "./footer-comp";

function Footer() {
  return (
    <>
      <div className=" shadow-xl flex justify-center gap-1 w-full text-xs bg-slate-100 backdrop-blur p-2">
        {FooterComp.map((item) => (
          <div key={item.text}>{item.text}</div>
        ))}
      </div>
    </>
  );
}

export default Footer;
