export function getUser(name, users) {
    return users.find((user) => user.name === name); 
  }
