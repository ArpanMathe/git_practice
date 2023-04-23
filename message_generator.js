const subjects = [
    "Yourself",
    "Your friend",
    "Your family",
    "Your pet",
    "Your boss",
  ];
  
  const verbs = [
    "needs",
    "deserves",
    "wants",
    "requires",
    "should have",
  ];
  
  const objects = [
    "love",
    "support",
    "kindness",
    "understanding",
    "patience",
  ];


function message_genrator(){
    let ran = (Math.ceil(Math.random()*5)-1)
    // console.log(ran)
    output = (subjects[ran]+ " " + verbs[ran] + " " + objects[ran])

    return output
}

console.log(message_genrator())