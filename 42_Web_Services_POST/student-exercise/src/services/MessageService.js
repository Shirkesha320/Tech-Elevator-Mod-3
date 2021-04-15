import axios from 'axios';

const http = axios.create({
  baseURL: "http://localhost:3000"
});

export default {

  get(id) {
    return http.get(`/messages/${id}`);
  },

  addMessage(message) {
    return http.post('/messages', message);
  },

  update(messageID, message) {
    return http.put(`/messages/${messageID}`, message);
  },

   deleteSpecificMessage(id) {
    return http.delete(`/messages/${id}`);
   }
 
  
 
}
