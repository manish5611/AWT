import React,{useState} from 'react';
function Orders(){
    const[count,setCount]=useState(0);
    const[count1,setCount1]=useState(0);
    const[count2,setCount2]=useState(0);
    const date =new Date();
    const deliverydate = new Date();
    deliverydate.setDate(date.getDate()+3);
    const price1=count*90000;
    const price2=count1*80000;
    const price3=count2*70000;
    const totalprice=price1+price2+price3;
    return( 
        <div style={{backgroundColor:"lightblue",width:"400px",height:"400px",
                      marginLeft:"500px"}}>
            <h2> Orders </h2>
        <div style={{display:"flex",gap:"100px"}}> 
            <fieldset>
                <h1>MAC BOOk AC</h1>
                <p>Description:Mac Book @intel core 576gb</p>
                <p>Price:90000</p>
                <p>Quantity:{count}</p>
                <button onClick={()=>setCount(count+1)}>+</button>
    
            </fieldset>
            <fieldset>
                <h1>HP PAVILION</h1>
                <p>Description:HP Pavilion @intel core 576gb</p>
                <p>Price:80000</p>
                <p>Quantity:{count1}</p>
                <button onClick={()=>setCount1(count1+1)}>+</button>    

            </fieldset>
            <fieldset>
                <h1>DELL INSPIRON</h1>
                <p>Description:Dell Inspiron @intel core 576gb</p>
                <p>Price:70000</p>
                <p>Quantity:{count2}</p>
                <button onClick={()=>setCount2(count2+1)}>+</button>
            </fieldset>                         

        </div>
        <p>Total Price:{totalprice}</p>
        <p>Order Date:{date.toDateString()}</p>
        <p>Delivery Date:{deliverydate.toDateString()}</p>
        </div   >
    )
}

export default Orders;