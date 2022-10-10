function solution(my_string) {
  var answer = "";
  for (let i of my_string) {
    if (i === i.toUpperCase()) {
      answer += i.toLowerCase();
    } else if (i === i.toLowerCase()) {
      answer += i.toUpperCase();
    }
  }
  return answer;
}

console.log(solution("AcccCCC"));
