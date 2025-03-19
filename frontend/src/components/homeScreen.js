import data from '../data'
import Product from './product'


export default function HomeScreen(){

 return (
    <div className="row center">
                {
                    data.products.map(prod => (
                        <Product key={prod._id} prod = {prod} /> 
                    ))
                }

            </div>
 )
}