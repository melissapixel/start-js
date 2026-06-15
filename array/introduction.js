let allowedExtensions = ['jpg', 'png', 'webp'];

console.log(allowedExtensions[1]);  // output 2-element
console.log(allowedExtensions[5]);  // not exist

let userRoles = ['guest', 'guest', 'moderator', 'admin'];
userRoles[0] = 'reg_user';          // change element
console.log(userRoles);