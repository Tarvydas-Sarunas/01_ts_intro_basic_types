// galime aprasyti suteikti pravarde(aliass) bet kokiam tipui

type User = {
  id: number;
  name: string;
  isAdmin: boolean;
}


const user1: User = {
  id: 1,
  name: 'James',
  isAdmin: true
}


const usersArr: User[] = [];

function userInfo(userObj: User) {
  // userObj.name
  const rez = `${userObj.name} is ${userObj.isAdmin ? '' : 'not '}Admin `
  console.log('rez ===', rez);
  // userObj.name is Admin
  // userObj.name is not Admin
}

const user3: User = {
  id: 3,
  name: 'Petras',
  isAdmin: false,
}

export {}