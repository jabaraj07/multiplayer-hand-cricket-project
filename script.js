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
let extras = document.getElementById("extras")

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
    
    totalballs--
    ballsleft.innerText = totalballs
    balls ++
    let box2value=Math.floor(Math.random()*7)
    buttontext = value
    buttonvalue = parseInt(buttontext)

    if(buttonvalue == 4){
      Fourcount++

    }

    if(buttonvalue == 6 ){
      Sixcount++
    }

    if(box2value==0 ){
      freeruns++
      extras.innerText = freeruns
    }

    if(innings == 1){
      count = count + buttonvalue
      totalscore = totalscore+buttonvalue
    
      box1.innerText = buttontext
      box2.innerText = box2value

      if(life== 0 ||  totalballs == 50){

        if(buttonvalue != box2value){
          resultdisplay()
          reducedtarget.style.display = "inline-block"
          runstowin  = totalscore
          reducedtargetvalue.innerText=runstowin
          innings = 2
          totalballs = 60
          life=10
          secondinningsbutton.style.display = 'inline-block'
          isGameOver = true

  
          resultbody.innerHTML +=`
          <tr>
          <td>${count}</td>
          <td>${balls}</td>
          <td>${Fourcount}</td>
          <td>${Sixcount}</td>
          <td>${strikerate}</td>
          ` 
          count = 0
          balls = 0

          resultdisplay()
          num1 = `${(totalscore)}`
          num2 = `${(freeruns)}`
          finalscore = `${parseInt(num1) + parseInt(num2)}` 

          reducedtarget.style.display = "inline-block"
          runstowin  = finalscore
          reducedtargetvalue.innerText=runstowin
          innings = 2
          totalballs = 60
          life=10
          secondinningsbutton.style.display = 'inline-block'
          isGameOver = true
        }
        num1 = `${(totalscore)}`
        num2 = `${(freeruns)}`
        finalscore = `${parseInt(num1) + parseInt(num2)}`        
      }

      
      if(buttonvalue == box2value){
        if(buttonvalue==4){
          Fourcount--
        }

        if(buttonvalue==6){
          Sixcount--
        }
    
        count = count - `${buttonvalue}`
        totalscore = totalscore-`${buttonvalue}`

        strikerate = ((count/balls)*100).toFixed(0)

        finalscore = `${parseInt(totalscore)}`+`${parseInt(freeruns)}`


          alert("you loose your wicket")
          resultbody.innerHTML +=`
          <tr>
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

        if(life== 0 ||  totalballs == 50){
          num1 = `${(totalscore)}`
          num2 = `${(freeruns)}`
          finalscore = `${parseInt(num1) + parseInt(num2)}` 

          resultdisplay()
          reducedtarget.style.display = "inline-block"
          runstowin  = finalscore
          reducedtargetvalue.innerText=runstowin
          innings = 2
          totalballs = 60
          life=10

          // resultbody.innerHTML = ''
          secondinningsbutton.style.display = 'inline-block'
          isGameOver = true
          // secondinnings.style.display="inline-block"
        }
      }
    }else{
      if(innings == 2){
        result.innerText = ''
        ballsleft.innerText = totalballs
        wicketsleft.innerText = life
        box1.innerText  = buttonvalue
        box2.innerText  = box2value
        runstowin -= buttonvalue
        console.log(typeof(runstowin));
        
        count = count + buttonvalue

        reducedtargetvalue.innerText = `${runstowin}`

        if(runstowin<=0){
          reducedtargetvalue.innerText = 0
        }

        if(runstowin <=0 ){
          resultbody.innerHTML +=`
          <tr>
          <td>${count}</td>
          <td>${balls}</td>
          ` 
          result.innerText = `PLAYER 2 WON BY ${life} WICKETS`
          let head = document.createElement('h1')
          result.appendChild(head)
          isGameOver = true;
          resetbutton.style.display="inline-block"
          box1.innerText = ''
          box2.innerText = ''
        }

        if(buttonvalue == box2value || totalballs == 0){

          count = count - `${buttonvalue}`
           runstowin=parseInt(runstowin)+parseInt(buttonvalue)
           reducedtargetvalue.innerText = `${runstowin}`

          // alert("2nd innings loose your wicket")
          resultbody.innerHTML +=`
          <tr>
          <td>${count}</td>
          <td>${balls}</td>
          ` 
          count = 0
          balls = 0
          life--
          wicketsleft.innerText = life
          if(life == 0 || totalballs == 0){
            if(runstowin<=0){
              result.innerText = `PLAYER 1 WON BY 0 RUNS`
            }
            result.innerText = `PLAYER 1 WON BY ${runstowin} RUNS`
            let head = document.createElement('h1')
            result.appendChild(head)
            isGameOver = true;
            resetbutton.style.display="inline-block"
          }
        }
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
  }

function resultdisplay(){
  num1 = `${(totalscore)}`
  num2 = `${(freeruns)}`
  finalscore = `${parseInt(num1) + parseInt(num2)}` 
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
    }




      // function createtable(value){
  //   let row = document.createElement('tr')
  //   let cell = document.createElement('td')
  //   let cell1 = document.createElement('td')
  //   let tablebody = document.querySelector('#datatable tbody')  
  //   cell.innerText = value
  //   cell1.innerText = balls

  //   row.appendChild(cell)
  //   row.appendChild(cell1)
  //   tablebody.appendChild(row)
  // }


  
// let allbutton = document.querySelectorAll(".button-div-sub .btn")
//   allbutton.forEach((button)=>{
//     button.addEventListener('click',handlenumber)
//   })
