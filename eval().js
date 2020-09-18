// The eval(..) function in JavaScript takes a string as an argument, and treats the contents of the string as if it had actually been authored code at that point in the program.
// this code actually creates variable b inside of foo(..) that shadows the b that was declared in the outer (global) scope.
// When the console.log(..) call occurs, it finds both a and b in the scope of foo(..), and never finds the outer b. Thus, we print out "1 3" instead of "1 2" as would have normally been the case.
// function foo(str, a){
//   eval(str);//cheating!
//   console.log(a, b);
// }
// var b = 2;
// foo("var b = 3;", 1);//1 2


 function foo(obj) {
 	with (obj) {
 		a = 2;
 	}
 }

 var o1 = {
 	a: 3
 };

 var o2 = {
 	b: 3
 };

 foo( o1 );
 console.log( o1.a ); // 2

 foo( o2 );
 console.log( o2.a ); // undefined
 console.log( a ); // 2 -- Oops, leaked global!
//  In this code example, two objects o1 and o2 are created. One has an a property, and the other does not. The foo(..) function takes an object reference obj as an argument, and calls with (obj) { .. } on the reference. Inside the with block, we make what appears to be a normal lexical reference to a variable a, an LHS reference in fact (see Chapter 1), to assign to it the value of 2.
// When we pass in o1, the a = 2 assignment finds the property o1.a and assigns it the value 2, as reflected in the subsequent console.log(o1.a) statement. However, when we pass in o2, since it does not have an a property, no such property is created, and o2.a remains undefined.
// But then we note a peculiar side-effect, the fact that a global variable a was created by the a = 2 assignment. How can this be?
// The with statement takes an object, one which has zero or more properties, and treats that object as if it is a wholly separate lexical scope, and thus the object's properties are treated as lexically defined identifiers in that "scope".
