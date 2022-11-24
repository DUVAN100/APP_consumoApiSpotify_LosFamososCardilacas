import "./Footer.css";
export function Footer() {

    return (
        <>
        <footer className="container-fluid g-0 bg-footer mt-5">
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src="https://firebasestorage.googleapis.com/v0/b/imagesweb2.appspot.com/o/Logo.jpg?alt=media&token=1da9adca-b226-48c4-9018-b42949308566" className="img-fluid w-100" />
                </div>
                <div className="col-12 col-md-6 text-white align-self-center text-center">
                        <h2>LOs famosos cardilacs</h2>
                        
                    <ul>
                        <i className="me-3 fa-brands fa-instagram "></i>
                        <i className="me-3 fa-brands fa-facebook"></i>
                        <i className="me-3 fa-brands fa-twitter"></i>
                    </ul>
                </div>
            </div>
        </footer>
        </>
    )

}