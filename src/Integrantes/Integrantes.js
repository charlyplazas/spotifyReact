import './Integrantes.css'
import 'animate.css'
import WOW from 'wowjs'
import { useEffect } from 'react';

export function Integrantes() {

    useEffect(()=> {
        new WOW.WOW({
            live:false
        }).init()
    },[])

  return (
    <>
      <div className="row my-5 justify-content-center">
        <div className="col-12 col-md-4 zoom">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/spotify-c8d18.appspot.com/o/sixnine.jpg?alt=media&token=4789f795-abdc-4488-9615-7302a31c8337"
            alt="foto1"
            className="img-fluid w-100 rounded-circle animate__animated  animate__backInLeft wow"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample1"
          />
          </div>
          <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__backInRight wow'>
            <h2>Nombre del artista</h2>
            <h3>Vocalista</h3>
          </div>
      </div>
          <div className="row mt-2">
            <div className="col-12">
              <div className="collapse" id="collapseExample1">
                <div className="card card-body">
                  Some placeholder content for the collapse component. This
                  panel is hidden by default but revealed when the user
                  activates the relevant trigger.
                </div>
              </div>
            </div>
          </div>



          <div className="row my-5 justify-content-center">
          <div className='col-12 col-md-4 align-self-center border-end text-end animate__animated animate__backInLeft wow'>
            <h2>Nombre del artista</h2>
            <h3>Vocalista</h3>
          </div>
        <div className="col-12 col-md-4 zoom">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/spotify-c8d18.appspot.com/o/coscu.jpg?alt=media&token=30d8f63e-e84e-4110-b870-a3f338238dea"
            alt="foto1"
            className="img-fluid w-100 rounded-circle border-start animate__animated animate__backInRight wow"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample2"
          />
          </div>
          
      </div>
          <div className="row mt-2">
            <div className="col-12">
              <div className="collapse" id="collapseExample2">
                <div className="card card-body">
                  Some placeholder content for the collapse component. This
                  panel is hidden by default but revealed when the user
                  activates the relevant trigger.
                </div>
              </div>
            </div>
          </div>
        
    </>
  );
}
