const bills = $('.bill input')
const tips = $('.tips')
const errors = $('.error')
const prices = $('.cash')
var tip = 0
var tipPer = 0
var amtPer = 0

const check = (ins) => {
  console.log('am in');
  if(ins.val() == '') {
    errors.eq(ins.attr('val')).removeClass('hidden');
    return false;
  }
  errors.eq(ins.attr('val')).addClass('hidden'); 
  return true;
}

tips.children().on('click', function() {
  let amount = parseFloat(bills.eq(0).val())
  let friends = parseFloat(bills.eq(1).val())
  let percent = parseFloat($(this).attr('value'))
  if(check(bills.eq(0)) && check(bills.eq(1))) {
    tip = Number((amount * (percent / 100)).toFixed(2))
    tipPer = Number((tip / friends).toFixed(2))
    amtPer = Number((amount / friends).toFixed(2))
    prices.eq(0).text(`$${tipPer}`)
    prices.eq(1).text(`$${amtPer + tipPer}`)
    alert(tip)
    alert(tipPer)
    alert(amtPer + tip)
    // alert(tip)
  }
  // Number($(this).attr('value'))
})