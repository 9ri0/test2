(function(){
  'use strict';
  var price=document.getElementById('price');
  var num=document.getElementById('num');
  var unit=document.getElementById('unit');
  var btn=document.getElementById('btn');
  var result=document.getElementById('result');
  var reset=document.getElementById('reset');
function checkInput(){
  // /^[1-9][0-9]*$/
  if(
    price.value.match(/^[1-9][0-9]*$/)!=null&&
    num.value.match(/^[1-9][0-9]*$/)!=null
  ){
    btn.classList.remove('disabled');
  }else{
    btn.classList.add('disabled');
  }
}
  btn.addEventListener('click',function(){
    var payLess;
    var short;
    var payMore;
    var over;
    var str;
    if(this.classList.contains('disabled')===true){
      return;
    }
  //a.300...100(short)不足
  //b.400...200 (over) あまり
  //payLess=1000/3;
  payLess=Math.floor(price.value/num.value/unit.value)*unit.value; //300
  short=price.value-(payLess*num.value);//100
  payMore=Math.ceil(price.value/num.value/unit.value)*unit.value;//400
  over=Math.abs(price.value-(payMore*num.value));//200
if(over===0&&short===0){
  str='1人'+(price.value/num.value)+'円ちょうど';
}else{
  str=
  '1人'+payLess+'円だと'+short+'円不足'+
  '1人'+payMore+'円だと'+over+'円あまり';
}

result.textContent=str;
reset.classList.remove('hidden');
  });
  price.addEventListener('keyup',checkInput);
  num.addEventListener('keyup',checkInput);

  reset.addEventListener('click',function(){
    result.textContent='ここに結果を表示します';
    price.value='';
    num.value='';
    unit.value=100;
    btn.classList.add('disabled');
    this.classList.add('hidden');
    price.focus();
  })
  price.focus();
})();
