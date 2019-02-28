let userNames;
export let loggedInUser;
const protocol = 'http://'
const apiBaseUrl = "localhost";
const apiPort = 8000;
const apiUri = `${protocol}${apiBaseUrl}:${apiPort}`;

export const getUsers = () => {
  fetch(`${apiUri}/getUsers`)
    .then(response => response.json())
    .then(data => userNames = data);
}

export function authenticate(e, cb) {
  const user = e.target.username.value;

  if (userNames.indexOf(user) > -1) {
    authService.isAuthenticated = true;
    loggedInUser = user;
    cb(user);
  }
}

export const authService = {
  isAuthenticated: false,
  authenticate: authenticate,
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};