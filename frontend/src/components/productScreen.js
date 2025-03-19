import data from '../data'
import Rating from './rating';
import { Link, useParams } from 'react-router-dom';
export default function ProductScreen(props) {

    let { id } = useParams()
    try {
        id = Number(id)
    } catch (error) {
        id = undefined
    }
    const product = data.products.find(x => x._id === Number(id));
    if (!product) {
        return <div>Product not found !</div>
    }
    return (

        <div>
            <Link to="/">Back to home</Link>
            <div className="row top">
                <div className="col-2">
                    <img src={product.image} alt={product.name} className="large" />
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews} />
                        </li>
                        <li>
                            {`Price : $ ${product.price}`}
                        </li>
                        <li>
                            Description :
                            <p className='description'>{product.description}</p>
                        </li>

                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div>{product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>{product.countInStock >= 1 ? <span className='success'>In stock</span>
                                        : <span className='error'>Unavailable</span>
                                    }</div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add to cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}