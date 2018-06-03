var Student=require("./Student");
console.log(Student.a);//0
console.log(Student.b);//lili
console.log(Student.c());//0 'lili'
//0


var s=new Student('lili',10,'201201');
s.show();//I am lili,10,my id is 201201

