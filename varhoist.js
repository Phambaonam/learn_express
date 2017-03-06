function demo_var() {
  var a = 2;
  if (true) {
    var a = 10;
  }
  console.log(a);
}

function demo_let() {
  let a = 2;
  if (true) {
    let a = 10;
  }
  console.log(a);
}
demo_var();
demo_let();