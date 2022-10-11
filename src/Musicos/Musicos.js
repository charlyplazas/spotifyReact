import { Footer } from "../Footer/Footer.js";

export function Musicos() {

  //un arreglo de objetos es formato comun al consumir un api
  let musicos = [
    {   nombre: "Daddy Yankee", 
        rol: "Vocalista", 
        url: "https://firebasestorage.googleapis.com/v0/b/spotify-c8d18.appspot.com/o/daddyHis.jpg?alt=media&token=4209715a-b719-4353-88a3-2b3bd80a0f0d" 
    },
    {   nombre: "Nicky Jam", 
        rol: "Vocalista", 
        url: "https://firebasestorage.googleapis.com/v0/b/spotify-c8d18.appspot.com/o/nicky%20Jam.jpg?alt=media&token=3a1c6341-176a-455b-853b-4cd7f58d386f"
     },
    {   nombre: "Los Cangris", 
        rol: "Vocalistas", 
        url: "https://firebasestorage.googleapis.com/v0/b/spotify-c8d18.appspot.com/o/nickyDaddyvieja.jpeg?alt=media&token=00faf1d1-b637-467a-9269-b6f925735c7b" 
    },
  ];

  let conciertosMemorables=[
    {
      fecha:" 15 de marzo de 2005",
      pais:"Nueva York, República Dominicana, Honduras y Guatemala.",
      descripcion: "Este fue el primer concierto masivo exclusivamente del artista boricua Daddy Yankee, este concierto fue para celebrar las más de 100 mil copias que tuvieron sus 2 álbumes anteriores. La sede fue el Coliseo Roberto Clemente, el cual era la sede más grande para espectáculos en vivo en Puerto Rico, gracias a este show Daddy Yankee comienza una gira por ",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotify-c8d18.appspot.com/o/foto1loscangris.jfif?alt=media&token=2b8b5260-7616-4dbf-9d77-df7af064b8e0"
    },
    {
      fecha:"Daddy Yankee y Nicky Jam, el viernes 16 de diciembre",
      pais:"en el Coliseo de Puerto Rico José Miguel Agrelot.",
      descripcion: "Los Cangris En Concierto 2016",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotify-c8d18.appspot.com/o/cang-vier.sabado.jpg?alt=media&token=d4d73961-0107-44ec-be60-677fe7449628"
    },
    {
      fecha:"el 18 de octubre en el Estadio Nacional.",
      pais:"su concierto en bogota de su tour “La Última Vuelta”.",
      descripcion: "En su primera fecha de preventa, Daddy Yankee agotó todas las entradas puestas a disposición, todos los fans del 'Cangri' intentaron conseguir su boleto para el show que ofrecerá ",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotify-c8d18.appspot.com/o/cang3.webp?alt=media&token=d99b629b-1934-43d0-b345-34aacf2f90d6"
    },
    {
      fecha:"Desde las 9.00 a. m. de este 28 de marzo",
      pais:"su concierto en Lima de su tour “La Última Vuelta”.",
      descripcion: "En su primera fecha de preventa, Daddy Yankee agotó todas las entradas puestas a disposición, todos los fans del 'Cangri' intentaron conseguir su boleto para el show que ofrecerá el 18 de octubre en el Estadio Nacional.",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotify-c8d18.appspot.com/o/cang2.jfif?alt=media&token=a16d47d7-2ed3-456d-83ec-d65d0fd2f86b"
    },
    {
      fecha:"desde las 7 de la noche en atacio girardot",
      pais:"clombia",
      descripcion: "este es el concierto que voy a presenciar el dia de hoy en mis sueños :)",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotify-c8d18.appspot.com/o/can4.jpg?alt=media&token=c35f3d9d-931c-4427-beb1-30323d9f612f"
    }
  ]

  //mapenado un arreglo para hacer render
  return(
   
<>
    <div className="row row-cols-1 row-cols-md-4 g-3 justify-content-center mt-5">
      {
      musicos.map(function(musico){
        return(
          <>
          <div className="col mt-3 justify-content-center">
            <div className="card h-100">
              <img src={musico.url} className="img-fluid w-100 h-100" alt="foto"/>
              <h3 className="text-center">{musico.nombre}</h3>
              <h4 className="text-center">{musico.rol}</h4>
            </div>
          </div>
          </>
        )
      })
      }
      
    </div>
    
    <div className="row row-cols-1 row-cols-md-4 g-3 justify-content-center mt-5">
      {
        conciertosMemorables.map(function(conciertosMemorable){
          return(
            <>
            <div className="col mt-3 justify-content-center">
            <div className="card h-100">
              <img src={conciertosMemorable.foto} className="img-fluid w-100 h-100" alt="foto"/>
              <h3 className="text-center">{conciertosMemorable.fecha}</h3>
              <h4 className="text-center">{conciertosMemorable.pais}</h4>
              <h4 className="text-center">{conciertosMemorable.descripcion}</h4>
            </div>
          </div>            
            </>
          )
        })
      }
    </div>

    <Footer></Footer>
    </>
  )



}
