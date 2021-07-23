console.log('Hello bro, how are you?')
const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const countdown = document.getElementById('countdown')

// update countdown time
const countDown = () => {
  const countDate = new Date('September 11, 2021').getTime()
  const now = new Date().getTime()
  const gap = countDate - now

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  const textDay = Math.floor(gap / day)
  const textHour = Math.floor((gap % day) / hour)
  const textMinute = Math.floor((gap % hour) / minute)
  const textSecond = Math.floor((gap % minute) / second)

  days.innerText = textDay
  hours.innerText = textHour
  minutes.innerText = textMinute
  seconds.innerText = textSecond

}



setInterval(countDown, 1000)