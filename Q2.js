// Developed by Murat OZENC Feb 25 2023

// Create the object as requested (key-value pairs)
const baseObject = {
    name: "Murat",
    company: "",
    country: "Turkey"
  };
  
  // Create a copy of baseObject
  const copyOfBaseObject = { ...baseObject };
  
  // Manipulate the baseObject
  copyOfBaseObject.company = "DECENOMY";
  
  // Iterate with using a for-in loop
  console.log("Using for-in loop");
  for (let key in copyOfBaseObject) {
    console.log(key + ": " + copyOfBaseObject[key]);
  }
  
  // Iterating with using Object.keys & forEach
  console.log("\nUsing Object.keys & forEach");
  Object.keys(copyOfBaseObject).forEach(key => {
    console.log(key + ": " + copyOfBaseObject[key]);
  });
  