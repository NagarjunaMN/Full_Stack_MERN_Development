const bcrypt = require('bcryptjs')

let password = "abc12345"

let hased_code = bcrypt.hashSync(password,1)
console.log(hased_code)

let comared = bcrypt.compareSync("lollfjhfkjerht",hased_code)
console.log(comared)