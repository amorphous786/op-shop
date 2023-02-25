import bcrypt from 'bcryptjs'
const users = [
  {
    name:"Luffy",
    email: "luffy@onepiece.com",
    password:bcrypt.hashSync('12345',10),
    isAdmin:true
  },
  {
    name:"zoro",
    email: "zoro@onepiece.com",
    password:bcrypt.hashSync('12345',10),
  },
  {
    name:"Nami",
    email: "nami@onepiece.com",
    password:bcrypt.hashSync('12345',10),
  },
  {
    name:"Ussop",
    email: "ussop@onepiece.com",
    password:bcrypt.hashSync('12345',10),
  },
  {
    name:"Sanji",
    email: "sanji@onepiece.com",
    password:bcrypt.hashSync('12345',10),
  },
  {
    name:"Chopper",
    email: "chopper@onepiece.com",
    password:bcrypt.hashSync('12345',10),
  },
  {
    name:"Robin",
    email: "robin@onepiece.com",
    password:bcrypt.hashSync('12345',10),
  }
]
export default users