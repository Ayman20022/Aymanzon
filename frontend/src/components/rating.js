export default function Rating(props) {
    const rating = props.rating
    const numReviews = props.numReviews
    const listOfStars = []
    let element;

    for (let i = 1; i <= 5; i++) {
        element = <i key={i} className={rating >=i ? "fa fa-star" : rating >= i-0.5 ? "fa fa-star-half-o" : "fa fa-star-o"} ></i>
        listOfStars.push(element)
    }
    return (
        <div className="rating">
            <span>
               {listOfStars}
            </span>
            <span>
                {' '+numReviews+' reviews'}
            </span>

        </div>
    )
}