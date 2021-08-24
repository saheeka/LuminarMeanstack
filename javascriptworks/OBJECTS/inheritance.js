class Parent{
    m1(){
        console.log("inside parent m1()");
    }
}
class Subchild extends Parent{
    m2()
    {
        console.log("inside parent m2()");
    }
}
class Child extends Subchild{
    m3(){
        console.log("inside parent m3()");
    }
}

var child = new Child();
child.m3()
child.m2()
child.m1()
var subchild = new Subchild();
subchild.m2()
subchild.m1()