import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
const logo = "https://cdni.iconscout.com/illustration/premium/thumb/coder-illustration-download-in-svg-png-gif-file-formats--programmer-developer-developing-businex-flatline-pack-business-illustrations-2896007.png?f=webp";

const Notify = () => {

    const yes = () => {
        toast.info('Invoice Added', {
            icon: <img src={logo} alt="icon" style={{ width: '30px' }} />,
          
            position: 'top-right',  // String instead of toast.POSITION
        });
    };

    return (
        <div>
            <button onClick={yes}>Notify</button>
            <ToastContainer />
        </div>
    );
};

export default Notify;
