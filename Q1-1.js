// Developed by Murat OZENC Feb 25 2023

function scopeTest() {
    var name = 'Murat';
    if (true) {
      var company = 'DECENOMY';
      let country = 'Turkiye';
    }

    // Outputs should be like this...
    console.log(name); // Murat
    console.log(company); // DECENOMY
    console.log(country); // Uncaught ReferenceError: country is not defined
  }