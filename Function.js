 //stand in line (queue)
 function queue(arr, newvalue) {
    arr.push(newvalue);
    arr.shift();
    return arr;
  }
  var arr = [1, 2, 3, 4, 5];
  console.log(queue(arr, 6));

  //card function
  var count = 0;
  function cc(card) {
    switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++;
        break;
      case 10:
      case "J":
      case "K":
      case "Q":
      case "A":
        count--;
        break;
    }
    var hold = "hold";
    if (count > 0) hold = "bet";
    return count + " " + hold;
  }
  console.log(cc(2));
  console.log(cc("j"));
  console.log(cc("k"));

  //random function
  function fxn1() {
    return Math.random();
  }
  console.log(fxn1());

  //random function between 0 to 9
  function example() {
    return Math.floor(Math.random() * 10);
  }
  console.log(example());

  //random function between 0 to 20
  function fxn2() {
    return Math.floor(Math.random() * 20);
  }
  console.log(fxn2());

  //random function between range
  function fxn(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  console.log(fxn(5, 15));

  //freez fxn
  function freezobj() {
    const math_cionst = {
      pi: 3.14,
    };
    Object.freezobj(math_cionst);
  }

  //annonumus fxn
  var x = function () {
    console.log("annonumus fxn");
  };
  x();

  //Arrow fxn
  var x = (parameter) => parameter + 8;
  console.log(x(8));