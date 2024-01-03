const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

const { use } = require("../routes/user.router");
const user_DB_path = "./src/dal/user.json";

async function getUserDB() {
  const buffer = await fs.promises.readFile(user_DB_path);
  const userDB = JSON.parse(buffer);
  return userDB;
}
/**
 *
 * @param {string} id
 * @returns {Promise<user>}
 */

async function findUserBiId(id) {
  const userDB = await getUserDB();
  const user = userDB.find((u) => u.id == id);
  return user;
}

async function getUsers() {
  const userDB = await getUserDB();
  return userDB;
}

async function searchUser(text) {
  const userDB = await getUserDB();
  const user = userDB.filter(
    (d) => d.firstName.includes(text) || d.lastName.includes(text)
  );
  return user;
}
async function saveDB(userArr) {
  const buffer = JSON.stringify(userArr);
  await fs.promises.writeFile(user_DB_path, buffer);
}

async function deleteUser(userId) {
  const userDB = await getUserDB();
  const userDelete = userDB.findIndex((u) => u.id == userId);

  if (userDelete === -1) {
    return false;
  }
  userDB.splice(userDelete, 1);
  try {
    await saveDB(userDB);
  } catch (e) {
    return false;
  }
  return true;
}


async function emailExists(email){
    const DB = await getUsers()
    return !!DB.find(u => u.email === email)
}

async function createUser(user){
    const userWithId = {...user, id: uuidv4()}
    const DB = await getUsers()
    DB.push(userWithId)
    saveDB(DB)
}


module.exports = {
  findUserBiId,
  getUsers,
  searchUser,
  deleteUser,
  createUser,
  emailExists,
};
