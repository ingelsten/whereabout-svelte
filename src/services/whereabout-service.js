import axios from "axios";
import {user} from "../stores";

export class WhereaboutService {
  // baseUrl = "https://obscure-refuge-81832.herokuapp.com";

  constructor(baseUrl) {
    console.log("HELLO");
    this.baseUrl = "http://localhost:4000";
    console.log(this.baseUrl);
    const whereaboutCredentials = localStorage.whereabout;
    if (whereaboutCredentials) {
      const savedUser = JSON.parse(whereaboutCredentials);
      user.set({
        email: savedUser.email,
        token: savedUser.token,
      });
      axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
    }
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          email: email,
          token: response.data.token,
        });
        localStorage.whereabout = JSON.stringify({email: email, token: response.data.token});
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async logout() {
    user.set({
      email: "",
      token: "",
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("whereabout");
  }

  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      await axios.post(this.baseUrl + "/api/users", userDetails);
      return true;
    } catch (error) {
      return false;
    }
  }

  async donate(whereabout) {
    try {
      const response = await axios.post(this.baseUrl + "/api/employees/" + whereabout.employee + "/whereabouts", whereabout);
      return response.status == 200;
    } catch (error) {
      return false;
    }
  }

  async getEmployees() {
    try {
      const response = await axios.get(this.baseUrl + "/api/employees");
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getWhereabouts() {
    try {
      const response = await axios.get(this.baseUrl + "/api/whereabouts");
      return response.data;
    } catch (error) {
      return [];
    }
  }
}
