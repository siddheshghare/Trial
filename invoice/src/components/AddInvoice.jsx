
import { useState } from 'react'
import addNotification from 'react-push-notification'
export default function AddInvoice() {
   

    const logo="https://cdni.iconscout.com/illustration/premium/thumb/coder-illustration-download-in-svg-png-gif-file-formats--programmer-developer-developing-businex-flatline-pack-business-illustrations-2896007.png?f=webp"
 

    const yes=()=>{

        addNotification({
            title:'hello',
            message:'invoice Added',
            duration:5000,
            icon:logo
    
        })
    }
    const [data,setdata]=useState({ vendor:'',
        });

        const onValueChange = (e) => {
            setdata({ ...data, [e.target.name]: e.target.value });
        };

    
   const HandleSubmit = (e) => {
   
    e.preventDefault();
    console.log(data)
   }
       

  return (
   < >
   <button onClick={yes}>notify</button>
   
   <form onSubmit={HandleSubmit} className="container mt-4">
    <div className="form-group">
        <label>Vendor</label>
        <input
            type="text"
            className="form-control"
            placeholder="Enter vendor name"
            name="vendor"
            value={data.vendor}
            onChange={onValueChange}
        />
    </div>

    <div className="form-group">
        <label>Product</label>
        <input
            type="text"
            className="form-control"
            placeholder="Enter product name"
            name="product"
            value={data.product}
            onChange={onValueChange}
        />
    </div>

    <div className="form-group">
        <label>Amount</label>
        <input
            type="number"
            className="form-control"
            placeholder="Enter amount in Rs"
            name="amount"
            value={data.amount}
            onChange={onValueChange}
        />
    </div>

    <div className="form-group">
        <label>Date</label>
        <input
            type="date"
            className="form-control"
            name="date"
            value={data.date}
            onChange={onValueChange}
        />
    </div>

    <button type="submit" className="btn btn-primary mt-3">
        Add Invoice
    </button>
</form>
</>
    
  )
}
