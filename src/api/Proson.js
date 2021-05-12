export class Dobo {
  createNum() {
    let timer = null
  

    if(timer) clearInterval(timer)
      timer = setInterval(() => {
        let NumBer = Math.round(Math.random() * 2 + 1)
        // console.log(NumBer);
        return NumBer
      },1000)
      // console.log(NumBer);
  }
}

// dobo()
  
    // console.log(dobo());
  
    // var oneClick = document.getElementById('one')
    // var twoClick = document.getElementById('two')
    // var threeClick = document.getElementById('three')
  
    // // if(oneClick.click) {
    //   oneClick.click = function() {
    //     console.log('点击一');
    //   }
    // // }



  

  