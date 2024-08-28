let box1 =document.getElementById("first-box")
let box2 = document.getElementById("second-box")
let main = document.getElementById("main-div")
let lifecount = document.getElementById("lifevalue")
let result = document.getElementById("resultdiv")
let ballsleft =document.getElementById("ballsleft")
let wicketsleft = document.getElementById("wicketsleft")
let secondinnings = document.getElementById("second")
let resultbody = document.getElementById("resultbody")
let reducedtarget = document.getElementById("reducedtarget")
let reducedtargetvalue = document.getElementById("reducedtargetvalue")
let isGameOver = false; 
let resetbutton = document.getElementById("second")
let targetdiv = document.getElementById("targetdiv")
let secondinningsbutton = document.getElementById("second1")
let secondbutton1  = document.getElementById("second2")
let extras = document.getElementById("extras")
let headortail = document.getElementById("headortail")
let tosssection = document.getElementById("toss-section")
let batsection = document.getElementById("batsection")
let playarea = document.getElementById("complete-div")

count = 0
life=10
balls = 0
totalscore = 0
totalballscount=0
innings = 1
totalballs = 60
Fourcount = 0
Sixcount = 0
freeruns = 0



  function handlenumber(value){

    if (isGameOver) {
      return;
  }
    // if(balls == 0){
    //  let playername =  prompt("enter player name")
    //  console.log(playername);
     
    // }
    totalballs--
    ballsleft.innerText = totalballs
    balls ++
    let box2value=Math.floor(Math.random()*6)+1
    buttontext = value
    buttonvalue = parseInt(buttontext)


    // if(box2value==0 ){
    //   freeruns++
    //   extras.innerText = freeruns

    //   if(innings==1){
    //     if(box2value==0 ){
    //       totalballs++
    //       ballsleft.innerText = totalballs
    //     }
    //   }

    //   if(innings==2){
    //     if(box2value==0 ){
    //       alert("you got free runs in 2nd innings")

    //       totalballs++
    //       ballsleft.innerText = totalballs

    //       console.log(runstowin);
    //       runstowin = runstowin-1
    //       reducedtargetvalue.innerText = runstowin
          
    //     }
    //   }
    // }

    if(innings == 1){

        if(buttonvalue == 4){
            Fourcount++
      
          }
      
          if(buttonvalue == 6 ){
            Sixcount++
          }
      
      
      count = count + buttonvalue
      totalscore = totalscore+buttonvalue
    
      box1.innerText = buttontext
      box2.innerText = box2value

      if(life== 0 ||  totalballs == 0){
        
        if(buttonvalue != box2value){
          num1 = `${(totalscore)}`
          num2 = `${(freeruns)}`
          finalscore = `${parseInt(num1) + parseInt(num2)}` 
          let playername =  prompt("enter player name")

          strikerate = ((count/balls)*100).toFixed(0)

          resultbody.innerHTML +=`
          <tr>
          <td>${playername}</td>
          <td>${count}<sup>*</sup></td>
          <td>${balls}</td>
          <td>${Fourcount}</td>
          <td>${Sixcount}</td>
          <td>${strikerate}</td>
          `           
          reducedtarget.style.display = "inline-block"
          runstowin  = finalscore
          reducedtargetvalue.innerText=finalscore

          secondinningsbutton.style.display = 'inline-block'
          isGameOver = true

          resultdisplay(finalscore)
          headortail.innerHTML = ''

          count = 0
          balls = 0
          Fourcount = 0
          Sixcount = 0
        }       
      }

      
      if(buttonvalue == box2value){

        let playername =  prompt("enter player name")


        if(buttonvalue==4){
          Fourcount--
        }

        if(buttonvalue==6){
          Sixcount--
        }
    
        count = count - `${buttonvalue}`
        totalscore = totalscore-`${buttonvalue}`
        // console.log(totalscore);
        

        strikerate = ((count/balls)*100).toFixed(0)

        finalscore = `${parseInt(totalscore)}`+`${parseInt(freeruns)}`


          alert("you loose your wicket")
          resultbody.innerHTML +=`
          <tr>
          <td>${playername}</td>
          <td>${count}</td>
          <td>${balls}</td>
          <td>${Fourcount}</td>
          <td>${Sixcount}</td>
          <td>${strikerate}</td>

          ` 
        count = 0
        balls = 0
        Fourcount = 0
        Sixcount = 0
        life--
        wicketsleft.innerText = life

        if(life== 0 ||  totalballs == 0){
          num1 = `${(totalscore)}`
          num2 = `${(freeruns)}`
          finalscore = `${parseInt(num1) + parseInt(num2)}` 

          resultdisplay(finalscore)
          reducedtarget.style.display = "inline-block"
          runstowin  = finalscore
          reducedtargetvalue.innerText=runstowin

          secondinningsbutton.style.display = 'inline-block'
          isGameOver = true
          Fourcount = 0
          Sixcount = 0
          headortail.innerHTML = ''

        }
      }
    }else if(innings == 2){

        if(box2value==4){
            Fourcount++
          }
  
          if(box2value==6){
            Sixcount++
          }
      
        result.innerText = ''
        ballsleft.innerText = totalballs
        wicketsleft.innerText = life
        box1.innerText  = buttonvalue
        box2.innerText  = box2value
        runstowin -= box2value
        
        count = count + box2value

        reducedtargetvalue.innerText = `${runstowin}`


        if(runstowin <=0 || totalballs == 0){
          reducedtargetvalue.innerText = 0
          if(buttonvalue != box2value ){
            let playername =  prompt("enter player name")

            resultbody.innerHTML +=`
            <tr>
            <td>${playername}</td>
            <td>${count}<sup>*</sup></td>
            <td>${balls}</td>
            <td>${Fourcount}</td>
            <td>${Sixcount}</td>
            <td>${strikerate}</td>
            ` 
            result.innerText = `PLAYER 2 WON BY ${life} WICKETS`
            let head = document.createElement('h1')
            result.appendChild(head)
            isGameOver = true;
            headortail.innerHTML = ''
            resetbutton.style.display="inline-block"

        }

        //   box1.innerText = ''
        //   box2.innerText = ''
        }

        if(buttonvalue == box2value ){

          if(box2value==4){
            Fourcount--
          }
  
          if(box2value==6){
            Sixcount--
          }

          let playername =  prompt("enter player name")

           count = count - `${box2value}`
           runstowin=parseInt(runstowin)+parseInt(box2value)
           reducedtargetvalue.innerText = `${runstowin}`

           strikerate = ((count/balls)*100).toFixed(0)

          // alert("2nd innings loose your wicket")
          resultbody.innerHTML +=`
          <tr>
          <td>${playername}</td>
          <td>${count}</td>
          <td>${balls}</td>
          <td>${Fourcount}</td>
          <td>${Sixcount}</td>
          <td>${strikerate}</td>
          ` 
          count = 0
          balls = 0
          Fourcount = 0
          Sixcount = 0
          life--
          wicketsleft.innerText = life

        }
        if(life == 0 || totalballs == 0){
          if(runstowin<0){
            result.innerText = `PLAYER 1 WON BY 0 RUNS`
          }
          result.innerText = `PLAYER 1 WON BY ${runstowin} RUNS`
          let head = document.createElement('h1')
          result.appendChild(head)
          isGameOver = true;
          resetbutton.style.display="inline-block"
          headortail.innerHTML = ''
        }
      }
      else if(innings == 3){

        if(box2value == 4){
            Fourcount++
          }
      
          if(box2value == 6 ){
            Sixcount++
          }
        
    count = count + box2value
      totalscore = totalscore+box2value
    
      box1.innerText = buttontext
      box2.innerText = box2value

      if(life== 0 ||  totalballs == 0){

        if(buttonvalue != box2value){
          num1 = `${(totalscore)}`
          num2 = `${(freeruns)}`
          finalscore = `${parseInt(num1) + parseInt(num2)}` 

          let playername =  prompt("enter player name")

          strikerate = ((count/balls)*100).toFixed(0)

          resultbody.innerHTML +=`
          <tr>
          <td>${playername}</td>
          <td>${count}<sup>*</sup></td>
          <td>${balls}</td>
          <td>${Fourcount}</td>
          <td>${Sixcount}</td>
          <td>${strikerate}</td>
          ` 
          resultdisplay(finalscore)
          
          reducedtarget.style.display = "inline-block"
          runstowin  = finalscore
          reducedtargetvalue.innerText=finalscore

          secondbutton1.style.display = 'inline-block'
          isGameOver = true
          headortail.innerHTML = ''

        }       
      }
   
      if(buttonvalue == box2value){

        let playername =  prompt("enter player name")

        if(box2value==4){
          Fourcount--
        }

        if(box2value==6){
          Sixcount--
        }
    
        count = count - `${box2value}`
        totalscore = totalscore-`${box2value}`

        strikerate = ((count/balls)*100).toFixed(0)

        finalscore = `${parseInt(totalscore)}`+`${parseInt(freeruns)}`


          alert("you loose your wicket")
          resultbody.innerHTML +=`
          <tr>
          <td>${playername}</td>
          <td>${count}</td>
          <td>${balls}</td>
          <td>${Fourcount}</td>
          <td>${Sixcount}</td>
          <td>${strikerate}</td>

          ` 
        count = 0
        balls = 0
        Fourcount = 0
        Sixcount = 0
        life--
        wicketsleft.innerText = life

        if(life== 0 ||  totalballs == 0){
          num1 = `${(totalscore)}`
          num2 = `${(freeruns)}`
          finalscore = `${parseInt(num1) + parseInt(num2)}` 

          resultdisplay(finalscore)
          reducedtarget.style.display = "inline-block"
          runstowin  = finalscore
          reducedtargetvalue.innerText=runstowin

          secondbutton1.style.display = 'inline-block'
          isGameOver = true
          headortail.innerHTML = ''

        }
      }
      }
      else if (innings == 4){
        if(buttonvalue==4){
            Fourcount++
          }
  
          if(buttonvalue==6){
            Sixcount++
          }
      
        result.innerText = ''
        ballsleft.innerText = totalballs
        wicketsleft.innerText = life
        box1.innerText  = buttonvalue
        box2.innerText  = box2value
        runstowin -= buttonvalue
        
        count = count + buttonvalue

        reducedtargetvalue.innerText = `${runstowin}`


        if(runstowin <=0 || totalballs == 0){
          reducedtargetvalue.innerText = 0
          if(buttonvalue != box2value ){
            let playername =  prompt("enter player name")

            strikerate = ((count/balls)*100).toFixed(0)

            resultbody.innerHTML +=`
            <tr>
            <td>${playername}</td>
            <td>${count}<sup>*</sup></td>
            <td>${balls}</td>
            <td>${Fourcount}</td>
            <td>${Sixcount}</td>
            <td>${strikerate}</td>
            ` 
            result.innerText = `PLAYER 2 WON BY ${life} WICKETS`
            let head = document.createElement('h1')
            result.appendChild(head)
            isGameOver = true;
            resetbutton.style.display="inline-block"
            headortail.innerHTML = ''
        }

        //   box1.innerText = ''
        //   box2.innerText = ''
        }

        if(buttonvalue == box2value ){

          if(buttonvalue==4){
            Fourcount--
          }
  
          if(buttonvalue==6){
            Sixcount--
          }

          let playername =  prompt("enter player name")

           count = count - `${buttonvalue}`
           runstowin=parseInt(runstowin)+parseInt(buttonvalue)
           reducedtargetvalue.innerText = `${runstowin}`

           strikerate = ((count/balls)*100).toFixed(0)

          // alert("2nd innings loose your wicket")
          resultbody.innerHTML +=`
          <tr>
          <td>${playername}</td>
          <td>${count}</td>
          <td>${balls}</td>
          <td>${Fourcount}</td>
          <td>${Sixcount}</td>
          <td>${strikerate}</td>
          ` 
          count = 0
          balls = 0
          Fourcount = 0
          Sixcount = 0
          life--
          wicketsleft.innerText = life

        }
        if(life == 0 || totalballs == 0){
          if(runstowin<0){
            result.innerText = `PLAYER 1 WON BY 0 RUNS`
          }
          result.innerText = `PLAYER 1 WON BY ${runstowin} RUNS`
          let head = document.createElement('h1')
          result.appendChild(head)
          isGameOver = true;
          resetbutton.style.display="inline-block"
          headortail.innerHTML = ''
        }
      }
    }
  
  function reset(){
    isGameOver = false;
    box1.innerText = 0
    box2.innerText = 0
    resultbody.innerHTML = ''
    result.innerText = ''
    target.innerText = 0
    reducedtarget.style.display = 'none'
    ballsleft.innerText = 60
    wicketsleft.innerText = 10
    totalballs = 60
    count = 0
    life=10
    balls = 0
    totalscore = 0
    totalballscount=0
    Fourcount = 0
    Sixcount = 0
    innings = 1
    resetbutton.style.display="none"
    freeruns = 0
    extras.innerText = 0
    tosssection.style.display ="inline-block"
    playarea.style.display = "none"
      }

