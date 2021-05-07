document.getElementById('button').addEventListener('click', findprice)
let userage = 0
var userday = 'userday'

function findprice () {
  userage = document.getElementById('inputnumber').value
  userday = document.getElementById('inputtime').value
  userage = parseInt(userage)
//  The ands are used to seperate identical variables, the double line is used for seperate different variables. It must be Wednesday or Saturday and Ages 4-21 to get discount. Else would result in a price of $50.
  if (userday == 'Wednesday' && userage > 4 && userage < 21 || userday == 'Saturday' && userage > 4 && userage < 21) {
    document.getElementById('textbox').innerHTML = 'You can get a student admission of $12'
  } else {
    document.getElementById('textbox').innerHTML = 'You have the regular admission of $50'
  }
}
