export async function servicioSpoty(){
    const URI="https://api.spotify.com/v1/artists/3YXpTiyVmYCfANOlnWv6vr/top-tracks?market=US"

    const TOKEN="Bearer BQAuJ_wKWckoykFFT5Gpa27T1Vg1ML-YdaUpnBMYI0ueXVShwWvtIJ5q2NfiQr0PyPvtJ_O309fXmJMJ_DAXE88Ma2HPzlCiMLAdvCuuDzRnkIik_5S1NnXM9lSEvwJBHR-ypLqBUViUgQ_WtkcJEKAoRflWf0lq5nHR9DuCD_ET"

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }
    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos
    

}