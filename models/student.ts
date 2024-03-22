export class Student{
    firstname: string;
    lastname: string;
    age: number;
    grade: number;

    constructor(firstName: string, lastName:string, age: number, grade: number){
        this.firstname = firstName;
        this.lastname = lastName;
        this.age = age;
        this.grade = grade;
    }

    public getFullName(){
        return this.firstname + ' ' + this.lastname;
    }

    public getAge(){
        return this.age;
    }

    public getGrade(){
        return this.grade;
    }

    public setGrade(newGrade: number){
        this.grade = newGrade;
    }
}