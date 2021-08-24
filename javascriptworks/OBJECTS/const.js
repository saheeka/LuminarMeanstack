class person{
    constructor(name,age){
        this.age=age;
        this.name=name;
    }
    printPerson(){
        console.log(this.age,this.name);
    }
}
var person=new person(23,"ram");
  
person.printPerson();