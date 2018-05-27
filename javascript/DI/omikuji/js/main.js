(function(){
  'use strict';
  var btn = document.getElementById('btn');
  btn.addEventListener('click',function() {

    var n = Math.random();
    if(n<0.05){                   //5%
      this.textContent='daikiti';
    }else if (n<0.2){             //15%
      this.textContent='tyukiti';
    }else{
      this.textContent='kyou';    //80%
    }

    /*
//配列の長さでランダムをコントロール
    var results=['daikiti','tyukiti','kyou'];
    var n = Math.floor(Math.random()*results.length);
    this.textContent = results[n];
*/
/*
switch(n){
  case 0:
  this.textContent = 'daikiti';
  break;
  case 1:
  this.textContent = 'tyukiti';
  break;
  case 2:
  this.textContent = 'kyou';
  break;
}
*/
/*
    if(n===0){
      this.textContent = 'daikiti';
    }else if(n===1){
      this.textContent = 'tyukiti';
    }else {
      this.textContent = 'kyo';
    }
    this.textContent = n;
    */
  btn.addEventListener('mousedown',function() {
      this.className = 'pushed';
  btn.addEventListener('mouseup',function() {
      this.className = '';

  });
    });
      });
})();
