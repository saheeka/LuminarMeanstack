class bank
{

    account={
        1000:{acno:1000,user_name:"userone",password:"username"}
    }
    accountCreate(acno,ac_type,balance)
    {
        this.acno=acno;
        this.ac_type=ac_type;
        this.balance=balance;
    }
    deposit(amount)
    {
        this.balance+=amount;
        console.log(`your account number${this.acno} has been credited with ${amount} avl balance ${this.balance}`);

    }
    balEnquiry()
    {
        console.log(`your avl balance is ${this.balance}`);

    }
    withdrawal(amount)
    {
        if(this.balance>amount)
        {
            this.balance-=amount;
        }
        else{
            console.log("insufficient balance transaction");
        }
    }

}
var obj=new bank();
obj.accountCreate(1000,"savings",5000)
obj.deposit(20000)