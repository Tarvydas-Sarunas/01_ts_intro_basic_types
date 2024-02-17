const user1 = {
  id: 1,
  name: 'James',
  isAdmin: true
}

user1.isAdmin = false

// user1.town = 'London'  // sitaip negalime

const user2 = {
  id: 2,
  name: 'Jane',
  isAdmin: true
}

function userInfo(userObj: {
  id: number;
  name: string;
  isAdmin: boolean;
}) {
  // userObj.name
  const rez = `${userObj.name} is ${userObj.isAdmin ? '' : 'not '}Admin `
  console.log('rez ===', rez);
  // userObj.name is Admin
  // userObj.name is not Admin
}
userInfo(user2)
userInfo(user1)