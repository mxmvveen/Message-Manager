export let users = {};
export let loggedInUser;
const apiBaseUrl = "http://localhost";
const apiPort = 8000;
const apiUri = `${apiBaseUrl}:${apiPort}`;

export const getUsers = () => {
  const result = fetch(apiUri)
    .then(response => response.json())
    .then(data => {
      users = data.users;
      return users;
    }).catch(err => {
      throw err;
    });

  return result;
};

export function authenticate(e, cb) {
  const userNames = Object.keys(users);
  const user = e.target.username.value;

  if (userNames.indexOf(user) > -1) {
    fakeAuth.isAuthenticated = true;
    loggedInUser = user;
    cb(user);
  }
}

export const fakeAuth = {
  isAuthenticated: false,
  authenticate: authenticate,
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

