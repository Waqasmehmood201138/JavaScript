
const person = [
    {
        id : 1,
        name : "waqas",
        age : 18,
        gpa : 3.5,
        gender : "male",
        courses : ["c++" , "java" , "python"],
        isPass: true,
        address : {

            tehsil : "jehangira",
            district : "nowshera"
        }
    },
    {
        id : 2,
        name : "babar",
        age : 22,
        gpa : 3.5,
        gender : "male",
        courses : ["c++" , "java" , "python"],
        isPass: true,
        address : {

            tehsil : "jamrud",
            district : "peshawaar"
        }
    },
    {
        id : 3,
        name : "rauf",
        age : 21,
        gpa : 3.5,
        gender : "male",
        courses : ["c++" , "java" , "python"],
        isPass: false,
        address : {

            tehsil : "terah",
            district : "terah"
        }
    },
    {
        id : 4,
        name : "kabir",
        age : 23,
        gpa : 3.5,
        gender : "male",
        courses : ["c++" , "java" , "python"],
        isPass: false,
        address : {

            tehsil : "dara adam khel",
            district : "peshawar"
        }
    },
   
]

for (let i=0; i<person.length; i++){

    if(person[i].id === 4){

        console.log(person[i].name)

        for (let j=0; j<person[i].courses.length; j++){

            console.log(person[i].courses[j])
            
        }
    }
  
    }
