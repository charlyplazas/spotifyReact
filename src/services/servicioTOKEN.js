export async function servicioTOKEN(){
    

//uri
const URI="https://accounts.spotify.com/api/token"
//datos
const DATOS1="grant_type=client_credentials"
const DATOS2="client_secret=b350bf27e1fc4c90b6abfa4e1210167e"
const DATOS3="client_id=f78d13df4cca41579403e966fd2decf6"
//peticion
const PETICION={
    method:"POST",
    headers:{"Content-type":"application/x-www-form-urlencoded"},
    body:DATOS1+"&"+DATOS2+"&"+DATOS3
}

//fetch
let respuesta=await fetch(URI,PETICION)
let datos=await respuesta.json()
datos=datos.token_type+' '+datos.access_token
return datos




}