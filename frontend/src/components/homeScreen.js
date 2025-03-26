import { useEffect } from 'react' 
import Product from './product'
import LoadingBox from './loadingBox'
import MessageBox from './messageBox'
import  {useDispatch, useSelector} from 'react-redux'
import {listProducts} from '../actions/productAction'

export default function HomeScreen(){
    const dispatch = useDispatch();
    const productList = useSelector((state)=>state.productList)
    const {loading,error,products} = productList
    useEffect(()=>{
       dispatch(listProducts())
    },[dispatch])

    return (
    <div>
         {
        loading? (
            <LoadingBox/>
        ):
        error? (
            <MessageBox variant='error'>{error}</MessageBox>
        ):
        <div className="row center">
                    {
                        products.map(prod => (<Product key={prod._id} prod={prod}  /> ))
                    }
                </div>
    }
    </div>)
   
}