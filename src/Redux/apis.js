import axios from "axios";
import { toast } from "react-toastify";

export const apiCallHandler = async (api, method, body) => {
    var config = {
        method: method,
        url: `${process.env.REACT_APP_BASE_URL}${api}`,
        headers: {
            'Content-Type': 'application/json',
            // "Authorization": `Bearer ${token}`
        }
        
    };
    if (body) {
        config.data = JSON.stringify(body)
    }
    try {
        const res = await axios(config)
        // toast.success(res);
        return res.data
    } catch (error) {
        // toast.warn(error);
       console.log(error);
    };
};