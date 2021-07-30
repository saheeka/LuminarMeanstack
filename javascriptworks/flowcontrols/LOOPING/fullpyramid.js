//let n = 5; // you can take input from prompt or change the value

// External loop
for (let i = 1; i <= 4; i++) {
  let str = "";
  // printing spaces
  for (let j = 4; j >i; j--) {
    str += " ";
  }
  // printing star
  for (let k = 1; k <= i; k++) {
    str += "*";
  }
  console.log(str);
}
