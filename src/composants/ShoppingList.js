import {produitsList} from "../datas/produits.js"
import '../styles/ShoppingList.css'
import  CareScale from './CareScale.js'
function ShoppingList()
{
    
        const categories = produitsList.reduce(
            (acc, prod) =>
                acc.includes(prod.category) ? acc : acc.concat(prod.category),
            []
        )
        
    
        return (
            <div>
                <ul>
                    {categories.map((cat) => (
                        <li key={cat}>{cat}</li>
                    ))}
                </ul>
                <ul className='lmj-plant-list'>
                    {produitsList.map((prod) => (
                        <li className='lmj-plant-item' key={prod.id}>{prod.name }{prod.isbestsale ? <span>🔥</span> : <span>{null}</span>} {prod.isSpecialOffer && <div className="lmj-sales">Soldes</div> }<CareScale scaleValue={prod.light} /> </li>
            ))}
                </ul>
            </div>
        )
    
}

export default ShoppingList