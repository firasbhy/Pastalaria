function CareScale(props)
{
    const  scaleValue=props.scaleValue
    const rang=[1 ,2 ,3]
    return <div> { rang.map((rangElem)=> rangElem <= scaleValue ? <span key={rangElem.toString()}> ☀️</span>: null) } </div>
}
export default CareScale