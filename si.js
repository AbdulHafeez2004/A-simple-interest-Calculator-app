let res = document.getElementById('res')
let amt = document.querySelector('.amount')
let out = document.querySelector('#output')
let yrs = document.querySelector('#years')
let btn = document.querySelector('.comp')
let int = document.querySelector('.interests')




btn.addEventListener("click", myFunction);

function myFunction() {
  let xy = amt.value
  let xx = out.value
  var x = document.querySelector(".amount").value;
  let val = parseFloat(((x * out.value * yrs.value)/100))
  // let valRes = parseFloat(parseFloat(x) + val) 
  let year = 2022 + parseInt(yrs.value)
  res.innerText= `If you deposit ${xy},\n at an interest rate of ${xx}%,\n you would receive an amount of ${val},\n in the year ${year}`;
  if(x <= 0){
    alert('Enter a positive number')
    res.innerText =' '
}
else if(x.length == 0){
    alert('Enter a positive number')
        res.innerText =' '
}

}



