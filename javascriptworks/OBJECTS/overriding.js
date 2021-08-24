// class Parent{
//     phone(){
//         console.log("samsung galaxy a7");
//     }
// }
// class Child extends Parent{
//     phone(){
//         console.log("iphone");
//     }
// }
// var child =new Child();
// child.phone()

class Parent{
    phone(){
        console.log("samsung galaxy a7");
    }
}
class Child extends Parent{
    phone(){
        super.phone()
        console.log("iphone");
    }
}
var child = new Child();
child.phone();