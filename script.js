//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}

	getter(){
		return this.name;
	}

	setter(age){
		this.age=age;
	}
}

class Student extends Person {
	function study(){
		console.log(getter()+"is studying");
	}
}

class Teacher extends Person {
	function teach(){
		console.log(getter()+"is teaching")
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
