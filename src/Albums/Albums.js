import { useState } from "react"
import { servicioSpoty } from "../services/servicioSpoty.js"


export function Albums(){

//declarando mi primer useState

const [canciones,setCanciones]=useState(null)

servicioSpoty()
.then(function(respuesta){
    setCanciones(respuesta.tracks)
})

    return(
        <>
        <h1>HOLA SOY ALBUMS Y SOY UN COMPONENTE</h1>
        </>
    )}