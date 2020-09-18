// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill or a downhill step. Gary's hikes start and end at sea level and each step up or down represents a unit change in altitude. We define the following terms:
// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through. For example, if Gary's path is, he first enters a valley  units deep. Then he climbs out an up onto a mountain  units high. Finally, he returns to sea level and ends his hike. It must return an integer that denotes the number of valleys Gary traversed.
// countingValleys function has the following parameter(s):
// n: the number of steps Gary takes
// s: a string describing his path
 // Print a single integer that denotes the number of valleys Gary walked through during his hike.
// function countingValleys(num, str){
//   var count = 0;
//   var vall = 0;
//     for(var i = 0; i < str.length; i++){
//       if(str[i] === "U"){
//         count++;
//       } else if(str[i] === "D"){
//         if(count === 0){
//           vall++;
//         }
//         count--;
//       }
//     }
//   return vall;
// }

// function countingValleys(num, str){
//   var alt = 0;
//   var vall = 0;
//     for(var i = 0; i < str.length; i++){
//       if(str[i] === "U"){
//         if(alt === -1){
//           vall++;
//         }
//         alt++;
//       } else if(str[i] === "D"){
//         alt--;
//       }
//     }
//   return vall;
// }

function countingValleys(num, str){
  var alt = 0;
  var vall = 0;
    for(var i = 0; i < str.length; i++){
      if(str[i] === "U"){
        alt++;
        if(alt === 0){
          vall++;
        }
      } else if(str[i] === "D"){
        alt--;
      }
    }
  return vall;
}
console.log(countingValleys(8, "UDDDUDUU"));//1
console.log(countingValleys(12, "DDUUDDUDUUUD"));//2
