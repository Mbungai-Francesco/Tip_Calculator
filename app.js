const bills = $('.bill input')
const tips = $('.clicable')
const customTip = $('.cust')
const errors = $('.error')
const prices = $('.cash h2')
var clicked
var tip = 0
var tipPer = 0
var amtPer = 0
let percent = 0

const check = (ins) => {
  console.log('am in');
  if(ins.val() == '') {
    errors.eq(ins.attr('val')).removeClass('hidden');
    return false;
  }
  errors.eq(ins.attr('val')).addClass('hidden'); 
  return true;
}

const calc = (per) =>{
  let amount = parseFloat(bills.eq(0).val())
  let friends = parseFloat(bills.eq(1).val())
  percent = parseFloat(per.val()) || parseFloat(per.attr('perc'))
  console.log("in "+percent);
  // if(per.attr('perc') == "") percent = parseFloat(per.val())
  // else percent = parseFloat(per.attr('perc'))
  if(check(bills.eq(0)) && check(bills.eq(1))) {
    tip = Number((amount * (percent / 100)).toFixed(2))
    tipPer = Number((tip / friends).toFixed(2))
    amtPer = Number((amount / friends).toFixed(2))
    totalPer = (amtPer + tipPer).toFixed(2)
    if(tipPer == 'NaN' || totalPer == 'NaN' || tipPer == 'Infinity' || totalPer == 'Infinity') console.log('error');
    else{
      prices.eq(0).text(`$${tipPer}`)
      prices.eq(1).text(`$${totalPer}`)
    }
  }
}

bills.on('input', function() {
  if(bills.eq(0).val() != '' && customTip.val() != '' && bills.eq(1).val() != '') {
    // console.log(percent);
    calc(customTip)
  }
  else{
    prices.eq(0).text(`$0.00`)
    prices.eq(1).text(`$0.00`)
    percent = 0
  }
})

tips.on('click', function() {
  customTip.val('')
  calc($(this))
})

customTip.on('input', function() {
  if($(this).val() != '') {
    calc($(this))
  }
  else{
    prices.eq(0).text(`$0.00`)
    prices.eq(1).text(`$0.00`)
    percent = 0
  }
})
customTip.on('focus', function() {
  if($(this).val() != '') {
    calc($(this))
  }
  else{
    prices.eq(0).text(`$0.00`)
    prices.eq(1).text(`$0.00`)
    percent = 0
  }
})