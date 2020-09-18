// Write a function called transformEmployeeData that transforms some employee data from one format to another.
function transformEmployeeData(employeeData) {
  var object = {};
    for(var i = 0; i < employeeData.length; i++){
      for(var j = 0; j < employeeData[i].length; j++){
        for(var k = 0; k < employeeData[i][j].length; k++){
          object[employeeData[i][j][0]] = employeeData[i][j][k];
        }
      }
    }
    return [object];

}

var input = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];
console.log(transformEmployeeData(input));
// var result = [
//     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]
