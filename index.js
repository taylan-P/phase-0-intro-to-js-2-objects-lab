// Write your solution in this file!
const employee = {
 name:"Adam",
 streetAddress:"55 twilightway"
};
function updateEmployeeWithKeyAndValue(employee,streetAddress){
    const newEmployee ={...employee} ;
    newEmployee[streetAddress] = '11 Broadway'
    return newEmployee
   
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,streetAddress){
    employee[streetAddress] = '12 Broadway';
    return employee
}

function deleteFromEmployeeByKey(employee,name){
  
  const tempEmployee ={...employee} ;

  delete tempEmployee.name;
  return tempEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee,name){
  
  
    delete employee.name;
    return employee
  }