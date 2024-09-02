let box1 = document.getElementById("first-box");
let box2 = document.getElementById("second-box");
let main = document.getElementById("main-div");
let lifecount = document.getElementById("lifevalue");
let result = document.getElementById("resultdiv");
let ballsleft = document.getElementById("ballsleft");
let wicketsleft = document.getElementById("wicketsleft");
let secondinnings = document.getElementById("second");
let resultbody = document.getElementById("resultbody");
let reducedtarget = document.getElementById("reducedtarget");
let reducedtargetvalue = document.getElementById("reducedtargetvalue");
let isGameOver = false;
let resetbutton = document.getElementById("second");
let targetdiv = document.getElementById("targetdiv");
let secondinningsbutton = document.getElementById("second1");
let secondbutton1 = document.getElementById("second2");
let extras = document.getElementById("extras");
let headortail = document.getElementById("headortail");
let tosssection = document.getElementById("toss-section");
let batsection = document.getElementById("batsection");
let playareasection = document.getElementById("complete-div");
let overlay = document.getElementById("overlay")
// let overlay1 = document.getElementById("overlay1")
// let overlay1input = document.getElementById("overlay1-input")
// let overlay1btn = document.getElementById("overlay1btn")
let message = document.getElementById("message")
tosssection.className = "toss-section";

count = 0;
life = 10;
balls = 0;
totalscore = 0;
totalballscount = 0;
totalballs = 60;
Fourcount = 0;
Sixcount = 0;
freeruns = 0;
overlaycount = 0

