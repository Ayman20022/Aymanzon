import Rating from "./rating"

export default function Product(props){

    const {prod}=props
    return (
        <div key={prod._id} className="card">
                            <div className="card-head">
                                <a href={'/product/'+prod._id}>
                                    <img className="medium" src={`.${prod.image}`} alt={prod.name} />
                                </a>
                            </div>

                            <div className="card-body">
                                <a href={'/product/'+prod._id}>
                                    <h2>{prod.name}</h2>
                                </a>
                                <Rating rating={prod.rating} numReviews={prod.numReviews}/>
                                <div className="price">
                                    ${prod.price}
                                </div>
                            </div>
                        </div>
    )
}