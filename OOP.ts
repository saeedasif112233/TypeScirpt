class Person {

    Name: string
    Age:number
    Gender:number

    constructor (Name:string,Age:number, Gender : number){
        this.Name=Name;
        this.Age=Age;
        this.Gender=Gender;
    }
    speak(){
        console.log(`${this.Name} is Speaking`)
    }

}
class Teacher extends Person{
      subject : string
      Exp : number



      constructor (Name:string,Age:number, Gender : number,subject:string , Exp:number ){

    super(Name,Age, Gender)
    this.Exp = Exp;
    this.subject=subject;
      }
      speak(){
        console.log(`${this.Name} is Speaking`)
    }
}

const person = new Person ("Saeed",18,1)

console.log(person.Age)

person.speak();

const teacher = new Teacher("Waheed",17,1,"Math",4)
teacher.speak();
