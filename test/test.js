// function solution(babbling) {
//   let babblingWord = ["aya", "ye", "woo", "ma"];
//   let babbleArray = [];

//   for (let i = 0; i < babbling.length; i++) {
//     let babble = babbling[i].toString();
//     let filter = babble.replace(babblingWord[0], "");
//     let filter1 = filter.replace(babblingWord[1], "");
//     let filter2 = filter1.replace(babblingWord[2], "");
//     let filter3 = filter2.replace(babblingWord[3], "");
//     babbleArray.push(filter3);
//   }
//   let filterArray = babbleArray.filter((blank) => blank == "");
//   var answer = filterArray.length;
//   return babbleArray;
// }

// console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));

function solution(hp) {
  var answer = 0;
  if (hp >= 5) {
    answer += Math.floor(hp / 5);
    hp = hp % 5;
  }
  if (hp >= 3) {
    answer += Math.floor(hp / 3);
    hp = hp % 3;
  }
  if (hp >= 1) {
    answer += hp / 1;
  }
  return answer;
}

console.log(solution(23));
