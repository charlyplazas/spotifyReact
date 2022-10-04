import { Footer } from "../Footer/Footer.js";
import { SubMenu } from "../SubMenu/SubMenu.js";
import "./Home.css";



export function Home() {

  let descripcionBanda="Nombre artístico de Nick Rivera Caminero; Boston, Estados Unidos, 1981) Cantante y compositor dominicano. Nicky Jam es uno de los cantantes de reggaeton más interesantes y con mayor prestigio dentro del panorama musical latino e internacional. A la vez, pese a su juventud, todos los que conocen bien el género admiten que ha conseguido mantenerse en el anonimato lo suficiente como para que de su vida no se conozca mucho más que por algunos pequeños enfrentamientos personales, sus trabajos discográficos y sus amigos habituales, ya que frecuenta a menudo la compañía de otros compañeros suyos, todos ellos músicos latinos."
  return (
    <>
      <div className="banner"></div>
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center">
                Nick-Jam
              </h1>
              <p className="text-center">
              {descripcionBanda}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SubMenu></SubMenu>
      </div>

    <div> 
      <Footer></Footer>
    </div>
    </>
  );
}
