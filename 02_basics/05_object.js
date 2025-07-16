//api 
const course = {
    coursename :"js in kashmir",
    price :"333",
    teacher:"Khan"
}

console.log(course.teacher);


const {teacher}  = course; // it good practice 
const {teacher:tea} = course;
console.log(tea);// same output
console.log(teacher);

//Now let move to the api concept
//first time it was coming in the xml files now its coming in json

// {
//     name:"hitesh",
//     coursName:"js in kahsmir",
//     price:"free"
// }it just json format 


[
    {},
    {},
    {},
    {}
]