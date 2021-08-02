//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  students = {};
  
  roster() {
    let keys = Object.keys(this.students);
    let sortedObj = keys.reduce((sortObj, key) => {
      sortObj[key] = this.grade(key);
      return sortObj; 
    }, {}); 
    return sortedObj;
  }
  // en el spect el valor esta al revesd
  add(name, grade) { 
    // let grades = Object.keys(this.students);    
    let isNameExist = false;
    // grades.forEach((currentGrade) => { 
    //   if(this.students[currentGrade].includes(name)) {
    //     isNameExist = true;
    //   }
    // }); 
    for(let currentGrade in this.students){
        if(this.students[currentGrade].includes(name)){
          isNameExist = true;
        }
    }
    if(!isNameExist){  
      if(grade in this.students) {
        this.students[grade].push(name); 
      }
      else {
        this.students[grade] = [name];
      }
    }
  }

  grade(grade) {
      if(grade in this.students) {
        return [...this.students[grade]].sort();
      }
      else {
        return [];
      }
  }
}
