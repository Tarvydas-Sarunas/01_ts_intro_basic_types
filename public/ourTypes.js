// galime aprasyti suteikti pravarde(aliass) bet kokiam tipui
const user1 = {
    id: 1,
    name: 'James',
    isAdmin: true
};
const usersArr = [];
function userInfo(userObj) {
    // userObj.name
    const rez = `${userObj.name} is ${userObj.isAdmin ? '' : 'not '}Admin `;
    console.log('rez ===', rez);
    // userObj.name is Admin
    // userObj.name is not Admin
}
const user3 = {
    id: 3,
    name: 'Petras',
    isAdmin: false,
};
export {};
