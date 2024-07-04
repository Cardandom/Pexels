import axios from "axios";

//QbEbwaJ0QoPlVtTsdl2EZ2AOeHQSCK3g4uUfvmjxnk4x4rQAJ0Ef3NZh

export const getImages = async (searchTerm = "animals") => 
   await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
        headers : {
            Authorization: 'QbEbwaJ0QoPlVtTsdl2EZ2AOeHQSCK3g4uUfvmjxnk4x4rQAJ0Ef3NZh'
        }
    });