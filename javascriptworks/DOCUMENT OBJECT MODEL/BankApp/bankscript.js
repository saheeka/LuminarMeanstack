var person1 = { pname: "ram", account_number: 1000, balance: 2000, password: "userone" }
var person2 = { pname: "ram pj", account_number: 1001, balance: 5000, password: "usertwo" }
localStorage.setItem(person1.account_number, JSON.stringify(person1))
localStorage.setItem(person2.account_number, JSON.stringify(person2))

function getBalance(account_number) {
    if (account_number in localStorage) {
        let user = JSON.parse(localStorage.getItem(account_number))
        console.log(user.balance);
    }
    else {
        console.log("invalid account number");
    }
}
function authenticate(account_number, password) {
    if (account_number in localStorage) {
        let user = JSON.parse(localStorage.getItem(account_number))
        if (user.password == password && user.account_number == account_number) {
            console.log("login success");

        }
        else {
            console.log("invalid credentials");
        }

    }
    else {
        console.log("invalid account number");
    }
}
class Bank {
    createAccount() {
        let p_name = name.value;
        let account_number = acno.value;
        let balance = bal.value;
        let password = pwd.value;
        let user = {
            p_name, account_number, password, balance
        }
        localStorage.setItem(account_number, JSON.stringify(user))
        alert("Account has been created")
        location.href = "banklogin.html"
        console.log(user);
    }
    authenticate() {
        let account_number = acno.value;
        let password = pwd.value;
        if (account_number in localStorage) {
            let user = JSON.parse(localStorage.getItem(account_number))
            if (user.password == password) {
                alert("login success")
                sessionStorage.setItem(account_number, JSON.stringify(user))
                location.href = "bankhome.html"
            }
            else {
                alert("invalid credentials")
            }
        }
        else {
            alert("invalid account number")
        }
    }
    logout() {
        sessionStorage.clear();
        location.href = "banklogin.html"

    }

    getBalance(account_number) {
        let user = JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
        alert(`available balance is ${user.balance}`)
    }

    fundTransfer() {

        let amount = amt.value;
        let to_ano = toacno.value;
        if (to_ano in localStorage) {
            let user = JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
            if (user.balance >= amount) {
                let user1 = JSON.parse(localStorage.getItem(to_ano))
                let user2 = JSON.parse(localStorage.getItem(user.account_number))
                user1.balance += amount;
                user2.balance -= amount;
                localStorage.setItem(user1.account_number, JSON.stringify(user1))
                localStorage.setItem(user2.account_number, JSON.stringify(user2))
                user.balance -= amount;
                sessionStorage.setItem(user.account_number, JSON.stringify(user))
            }
            else {
                alert("insufficient balance")
            }
        }
        else {
            alert("transaction failed")
        }
    }
}

var bank = new Bank()
