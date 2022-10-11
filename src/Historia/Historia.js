import { Carrousel } from "../Carrousel/Carrousel.js";
import "./Historia.css";
import { Integrantes } from "../Integrantes/Integrantes.js";
export function Historia() {
  return (
    <>
      <div>
        <Carrousel></Carrousel>
      </div>
      <div className="container">
        <Integrantes></Integrantes>
      </div>
    </>
  );
}
