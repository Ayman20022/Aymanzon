import data from './data'

function App() {
    return (<div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">Amazona</a>
            </div>
            <div>
                <a className="links" href="/cart">Cart</a>
                <a className="links" href="/signin">Sign In</a>
            </div>
        </header>

        <main>
            <div className="row center">
                {
                    data.products.map(prod => (
                        <div key={prod._id} className="card">
                            <div className="card-head">
                                <a href={`/product/${prod._id}`}>
                                    <img className="medium" src={`.${prod.image}`} alt={prod.name} />
                                </a>
                            </div>

                            <div className="card-body">
                                <a href="product.html">
                                    <h2>{prod.name}</h2>
                                </a>
                                <div className="rating">
                                    <span>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                </div>
                                <div className="price">
                                    ${prod.price}
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>



        </main>

        <footer className="row center">All rights reserved</footer>

    </div>)
}

export default App;