function handlenumber(value) {
  
  if (isGameOver) {
    return;
  }

  totalballs--;
  ballsleft.innerText = totalballs;
  balls++;
  let box2value = Math.floor(Math.random() * 6) + 1;
  buttontext = value;
  buttonvalue = parseInt(buttontext);

  if (innings == 1) {
    if (buttonvalue == 4) {
      Fourcount++;
    }

    if (buttonvalue == 6) {
      Sixcount++;
    }

    count = count + buttonvalue;
    totalscore = totalscore + buttonvalue;

    box1.innerText = buttontext;
    box2.innerText = box2value;

    if(buttonvalue != box2value)
      {        
      if((count>=50 && count<=55) && overlaycount ==0)
      {
        overlay.style.display = "inline-block"
        message.innerText = "congratulation you score 50 runs"
        overlaycount++
      }
      if(count>55 && count<=99)
        {
        overlaycount = 0
      }

      if((count>=100 && count<=105) && overlaycount ==0)
        {
        overlay.style.display = "inline-block"
        message.innerText = "congratulation you score 100 runs"
        overlaycount++  
      }
      if(count>105 )
        {
        overlaycount = 0
      }
    }


    if (life == 0 || totalballs == 0) {
      if (buttonvalue != box2value) {

        finalscore = `${totalscore}`;
        let playername = prompt("enter player name");

        strikerate = ((count / balls) * 100).toFixed(0);

        createtable(playername, count, balls, Fourcount, Sixcount, strikerate);

        reducedtarget.style.display = "inline-block";
        runstowin = finalscore;
        reducedtargetvalue.innerText = finalscore;

        secondinningsbutton.style.display = "inline-block";
        isGameOver = true;

        resultdisplay(finalscore);

      }
    }


    if (buttonvalue == box2value) {
      overlaycount = 0
      let playername = prompt("enter player name");
      // let arr = [
      //   "Chris Gayle","Gill","Virat Kohli","Rohit Sharma","Kane Williamson","Steve Smith","Joe Root","Ben Stokes","AB de Villiers","Rishabh Pant","KL Rahul","Aiden Markram","Sunil Narine", "Mohammad Rizwan","Babar Azam"
      // ]

      // let playername = arr[Math.floor(Math.random()*16)]
      
      if (buttonvalue == 4) {
        Fourcount--;
      }

      if (buttonvalue == 6) {
        Sixcount--;
      }

      if(playername.trim() === ''){
        count = count - `${buttonvalue}`;
        totalscore = totalscore - `${buttonvalue}`;
  
        strikerate = ((count / balls) * 100).toFixed(0);
  
        finalscore = `${parseInt(totalscore)}`;
        alert("enter name")
        let playername = prompt("enter player name");
        createtable1(playername, count, balls, Fourcount, Sixcount, strikerate);

        count = 0;
        balls = 0;
        Fourcount = 0;
        Sixcount = 0;
        life--;
        wicketsleft.innerText = life;

      }else if (playername.trim() != ''){
        count = count - `${buttonvalue}`;
        totalscore = totalscore - `${buttonvalue}`;
  
        strikerate = ((count / balls) * 100).toFixed(0);
  
        finalscore = `${parseInt(totalscore)}`;
  
        alert("you loose your wicket");

        createtable1(playername, count, balls, Fourcount, Sixcount, strikerate);
  
        count = 0;
        balls = 0;
        Fourcount = 0;
        Sixcount = 0;
        life--;
        wicketsleft.innerText = life;
      }


      if (life == 0 || totalballs == 0) {

        finalscore = `${totalscore}`;

        resultdisplay(finalscore);
        reducedtarget.style.display = "inline-block";
        runstowin = finalscore;
        reducedtargetvalue.innerText = runstowin;

        secondinningsbutton.style.display = "inline-block";
        isGameOver = true;

      }
    }
  } else if (innings == 2) {
    if (box2value == 4) {
      Fourcount++;
    }

    if (box2value == 6) {
      Sixcount++;
    }

    result.innerText = "";
    ballsleft.innerText = totalballs;
    wicketsleft.innerText = life;
    box1.innerText = buttonvalue;
    box2.innerText = box2value;
    runstowin -= box2value;

    count = count + box2value;

    reducedtargetvalue.innerText = `${runstowin}`;

    if(buttonvalue != box2value)
      {

        if((count>=50 && count<=55) && overlaycount ==0)
        {
        overlay.style.display = "inline-block"
        message.innerText = "congratulation you score 50 runs"
        overlaycount++
      }
      if(count>55 && count<=99)
        {
        overlaycount = 0
      }

      if((count>=100 && count<=105) && overlaycount ==0)  
      {
        overlay.style.display = "inline-block"
        message.innerText = "congratulation you score 100 runs"
        overlaycount++  
      }
      if(count>105 )
        {
        overlaycount = 0
      }
    }

    if (runstowin <= 0 || totalballs == 0) {
      reducedtargetvalue.innerText = 0;

      if (buttonvalue != box2value) {
        if (life == 1) {
          // let playername = prompt("enter player name");
          let arr = [
            "Chris Gayle","Gill","Virat Kohli","Rohit Sharma","Kane Williamson","Steve Smith","Joe Root","Ben Stokes","AB de Villiers","Rishabh Pant","KL Rahul","Aiden Markram","Sunil Narine", "Mohammad Rizwan","Babar Azam"
          ]
    
          let playername = arr[Math.floor(Math.random()*16)]

          strikerate = ((count / balls) * 100).toFixed(0);

          createtable(playername,count,balls,Fourcount,Sixcount,strikerate);

          result.innerText = `PLAYER 2 WON BY ${life} WICKET`;
          let head = document.createElement("h1");
          result.appendChild(head);
          isGameOver = true;
          resetbutton.style.display = "inline-block";
        } else {
          // let playername = prompt("enter player name");
          let arr = [
            "Chris Gayle","Gill","Virat Kohli","Rohit Sharma","Kane Williamson","Steve Smith","Joe Root","Ben Stokes","AB de Villiers","Rishabh Pant","KL Rahul","Aiden Markram","Sunil Narine", "Mohammad Rizwan","Babar Azam"
          ]
    
          let playername = arr[Math.floor(Math.random()*16)]

          strikerate = ((count / balls) * 100).toFixed(0);

          createtable(playername,count,balls,Fourcount,Sixcount,strikerate);

          result.innerText = `PLAYER 2 WON BY ${life} WICKETS`;
          let head = document.createElement("h1");
          result.appendChild(head);
          isGameOver = true;
          resetbutton.style.display = "inline-block";
        }
      }

    }

    if (buttonvalue == box2value) {
      overlaycount = 0
      // let playername = prompt("enter player name");
      let arr = [
        "Chris Gayle","Gill","Virat Kohli","Rohit Sharma","Kane Williamson","Steve Smith","Joe Root","Ben Stokes","AB de Villiers","Rishabh Pant","KL Rahul","Aiden Markram","Sunil Narine", "Mohammad Rizwan","Babar Azam"
      ]

      let playername = arr[Math.floor(Math.random()*16)]

      if (box2value == 4) {
        Fourcount--;
      }

      if (box2value == 6) {
        Sixcount--;
      }

      // if(playername.trim() === ''){
      //   count = count - `${box2value}`;
      //   runstowin = parseInt(runstowin) + parseInt(box2value);
      //   reducedtargetvalue.innerText = `${runstowin}`;
  
      //   strikerate = ((count / balls) * 100).toFixed(0);
  
      //   alert("enter name")
      //   let playername = prompt("enter player name");
      //   createtable1(playername, count, balls, Fourcount, Sixcount, strikerate);

      //   count = 0;
      //   balls = 0;
      //   Fourcount = 0;
      //   Sixcount = 0;
      //   life--;
      //   wicketsleft.innerText = life;

      // }else if (playername.trim() != '')
      {
        count = count - `${box2value}`;
        runstowin = parseInt(runstowin) + parseInt(box2value);
        reducedtargetvalue.innerText = `${runstowin}`;
  
        strikerate = ((count / balls) * 100).toFixed(0);
    
        alert("you loose your wicket");
  
        createtable1(playername, count, balls, Fourcount, Sixcount, strikerate);
  
        count = 0;
        balls = 0;
        Fourcount = 0;
        Sixcount = 0;
        life--;
        wicketsleft.innerText = life;
      }
    }
    if (life == 0 || totalballs == 0) {
      if (runstowin > 0) {
        result.innerText = `PLAYER 1 WON BY ${runstowin} RUNS`;
        let head = document.createElement("h1");
        result.appendChild(head);
        isGameOver = true;
        resetbutton.style.display = "inline-block";
      }
    }
  } else if (innings == 3) {
    if (box2value == 4) {
      Fourcount++;
    }

    if (box2value == 6) {
      Sixcount++;
    }

    count = count + box2value;
    totalscore = totalscore + box2value;

    box1.innerText = buttontext;
    box2.innerText = box2value;

    if(buttonvalue != box2value)
      {

        if((count>=50 && count<=55) && overlaycount ==0)
        {
        overlay.style.display = "inline-block"
        message.innerText = "congratulation you score 50 runs"
        overlaycount++
      }
      if(count>55 && count<=99)
        {
        overlaycount = 0
      }

      if((count>=100 && count<=105) && overlaycount ==0)  
        {
        overlay.style.display = "inline-block"
        message.innerText = "congratulation you score 100 runs"
        overlaycount++  
      }
      if(count>105 )
        {
        overlaycount = 0
      }
    }

    if (life == 0 || totalballs == 0) {
      if (buttonvalue != box2value) {

        finalscore = `${totalscore}`;

        // let playername = prompt("enter player name");
        let arr = [
          "Chris Gayle","Gill","Virat Kohli","Rohit Sharma","Kane Williamson","Steve Smith","Joe Root","Ben Stokes","AB de Villiers","Rishabh Pant","KL Rahul","Aiden Markram","Sunil Narine", "Mohammad Rizwan","Babar Azam"
        ]
  
        let playername = arr[Math.floor(Math.random()*16)]

        strikerate = ((count / balls) * 100).toFixed(0);

        createtable(playername,count,balls,Fourcount,Sixcount,strikerate);

        resultdisplay(finalscore);

        reducedtarget.style.display = "inline-block";
        runstowin = finalscore;
        reducedtargetvalue.innerText = finalscore;

        secondbutton1.style.display = "inline-block";
        isGameOver = true;
      }
    }

    if (buttonvalue == box2value) {

      overlaycount = 0

      // let playername = prompt("enter player name");
      let arr = [
        "Chris Gayle","Gill","Virat Kohli","Rohit Sharma","Kane Williamson","Steve Smith","Joe Root","Ben Stokes","AB de Villiers","Rishabh Pant","KL Rahul","Aiden Markram","Sunil Narine", "Mohammad Rizwan","Babar Azam"
      ]

      let playername = arr[Math.floor(Math.random()*16)]

      if (box2value == 4) {
        Fourcount--;
      }

      if (box2value == 6) {
        Sixcount--;
      }

      // if(playername.trim() === ''){
      //   count = count - `${box2value}`;
      //   totalscore = totalscore - `${box2value}`;
  
      //   strikerate = ((count / balls) * 100).toFixed(0);
  
      //   finalscore = `${parseInt(totalscore)}`;
      //   alert("enter name")
      //   let playername = prompt("enter player name");
      //   createtable1(playername, count, balls, Fourcount, Sixcount, strikerate);

      //   count = 0;
      //   balls = 0;
      //   Fourcount = 0;
      //   Sixcount = 0;
      //   life--;
      //   wicketsleft.innerText = life;

      // }else if (playername.trim() != '')
        {
        count = count - `${box2value}`;
        totalscore = totalscore - `${box2value}`;
  
        strikerate = ((count / balls) * 100).toFixed(0);
  
        finalscore = `${parseInt(totalscore)}`;
  
        alert("you loose your wicket");

        createtable1(playername, count, balls, Fourcount, Sixcount, strikerate);
  
        count = 0;
        balls = 0;
        Fourcount = 0;
        Sixcount = 0;
        life--;
        wicketsleft.innerText = life;
      }


      if (life == 0 || totalballs == 0) {

        finalscore = `${totalscore}`;

        resultdisplay(finalscore);
        reducedtarget.style.display = "inline-block";
        runstowin = finalscore;
        reducedtargetvalue.innerText = runstowin;

        secondbutton1.style.display = "inline-block";
        isGameOver = true;
      }
    }
  } else if (innings == 4) {
    if (buttonvalue == 4) {
      Fourcount++;
    }

    if (buttonvalue == 6) {
      Sixcount++;
    }

    result.innerText = "";
    ballsleft.innerText = totalballs;
    wicketsleft.innerText = life;
    box1.innerText = buttonvalue;
    box2.innerText = box2value;
    runstowin -= buttonvalue;

    count = count + buttonvalue;

    reducedtargetvalue.innerText = `${runstowin}`;

    if(buttonvalue != box2value)
      {
        if((count>=50 && count<=55) && overlaycount ==0)
        {
        overlay.style.display = "inline-block"
        message.innerText = "congratulation you score 50 runs"
        overlaycount++
      }
      if(count>55 && count<=99)
        {
        overlaycount = 0
      }

      if((count>=100 && count<=105) && overlaycount ==0)  
        {
        overlay.style.display = "inline-block"
        message.innerText = "congratulation you score 100 runs"
        overlaycount++  
      }
      if(count>105 )
        {
        overlaycount = 0
      }
    }

    if (runstowin <= 0 || totalballs == 0) {
      reducedtargetvalue.innerText = 0;
      if (buttonvalue != box2value) {
        if (life == 1) {
          let playername = prompt("enter player name");
          strikerate = ((count / balls) * 100).toFixed(0);

          createtable(playername,count,balls,Fourcount,Sixcount,strikerate);

          result.innerText = `PLAYER 2 WON BY ${life} WICKET`;
          let head = document.createElement("h1");
          result.appendChild(head);
          isGameOver = true;
          headortail.innerHTML = "";
          resetbutton.style.display = "inline-block";
        } else {
          let playername = prompt("enter player name");

          strikerate = ((count / balls) * 100).toFixed(0);

          createtable(playername,count,balls,Fourcount,Sixcount,strikerate);

          result.innerText = `PLAYER 2 WON BY ${life} WICKETS`;
          let head = document.createElement("h1");
          result.appendChild(head);
          isGameOver = true;
          resetbutton.style.display = "inline-block";
        }
      }

    }

    if (buttonvalue == box2value) {
      overlaycount = 0
      if (buttonvalue == 4) {
        Fourcount--;
      }

      if (buttonvalue == 6) {
        Sixcount--;
      }

      let playername = prompt("enter player name");

      if(playername.trim() === ''){
        count = count - `${buttonvalue}`;
        runstowin = parseInt(runstowin) + parseInt(buttonvalue);
        reducedtargetvalue.innerText = `${runstowin}`;
  
        strikerate = ((count / balls) * 100).toFixed(0);
  
        alert("enter name")
        let playername = prompt("enter player name");
        createtable1(playername, count, balls, Fourcount, Sixcount, strikerate);

        count = 0;
        balls = 0;
        Fourcount = 0;
        Sixcount = 0;
        life--;
        wicketsleft.innerText = life;

      }else if (playername.trim() != ''){
        count = count - `${buttonvalue}`;
        runstowin = parseInt(runstowin) + parseInt(buttonvalue);
        reducedtargetvalue.innerText = `${runstowin}`;
  
        strikerate = ((count / balls) * 100).toFixed(0);
    
        alert("you loose your wicket");
  
        createtable1(playername, count, balls, Fourcount, Sixcount, strikerate);
  
        count = 0;
        balls = 0;
        Fourcount = 0;
        Sixcount = 0;
        life--;
        wicketsleft.innerText = life;
      }


    }
    if (life == 0 || totalballs == 0) {
      if (runstowin > 0) {
        result.innerText = `PLAYER 1 WON BY ${runstowin} RUNS`;
        let head = document.createElement("h1");
        result.appendChild(head);
        isGameOver = true;
        resetbutton.style.display = "inline-block";
      }
    }
  }
}
function createtable(playername,count,balls,Fourcount,Sixcount,strikerate) {
  resultbody.innerHTML += `
      <tr>
      <td>${playername}</td>
      <td>${count}<sup>*</sup></td>
      <td>${balls}</td>
      <td>${Fourcount}</td>
      <td>${Sixcount}</td>
      <td>${strikerate}</td>
      `;
}
function createtable1(playername,count,balls,Fourcount,Sixcount,strikerate) {
  resultbody.innerHTML += `
      <tr>
      <td>${playername}</td>
      <td>${count}</td>
      <td>${balls}</td>
      <td>${Fourcount}</td>
      <td>${Sixcount}</td>
      <td>${strikerate}</td>
      `;
}

