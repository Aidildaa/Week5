function getGrade(score) {
    
  if(score>25 & score<=30)
    return 'A'
  else if(20<score & score<=25)
    return 'B'
  else if(15<score & score<=20)
    return 'C'
  else if(10<score & score<=15)
    return 'D'
  else if(5<score & score<=10)
    return 'E'
  else if(0<=score & score<=5)
   return 'F'
}