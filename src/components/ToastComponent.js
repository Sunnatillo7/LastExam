import { toast } from 'react-toastify';



function ToastComponent({ type, text }) {
    toast.success(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        success : type
    });
}

export default ToastComponent