// function closeoverlay1(event){
//   event.preventDefault()
//   overlay1.style.display="none"
// }

function reset() {
  playareasection.style.display = "none";
  tosssection.style.display = "inline-block";
  headortail.innerHTML = "";
  overlaycount = 0

  isGameOver = false;
  box1.innerText = 0;
  box2.innerText = 0;
  resultbody.innerHTML = "";
  result.innerText = "";
  target.innerText = 0;
  reducedtarget.style.display = "none";
  ballsleft.innerText = 60;
  wicketsleft.innerText = 10;
  totalballs = 60;
  count = 0;
  life = 10;
  balls = 0;
  totalscore = 0;
  totalballscount = 0;
  Fourcount = 0;
  Sixcount = 0;
  // innings = 1
  resetbutton.style.display = "none";
  // freeruns = 0
  // extras.innerText = 0
}

function resultdisplay(finalscore) {
  result.innerText = `second innings target is ${finalscore}`;
  let head = document.createElement("h1");
  result.appendChild(head);
  let target = document.getElementById("target");
  target.innerText = finalscore;
}

function updatebox1(value) {
  handlenumber(value);
}

function secondplay() {
  totalballs = 60;
  life = 10;
  innings = 2;
  isGameOver = false;
  secondinningsbutton.style.display = "none";
  result.innerText = "";
  resultbody.innerHTML = "";
  box1.innerText = 0;
  box2.innerText = 0;
  ballsleft.innerText = 60;
  wicketsleft.innerText = 10;
  Fourcount = 0;
  Sixcount = 0;
  count = 0;
  balls = 0;
  overlaycount = 0
  // freeruns = 0
  // extras.innerText = freeruns
}

