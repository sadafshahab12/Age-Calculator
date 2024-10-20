function ageCal() {
  let currYear = Number(document.querySelector(".curr-year").value);
  let birthYear = Number(document.querySelector(".birth-year").value);
  let ageResult = currYear - birthYear;
  let answer = document.getElementById("answer");
  answer.innerText = `The Age is: ${ageResult}`;
}
