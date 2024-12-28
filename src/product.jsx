import './Product.css'
import Price from './price.jsx'

function Product({title, index}){
    let oldPrice =["500", "60,000", "800", "30,000"];
    let newPrice =["400", "50,000", "600", "25,000"];
    let disc = [
        ["Original Quality", "Visit to Buy"], 
        ["Tranding in Market", "new items are available"], 
        ["Awesome Product", "Come to purchase"],
        ["Flixeble item","welcome to this shop"]
    ];
    return (
        <>
    <div className="product">
       <h4>{title}</h4>
       <p>{disc[index][0]}</p>
       <p>{disc[index][1]}</p>
       <Price oldPrice={oldPrice[index]} newPrice={newPrice[index]}/>
    </div>
    </>
    )
}

export default Product