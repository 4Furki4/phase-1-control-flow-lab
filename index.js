function scuberGreetingForFeet(feet) {
  // Write your code here!
  if (feet <= 400) {
    return "This one is on me!"
  }
  else if (feet > 400 && feet < 2000) {
    return "That will be twenty bucks."
  }
  else if (feet > 2000 && feet < 2500) {
    return "I will gladly take your thirty bucks."
  }
  else {
    return "No can do."
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  switch (city) {
    case 'NYC':
      return 'Ok, sounds good.'
      break;
    default:
      return 'No go.'
      break;
  }
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  switch (tip) {
    case 'generous':
      return "Thank you so much."
      break
    case 'not as generous':
      return 'Thank you.'
      break
    default:
      return 'Bye.'
      break
  }

}