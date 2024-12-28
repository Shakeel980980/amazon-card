import Product from './product.jsx'
import './ProductTab.css'
function ProductTab(){
    return(
        <div className='ProductTab'>  
            <Product title="Mouse"  index={0}/>
            <Product title="Laptop" index={1}/>
            <Product title="Keyboard" index={2}/>
            <Product title="Mobile" index={3}/>
        </div>
    )
}
export default ProductTab