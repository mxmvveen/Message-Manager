const protocol = 'http://'
const apiBaseUrl = "localhost";
const apiPort = 8000;
const apiUri = `${protocol}${apiBaseUrl}:${apiPort}`;

export let userInfo;
export let userLoggedIn = false;

export let dataLoaded = false;

export function authenticate(e, cb) {
  const user = e.target.username.value;
    fetch(`${apiUri}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({user: user})
    })
    .then(res => res.json())
    .then(response => {
      if (response.user !== false) {
        userInfo = response;
        authService.isAuthenticated = true;
        cb();
      }
    })
    .catch(error => console.error('Error:', error));
}

export const loadData = () => {
  dataLoaded = true;
}

export const loginUser = () => {
    userLoggedIn = true;
}

export const saveNewMessage = data => {
  fetch(`${apiUri}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: userInfo.user,
      messages: data
    })
  })
  .then(res => res.json())
  .then(response => {
  })
  .catch(error => console.error('Error:', error));
}

export const authService = {
  isAuthenticated: false,
  authenticate: authenticate,
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};