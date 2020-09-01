//import the axios HTTP client to communicate with the API
import axios from 'axios';
//import JeopardyService from "../jeopardyService/JeopardyService";
class JeopardyService {
    constructor() {
        this.url = 'http://jservice.io/api/random?count=3';
        this.client = axios.create();

    }
    getQuestion() {
        return this.client.get(this.url);

    }
}
export default JeopardyService;