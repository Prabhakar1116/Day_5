// Task_1
// Create a resume in JSON fromat
const resume = {
    "name": "Durai Prabhakar M",
    "age": 22,
    "email": "duraiprabhakar007@gmail.com",
    "phoneNumber": "+91-1234567890",
    "address": "Apartment 20 ,90 Bedford Street, Greenwich Village, NYC",
    "education": [
        {
            "class": "Tenth",
            "board": "SSLC",
            "school": "Geetha Matric Hr Sec School",
            "year": 2017
        },
        {
            "class": "Twelvth",
            "board": "SSLC",
            "school": "Geetha Matric Hr Sec School",
            "year": 2019
        },    
        {
            "degree": "Bachelors in Engineering",
            "course": "Computer Science",
            "college": "Holycross Engineering College",
            "year": 2019
        }
    ],
    "qualities": ["Team Worker", "Problem Solver", "Good Communicator","Enthusiastic"],
    "skills": ["HTML/CSS", "JavaScript", "Python", "NodeJS","Angular"],
    "projects": ["Online Library Management System", "Online Money Lender Application", "Online Voting System with FRS"]
};

const data = Object.entries(resume);

//  Task_2
// Using various tpyes of for loop

//(a) for loop
for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}

//(b) for...in loop
for (let key in data) {
    console.log(data[key]);
}
//(c) for...of loop
for (let [key, value] of data) {
    console.log(value);
}

//(d) forEach 
data.forEach(item => console.log(item));
