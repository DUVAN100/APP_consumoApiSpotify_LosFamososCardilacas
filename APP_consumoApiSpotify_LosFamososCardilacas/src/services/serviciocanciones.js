
export async function serviciocanciones(){

    const URI="https://api.spotify.com/v1/artists/2FS22haX3FYbyOsUAkuYqZ"
    const TOKEN="Bearer BQBS5VnQerVzYPEABo-vCmFm0lJs_fz4XHctf1dGB4g3amRoCSji5Tg2VyYey02EEJbEsKYxK0sDEgv1Gunl6Ial7IKam3sBzpON3u4UXy96MXUO5jnII_lnrrZo4l735mNoHpvR6jX-44AZU9sGWsIrIuSLnNb4gcRjX4ZXt_HA__WsKoiew71MDCaGY2xVeZA"
    const PETICION={
        method :"GET",
        headers :{Authorization:TOKEN}
    }
    let respuesta=await fetch(URI,PETICION)
    let canciones=await respuesta.json()

    return canciones

}