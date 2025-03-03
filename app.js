function bubbleSort(arr, order = "asc") {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (
                (order === "asc" && arr[j] > arr[j + 1]) ||
                (order === "desc" && arr[j] < arr[j + 1])
            ) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let numbers = [5, 2, 9, 1, 5, 6];
console.log(bubbleSort(numbers, "asc"));
console.log(bubbleSort(numbers, "desc")); 



// db.js  faylidagi mashq

const students = [
    { name: "Ali", age: 20, gender: "male", subjects: ["Math", "Physics"] },
    {
      name: "Zarina",
      age: 21,
      gender: "female",
      subjects: ["English", "History"],
    },
    {
      name: "Bekzod",
      age: 22,
      gender: "male",
      subjects: ["Biology", "Chemistry"],
    },
    {
      name: "Gulnora",
      age: 19,
      gender: "female",
      subjects: ["Math", "Informatics"],
    },
    { name: "Iskandar", age: 23, gender: "male", subjects: ["Physics", "Math"] },
    {
      name: "Suhrob",
      age: 20,
      gender: "male",
      subjects: ["Geography", "History"],
    },
    { name: "Madina", age: 21, gender: "female", subjects: ["English", "Art"] },
    {
      name: "Sardor",
      age: 19,
      gender: "male",
      subjects: ["Informatics", "Math"],
    },
    {
      name: "Malika",
      age: 22,
      gender: "female",
      subjects: ["Biology", "History"],
    },
    { name: "Shokir", age: 20, gender: "male", subjects: ["Chemistry", "Math"] },
    {
      name: "Alisher",
      age: 21,
      gender: "male",
      subjects: ["Physics", "History"],
    },
    { name: "Nigora", age: 19, gender: "female", subjects: ["English", "Art"] },
    {
      name: "Sherzod",
      age: 22,
      gender: "male",
      subjects: ["Math", "Informatics"],
    },
    {
      name: "Dilshod",
      age: 23,
      gender: "male",
      subjects: ["Physics", "Geography"],
    },
    { name: "Yulduz", age: 20, gender: "female", subjects: ["Art", "History"] },
    { name: "Xurshid", age: 21, gender: "male", subjects: ["Math", "Physics"] },
    {
      name: "Feruza",
      age: 19,
      gender: "female",
      subjects: ["Biology", "English"],
    },
    {
      name: "Abdulloh",
      age: 22,
      gender: "male",
      subjects: ["Geography", "Math"],
    },
    {
      name: "Shahnoza",
      age: 20,
      gender: "female",
      subjects: ["Informatics", "Physics"],
    },
    { name: "Zokir", age: 23, gender: "male", subjects: ["Math", "Biology"] },
  ];

  const filteredAge = students.filter(student => student.age >= 21);
console.log(filteredAge);

const inglizQizlar = students.filter(student => 
    student.gender === "female" && student.subjects.includes("English")
);
console.log(inglizQizlar);

const filteredByChemistry = students.filter(student => 
    student.subjects.includes("Chemistry")
);
console.log(filteredByChemistry);

students.push({ name: "Vali", age: 25, gender: "male", subjects: ["Math"] });
console.log(students);

function findStudent(targetStudent) {
    return students.find(student => 
        student.name === targetStudent.name &&
        student.age === targetStudent.age &&
        student.gender === targetStudent.gender &&
        JSON.stringify(student.subjects) === JSON.stringify(targetStudent.subjects)
    );
}

const suhrob = { name: "Suhrob", age: 20, gender: "male", subjects: ["Geography", "History"] };

console.log(findStudent(suhrob));




