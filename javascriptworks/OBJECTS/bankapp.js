class bank{

    account_details={
    1000:{acno:1000,balance:2000,username:"userone",password:"userone"},
    1001:{acno:1001,balance:3000,username:"usetwo",password:"usertwo"},
    1002:{acno:1002,balance:2002,username:"userthree",password:"userthree"},
    1003:{acno:1003,balance:20000,username:"userfour",password:"userfour"},

}
 session={};

accountCreate(acno,balance,username,password)
{
    this.account_details[acno]={acno:acno,balance:balance,username:username,password:password}
    console.log("account created");
    console.log(this.account_details);
}


authenticate(ac_number,username,password)
{
    if(ac_number in this.account_details)
    {
        if(this.account_details[ac_number].username==username)
        {
            if (this.account_details[ac_number].password==password)
            {
                console.log("login success");
                this.session["user"]=ac_number
            }
            else{
                console.log("invlaid password");
            }
        }
        else{
            console.log("invalid username");
        }
    }
    else{
        console.log("invalid account number");
    }
}

fundTransfer(from_acno,to_acno,amount)
{
    if(from_acno==this.session["user"])
    {
        if(to_acno in this.account_details)
        {
            if(this.account_details[from_acno].balance>amount)
            {
                this.account_details[to_acno].balance+=amount;
                this.account_details[from_acno].balance-=amount;
                console.log(`your account ${from_acno} is debited with amount ${amount} avl balance
                is ${this.account_details[from_acno].balance}`);
            }
            else{
                console.log("insufficient balance");
            }
        }
        else
        {
            console.log("invalid account number");
        }
    }
    else{
        console.log("invalid session: you must log in to transact");
    }
}
balEnquiry()
{
    if("user" in this.session)
    {
        console.log(`your account balance is ${this.account_details[this.session["user"]].balance}`);
        }

}
}
var obj=new bank()
//obj.accountCreate(1004,2000,"userfive","userfive")
obj.authenticate(1000,"userone","userone")
obj.fundTransfer(1000,1001,500)
obj.balEnquiry()