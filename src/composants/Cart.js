 import '../styles/Cart.css'
function Cart()
{
    const n1="couscous"
    const p1=8.50
    const n2="jwajem"
    const p2=5
    return (<div className="pannier"><ul><li>{n1}   {p1}</li><li> {n2}   {p2} </li>  </ul> <b>Total: {p1+p2}</b></div>);
}

export default Cart;