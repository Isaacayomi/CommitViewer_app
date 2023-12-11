import axios from 'axios';

//Define the API endpoint
export const fetchData = async () => {
    try { //the try and catch blocks are javascript's error-handling mechanism. They are used to handle potential erros that may occur in the code
        const response = await axios.get('https://api.github.com');
        return response.data; // Return the data from the response
    } catch (error) {
        console.error('Loading:', error);
        throw error; // Rethrow the error to let the calling component handle it
    }
};
