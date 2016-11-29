$(document).ready(function () {
  $('.textarea').focus(function() {
      if (this.value == this.value) {
          $(this).val("");
      }
  }).blur(function() {
      if (this.value == "") {
          $(this).val(this.value);
      }
  });
});
function calculate(price,sale){

  var price =document.getElementById(price).value,
   sale =document.getElementById(sale).value,
   savings = (price * sale)/100,
   saleprice = price - savings,
   output = document.getElementById('showsale');
   if(price,sale){
     output.innerHTML = '<p>  Your finale price is $ '+  saleprice.toFixed(2) + ' you saved $ '+ savings.toFixed(2)+ '</p>'
   }else{
     alert('Please enter the item price and the sale price');
   }
};
