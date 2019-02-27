const users = {
  frederik: {
    messages: []
  },
  wouter: {
    messages: []
  },
  samantha: {
    messages: []
  },
  jessy: {
    messages: []
  },
  pieter: {
    messages: []
  },
};

export function authenticate(e, cb) {
  const userNames = Object.keys(users);
  const user = e.target.username.value;
  fakeAuth.isAuthenticated = true
  
  if (userNames.indexOf(user) > -1) {
    cb(user);
  }
}

export const fakeAuth = {
    isAuthenticated: false,
    authenticate: authenticate,
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    },
    users: users
}