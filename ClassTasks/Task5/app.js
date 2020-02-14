import {
  cohorts,
  courses,
  participationGrade,
  students,
  studyGroup
} from "./data.js";

// /* **********************************
//             TASK 1
// You are given the initial data for courses students and study Groups

// List out all the Study groups, courses a particular student has joined
// using student id ====> recq0dirEVVZFgmQT

//  **********************************/
// const joinedGroupsAndCourses = studyGroup.map(group => {
//     return {
//       student: students.filter(student => student.id === "recq0dirEVVZFgmQT"),
//       joinedStudyGroups: studyGroup.filter(
//         group => group.fields.studentId === "recq0dirEVVZFgmQT"
//       ),
//       joinedCourses: courses.filter(
//         course => course.fields.studentId === "recq0dirEVVZFgmQT"
//       )
//     };
// })
// console.log(joinedGroupsAndCourses);

// /* **********************************
//             TASK 2
// You are given the initial data for courses, students etc

// List out all the cohorts a particular student has joined
// using student id ====> recq0dirEVVZFgmQT

//  **********************************/

// const joinedCohorts = cohorts.filter(cohort => {
//   return {
//     joinedCohorts: cohort.fields.studentId === "recq0dirEVVZFgmQT"
//   };
// });

// console.log(joinedCohorts);

// /* **********************************
//             TASK 3
// You are given the initial data for courses, students etc

// List out the Course for a specific cohort
// cohortId =====> recgHAwgsPJqDMAUC

//  **********************************/

// const cohortCourses = courses.filter(course =>
//   course.fields.cohorts.includes("recgHAwgsPJqDMAUC")
// );
// console.log(cohortCourses);

// /* **********************************
//             TASK 4
// You are given the initial data for courses, students etc

// Find out which cohort has the particular studyGroup
// and then check if the student is enrolled in that cohort's course
// cohortId =====> recgHAwgsPJqDMAUC
// student id ====> recq0dirEVVZFgmQT

//  **********************************/

// const isEnrolled = cohorts
//   .filter(cohort => cohort.id === "recgHAwgsPJqDMAUC")
//   .map(prop => prop.fields.studentId === "recq0dirEVVZFgmQT")
//   .toString();
// console.log(isEnrolled);

// /* **********************************
//             TASK 5
// You are given the initial data for courses, students etc

// Check if a specific Cohort exist in a Course

// cohortId = "recgHAwgsPJqDMAUC"
// courseId = "aaaa-bbbb"

//  **********************************/

// let exists = courses
//   .filter(course => course.fields.id === "aaaa-bbbb")
//   .map(prop => prop.fields.cohorts.includes("recgHAwgsPJqDMAUC")).toString();

// console.log(exists);

// /* **********************************
//             TASK 6
// You are given the initial data for courses, students etc

// List out the participation grade for a specific student
// studentId = "recq0dirEVVZFgmQT"

//  **********************************/

// const participatedGrades = participationGrade.filter(
//   grade => grade.fields.studentId === "recq0dirEVVZFgmQT"
// );
// console.log(participatedGrades);

// /* **********************************
//             TASK 8

// Use the Data given above and find the eligible students based on criteria

// Criteria ====> Students grade must be above 95, should have atleast MERN in skills, and age must be above 20
//  **********************************/

//  const eligibleStudents = [
//    {
//      id: 1,
//      name: "Umair Ahmed",
//      profession: "Fullstack Developer and DevOps Engineer",
//      grade: 100,
//      age: 22,
//      skills: ["MERN", "DevOps", "GraphQL", "Apollo Client"]
//    },
//    {
//      id: 2,
//      name: "Asad Ikhlas",
//      profession: "Fullstack Developer and DevOps Engineer",
//      grade: 90,
//      age: 23,
//      skills: ["MERN", "GraphQL", "Apollo Client"]
//    }
//  ];
// const foundEligibleStudents = eligibleStudents.filter(student => student.grade > 95 && student.age > 20 && student.skills.includes("MERN"));

// console.log(foundEligibleStudents);

/* **********************************
            TASK 9
create an arrow function that takes in two arguments
1. State Object
2. Action

1. State object can include any property such as name age etc
but if no state is passed as an argument default state should be used
e.g const state = {
    name: "umair",
    age: 22
}

2. Action can be a simple object as well It should contain 2 properties
    a. Type
    b. data

e.g const action ={
    type: "UPDATE_USER_NAME",
    data: {
        name: "Asad"
    }
}

The arrow function's job is to take the state and check the action's type
and change the state based on action if any case matches (use switch statement)

HINT =====> Reducers in Redux

 **********************************/
const initialState = { name: "Arif", age: 23 };

const manageState = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER_NAME":
      return { ...state, name: action.data.name };
    case "UPDATE_AGE":
          return { ...state, age: action.data.age};
    default:
      return state;
  }
};

const state1 = { name: "Abid", age: 34 };
const action1 = {
  type: "UPDATE_USER_NAME",
  data: {
    name: "Asad"
  }
};

const state2 = { name: "farhan", age: 21 };
const action2 = {
  type: "UPDATE_AGE",
  data: {
    age: 24
  }
};

console.log(manageState(state1, action1));
console.log(manageState(state2, action2));
