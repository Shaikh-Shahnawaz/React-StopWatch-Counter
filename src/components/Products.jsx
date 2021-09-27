import React from 'react'
import "./Products.css";
function Products() {
    return (
        <section className="electronics container-fluid bg-warning">

            <h2 className=" mb-5  px-3  d-inline-block">WEBSITES</h2>
            <div className=" d-flex justify-content-around">

            
            {/* <h1>Electronics</h1> */}
            <div className="card bg-dark text-light text-start" style={{width: "18rem"}}>
                <img src="https://source.unsplash.com//1600x900/?blog" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-warning">Blog Website</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-outline-warning btn-sm">Go somewhere</a>
                </div>
            </div>
            <div className="card bg-dark text-light text-start" style={{width: "18rem"}}>
                <img src="https://source.unsplash.com//1600x900/?online" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-warning">E-commerce Website</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-outline-warning btn-sm">Go somewhere</a>
                </div>
            </div>
            <div className="card bg-dark text-light text-start" style={{width: "18rem"}}>
                <img src="https://source.unsplash.com//1600x900/?social" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-warning">Inventry Website</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-outline-warning btn-sm">Go somewhere</a>
                </div>
            </div>
            <div className="card bg-dark text-light text-start" style={{width: "18rem"}}>
                <img src="https://source.unsplash.com//1600x900/?website" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-warning">CSM Webstie</h5>
                   
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {/* <a href="#" className="btn btn-outline-warning btn-sm me-3">View</a> */}
                    <a href="#" className="btn btn-outline-warning btn-sm">Go somewhere</a>
                </div>
            </div>
            </div>

        </section>
    )
}

export default Products
