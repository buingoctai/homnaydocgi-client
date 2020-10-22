const allDevelop = {
  API_BASE: "http://localhost:8080",
  REACT_APP_URL: "${REACT_APP_URL}",
};

const develop = {
  API_BASE: "https://homnaydocgi-api.herokuapp.com",
  REACT_APP_URL: "${REACT_APP_URL}",
};

const pro = {
  API_BASE: "https://homnaydocgi-api.herokuapp.com",
  REACT_APP_URL: "https://homnaydocgi.herokuapp.com",
};

const dev = process.env.REACT_APP_STAGE === "allDev" ? allDevelop : develop;
const config = process.env.REACT_APP_STAGE === "pro" ? pro : dev;

export default {
  ...config,
};
