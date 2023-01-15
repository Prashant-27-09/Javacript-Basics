 //creating obj
 var mouse = {
    name: "jerry",
    hand: 2,
    leg: 2,
    tails: 1,
    friend: "tom",
  };
  console.log(mouse);

  //change existing property
  mouse.friend = "perry";
  console.log(mouse);

  //add new property
  mouse["bark"] = "chik-chik";
  console.log(mouse);

  //delete  property
  delete mouse.tails;
  console.log(mouse);

  //array of obj
  var music = [
    { name: "arjit", song: "xyz" },
    { name: "sundhu", song: "abc" },
  ];
  console.log(music);