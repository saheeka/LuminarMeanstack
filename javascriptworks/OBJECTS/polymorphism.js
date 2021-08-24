class calculation{
    add(){
        console.log("inside no argument method");
    }
    add(num1){
        console.log("inside single arg method");
    }
    add(num1,num2){
        console.log("inside two arg method");
    }
}
 var calc=new calculation()
 calc.add(12,43);
 calc.add(80)
 calc.add()