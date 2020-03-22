import axios from "axios";

// import { APIhandler } from "./method";
import { api_response } from "./common";

const apiBaseUrl = process.env.REACT_APP_SERVER_URL;

const APICaller = ({
  method = "get",
  reqUrl,
  data = {},
  headers = {
    "content-type": "application/json",
    Accept: "application/json"
  }
}) => {
  return new Promise(async (resolve, reject) => {
    let url = `${apiBaseUrl}${reqUrl}`;
    // console.log(url, "data", data, "method", method, "header", headers);
    let options = {
      method,
      url,
      data,
      headers
    };
    if (method.toLowerCase() === "get") delete options["data"];
    axios({ ...options })
      .then(response => {
        // console.log("%c{res}", "color: green", " => ", response); // eslint-disable-line no-console
        response =
          response.data && response.data.articles
            ? response
            : { data: api_response };
        resolve(response);
      })
      .catch(error => {
        resolve({ data: api_response });
        // reject(error);
      });
  });
};

export default APICaller;
// export default APIhandler;
