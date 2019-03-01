const protocol = 'http://'
const apiBaseUrl = "localhost";
const apiPort = 8000;
const apiUri = `${protocol}${apiBaseUrl}:${apiPort}`;

export let userInfo;
export let userLoggedIn = false;

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


export const getUserMessages = () => {
    userLoggedIn = true;
}

export const authService = {
  isAuthenticated: false,
  authenticate: authenticate,
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};