// // =============== getMonthName ========================
function getMonthName(mo) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    //month needs to be less than length, also more than 0
    if (mo > months.length || mo < 1) {
      return 'that is not a valid month'
    }
    //mo.length is not a valid property
    for (let i = 0; i < mo; i++) {
        //i will never reach mo due to for condition above. 
      if (i === mo - 1) {
        //need to use index value, not mo value. 
        return months[i];
      }
    }
  }
  console.log(getMonthName(-1))
  console.log(getMonthName(0))
  console.log(getMonthName(1))
  console.log(getMonthName(2))
  console.log(getMonthName(3))
  console.log(getMonthName(4))
  console.log(getMonthName(5))
  console.log(getMonthName(6))
  console.log(getMonthName(7))
  console.log(getMonthName(8))
  console.log(getMonthName(9))
  console.log(getMonthName(10))
  console.log(getMonthName(11))
  console.log(getMonthName(12))
  console.log(getMonthName(13))
  console.log(getMonthName(50))
  console.log(getMonthName(500))