function secondinnings1() {
  count = 0;
  balls = 0;
  totalballs = 60;
  life = 10;
  innings = 4;
  isGameOver = false;
  secondbutton1.style.display = "none";
  result.innerText = "";
  resultbody.innerHTML = "";
  box1.innerText = 0;
  box2.innerText = 0;
  ballsleft.innerText = 60;
  wicketsleft.innerText = 10;
  Fourcount = 0;
  Sixcount = 0;
  overlaycount = 0
  // freeruns = 0
  // extras.innerText = freeruns
}

function toss(value) {
  let tossside = ["head", "tail"];
  let randomside = tossside[Math.floor(Math.random() * 2)];
  // console.log(randomside);
  if (value == randomside) {
    headortail.innerHTML = `
       <h4 class = "batorbowlhead">YOU WON THE TOSS</h4>
       <button class = "batorbowl" onclick="chooseBATORBOWL()">NEXT</button>
       `;
  } else {
    let randomchoice = ["Bat", "Bowl"];
    let randomchoose = randomchoice[Math.floor(Math.random() * 2)];
    chooseforcomputer(randomchoose);
  }
}

function chooseforcomputer(randomchoose) {
  console.log(randomchoose);

  if (randomchoose == "Bat") {
    alert("Opponent choose to bat");
    tosssection.style.display = "none";
    playareasection.style.display = "inline-block";
    innings = 3;
  } else if (randomchoose == "Bowl") {
    alert("Opponent choose to bowl");
    tosssection.style.display = "none";
    playareasection.style.display = "inline-block";
    innings = 1;
  }
}
function chooseBATORBOWL() {
  headortail.innerHTML = `
      <h4 style = "font-size:20px">Decide what to do if you win the toss:</h4>
      <button class="batorbowlareabtn" onclick ="playing('bat')">BAT</button> <span></span> <button onclick ="playing('bowl')" class="batorbowlareabtn">BOWL</button>
      `;
}

function playing(opt) {
  console.log(opt);

  if (opt == "bat") {
    tosssection.style.display = "none";
    playareasection.style.display = "inline-block";
    innings = 1;
  } else if (opt == "bowl") {
    tosssection.style.display = "none";
    playareasection.style.display = "inline-block";
    innings = 3;
  }
}

function clearoverlay(){
  overlay.style.display = "none"
}
