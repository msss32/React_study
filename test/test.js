function solution(numbers, num1, num2) {
  var answer = numbers.splice(num1, num2);
  return answer;
}

console.log(solution([1, 2, 3, 4, 5], 4, 7));
