//task OBJECTS
// Creating an object person with properties
const Profile = {
    name: "Winners-Chukwuebuka",
    age: 20,
    location: "Auckland"
  };
console.log(Profile);

  // Printing and access
  console.log(Profile.name);      // Output: John
  console.log(Profile.age);       // Output: 25
  
  // Adding Objects
  Profile.Occupation = "Techie";              // Adding a new property using dot notation
  Profile["Hobby"] = "Watching Soccer";   // Adding a new property using bracket notation
  
  console.log(Profile);  // Output: { name: 'John', age: 26, location: 'California', gender: 'Male', occupation: 'Engineer' }
  