import { useEffect, useState } from 'react' 
import Product from './product'
import axios from 'axios'
import LoadingBox from './loadingBox'
import MessageBox from './messageBox'





export default function HomeScreen(){

    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const {data} = await axios.get('/api/products')
                setProducts(data)
                
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
            setLoading(false)
            
        }
        fetchData()
    },[])

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
                        products.map(prod => (
                            <Product key={prod._id} prod = {prod} /> 
                        ))
                    }

                </div>
    }

        
    </div>)
   
}