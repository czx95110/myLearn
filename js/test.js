
function Parent(){
  this.name="李小龙";
  this.age=32;
  if(typeof Parent._lev=="undefined"){
    Parent.prototype.lev=function(){
      return this.name;
    }
    Parent._lev=true;
  }

};

var  x =new  Parent();
console.log(x.lev());


















