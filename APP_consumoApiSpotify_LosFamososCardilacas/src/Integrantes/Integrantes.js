import './Integrantes.css';

export function Integrantes(){

    let integrantes=[
        {
            nombre:"Astor Cianciarullo",
            instrumento:"baterías y bajo",
            Edad:"74 años",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/imagesweb2.appspot.com/o/Astor.jpg?alt=media&token=2f1408ed-f4ba-4f5b-9ab3-98e55e16c03f"
        },
        {  
            nombre:"Flavio Cianciarulo",
            instrumento:"bajo",
            Edad:"72 años",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/imagesweb2.appspot.com/o/Flavio.jpg?alt=media&token=130d278a-c839-458e-9bb3-14bbe3bf138f"
        },
        {  
            nombre:"Mario Siperman",
            instrumento:"Teclados",
            Edad:"70 años",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/imagesweb2.appspot.com/o/siperman.jpg?alt=media&token=f632f44c-d9c5-482c-94fe-1fc491f14b63"
        },
        {  
            nombre:"Vicentico",
            instrumento:"voz",
            Edad:"70años",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/imagesweb2.appspot.com/o/Vicentico.jpg?alt=media&token=b1a2020f-4a2f-412c-b00b-f246178292d9"
        },
        {  
            nombre:"Fernando Ricciardi",
            instrumento:"Bateria",
            Edad:"70años",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/imagesweb2.appspot.com/o/Fernando.jpg?alt=media&token=a58d5d48-10dd-4caa-b963-d588e7ef4a8b"
         },
         {  
            nombre:"Daniel Lozano",
            instrumento:"trompeta",
            Edad:"80años",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/imagesweb2.appspot.com/o/Daniel%20Lozano.jpg?alt=media&token=4d308031-bde9-456e-85b2-018b98d171a9"
         },
         {  
            nombre:"Florián Fernández Capello",
            instrumento:"Guitarra",
            Edad:"82años",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/imagesweb2.appspot.com/o/Florian.jpg?alt=media&token=faf64405-54be-484d-8527-c6ef05188e50"
         },
    ]
    return(
       <div className="row row-cols-1 row-cols-md-4 g-0 mt-5">
            {
                integrantes.map(function(integrante){
                    return(
                        <>
                        <div className="col mt-3 py-5 px-3 bg-dark">
                            <div className="card h-100">
                                <img src={integrante.fotografia}  alt="" className="img-fluid w-100 img-size" />
                               <div className='bodycss text-center pb-5'>
                               <h4 className='fw-bold pt-3 pb-2'>{integrante.nombre}</h4>
                                <h5>Edad: {integrante.Edad}</h5>
                                <h5>Rol: {integrante.instrumento}</h5>
                               </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
       </div>
    )
}