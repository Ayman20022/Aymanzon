import ProductScreen from './components/productScreen';
import HomeScreen from './components/homeScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
    return (
        <BrowserRouter >
            <div className="grid-container">
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
                    <Routes>
                        <Route path='/' Component={HomeScreen} ></Route>
                        <Route path='/product/:id' Component={ProductScreen}></Route>
                    </Routes>
                </main>

                <footer className="row center">All rights reserved</footer>

            </div>

        </BrowserRouter>
    )
}

export default App;
