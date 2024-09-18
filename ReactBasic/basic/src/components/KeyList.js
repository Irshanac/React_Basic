import React from 'react'

const KeyList = () => {
   // const [quantity,setQuatity]=useState(1)
    const product=[
        {id:1,name:'hp',price:234,quantity:1},
        {id:2,name:'lenova',price:34545,quantity:1},
        {id:3,name:'dell',price:3545,quantity:1},
        {id:4,name:'mac',price:45656,quantity:1}
    ]
    const arr=[1,2,3,4,5,6,7]
    
  return (
    <div>
      { product.map((product,index) =>(
        <div key={index}>
             <h1>Brand:{product.name}</h1>
            <h1>price:{product.price}</h1>
            <h3>quantity:{product.quantity}</h3>
            <button >+</button>
        </div>
      ))}
      {arr.map((p,index)=>(
        <div key={index} >
          <h1>helloe{index} {p}</h1>
          <h5>hello with 4{p+4}</h5>
        </div>
      ))
      }
    </div>
  )
}

export default KeyList

