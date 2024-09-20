let workTittle = document.getElementById('work')
let breakTittle = document.getElementById('break')

let buttonPlus = document.getElementById('support-button-plus')
let buttonMinus = document.getElementById('support-button-minus')

let settingMenu = document.getElementById('setting')

let minutesWorkSetting = document.querySelector('.minutesWorkSetting')
let secondsWorkSetting = document.querySelector('.secondsWorkSetting')

let minutesBreakSetting = document.querySelector('.minutesBreakSetting')
let secondsBreakSetting = document.querySelector('.secondsBreakSetting')

let workTime = 25
let breakTime = 5

let seconds = '00'

function openSetting () {
  document.getElementById('menuSetting').style.display = 'block'
}

function saved () {
  document.getElementById('menuSetting').style.display = 'none'

  document.getElementById('minutes').innerHTML = workTime
  document.getElementById('seconds').innerHTML = seconds
}

function plusTimeWork () {
  workTime = workTime + 1
  document.getElementById('minutesWorkSetting').innerHTML = workTime
}

function minusTimeWork () {
  if (workTime >= 2) {
    workTime = workTime - 1
    document.getElementById('minutesWorkSetting').innerHTML = workTime
  }
}

function plusTimeBreak () {
  breakTime = breakTime + 1
  document.getElementById('minutesBreakSetting').innerHTML = breakTime
}

function minusTimeBreak () {
  if (breakTime >= 2) {
    breakTime = breakTime - 1
    document.getElementById('minutesBreakSetting').innerHTML = breakTime
  }
}

minutesWorkSetting.innerHTML = workTime; 
secondsWorkSetting.innerHTML = seconds; 

minutesBreakSetting.innerHTML = breakTime; 
secondsBreakSetting.innerHTML = seconds; 


window.onload = () => {
  document.getElementById('minutes').innerHTML = workTime
  document.getElementById('seconds').innerHTML = seconds

  workTittle.classList.add('active')
}

function start() {
  document.getElementById('setting').style.display = 'none'

  document.getElementById('start').style.display = 'none'
  document.getElementById('reset').style.display = 'block'

  document.getElementById('support-button-minus').style.display = 'none'
  document.getElementById('support-button-plus').style.display = 'none'

  seconds = 59

  let workMinutes = workTime - 1
  let breakMinutes = breakTime - 1

  breakCount = 0

  let timeFunction = () => {
    document.getElementById('minutes').innerHTML = workMinutes
    document.getElementById('seconds').innerHTML = seconds

    seconds = seconds - 1

    if (seconds === 0) {
      workMinutes = workMinutes - 1

      if (workMinutes === -1) {
        if (breakCount % 2 === 0) {
          workMinutes = breakMinutes
          breakCount++

          workTittle.classList.remove('active')
          breakTittle.classList.add('active')

          // document.getElementById('support-button-minus').style.display = 'block'
          // document.getElementById('support-button-plus').style.display = 'block'

        }
        else {
          workMinutes = workTime
          breakCount++

          breakTittle.classList.remove('active')
          workTittle.classList.add('active')
        }
      }

      seconds = 59
    }
    
  }

  setInterval(timeFunction, 1000) 
}

