//import the axios HTTP client to communicate with the API
import axios from 'axios';
//import JeopardyService from "../jeopardyService/JeopardyService";
class JeopardyService {
    constructor(url = 'http://jservice.io/api/random', client = axios.create()){
        this.url = url;
        this.client = client;
    }
    getQuestion(){
        return this.client.get(this.url);
    }
    getQuestionArray(){
      return this.client.get(this.url + "?count=5");
  }
  getQuestions(categoryNumber){
    return this.client.get("http://jservice.io/api/clues?category=" + categoryNumber);
}
}
export default JeopardyService;