function resultdisplay(finalscore){

  result.innerText = `second innings target is ${finalscore}`
  let head = document.createElement('h1')
  result.appendChild(head)
  let target = document.getElementById("target")
  target.innerText = finalscore
}

function updatebox1(value){
  handlenumber(value)
}
  
  function cleartable(){
    const tablebody = document.querySelector("#datatable tbody")
    tablebody.innerHTML = ''
  }

  function secondplay(){
    totalballs = 60
    life=10
    innings = 2
    isGameOver = false
    secondinningsbutton.style.display = 'none'
    result.innerText = ''
    resultbody.innerHTML = ''
    box1.innerText = 0
    box2.innerText = 0
    ballsleft.innerText = 60
    wicketsleft.innerText = 10
    Fourcount = 0
    Sixcount = 0
    freeruns = 0
    extras.innerText = freeruns
    }

    function secondinnings1(){
        count = 0
        balls = 0
        totalballs = 60
        life=10
        innings = 4
        isGameOver = false
        secondbutton1.style.display = 'none'
        result.innerText = ''
        resultbody.innerHTML = ''
        box1.innerText = 0
        box2.innerText = 0
        ballsleft.innerText = 60
        wicketsleft.innerText = 10
        Fourcount = 0
        Sixcount = 0
        freeruns = 0
        extras.innerText = freeruns
    }

    function toss(value){
      let tossside = ['head','tail']
      let randomside = tossside[Math.floor(Math.random()*2)] 
      // console.log(randomside);
      if(value == randomside){

       headortail.innerHTML = `
       <h4 class = "batorbowlhead">YOU WON THE TOSS</h4>
       <button class = "batorbowl" onclick="chooseBATORBOWL()">NEXT</button>
       `
      }else{
        let randomchoice = ['Bat','Bowl']
        let randomchoose = randomchoice[Math.floor(Math.random()*2)] 
        
        // headortail.innerHTML = `
        // <h4 class = "batorbowlhead">YOU LOOSE THE TOSS</h4>
        // <h4 style = "font-size : 25px"> Opponent Decide To ${randomchoose} First</h4>
        // <button class = "resetbuttonforHorT" onclick="chooseforcomputer(  )">PLAY</button>
        // `
        chooseforcomputer(randomchoose)

      }
           
    }

    function chooseforcomputer(randomchoose){
        console.log((randomchoose)); 
        
        if(randomchoose == "Bat" ){
            alert("Opponent choose to bat")
            tosssection.style.display ="none"
            playarea.style.display = "inline-block"
            innings = 3
          }
          else if( randomchoose == "Bowl"){
            alert("Opponent choose to bowl")
            tosssection.style.display ="none"
            playarea.style.display = "inline-block"
            innings = 1
          }
    }
    function chooseBATORBOWL(){
      headortail.innerHTML =`
      <h4 style = "font-size:20px">Decide what to do if you win the toss:</h4>
      <button class="batorbowlareabtn" onclick ="playing('bat')">BAT</button> <span></span> <button onclick ="playing('bowl')" class="batorbowlareabtn">BOWL</button>
      `
    }

    function playing(opt){
      console.log(opt);
      
      if(opt == "bat" ){
        tosssection.style.display ="none"
        playarea.style.display = "inline-block"
        innings = 1
      }
      else if( opt == "bowl"){
        tosssection.style.display ="none"
        playarea.style.display = "inline-block"
        innings = 3
      }

    }
