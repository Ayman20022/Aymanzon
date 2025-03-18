import data from './data'
import Product from './components/product';


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
                        <Product key={prod._id} prod = {prod} /> 
                    ))
                }

            </div>



        </main>

        <footer className="row center">All rights reserved</footer>

    </div>)
}

export default App;
