
// ------------------------------- home -------------------------------------

var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight == "0px";

function menutoggle(){
  if(MenuItems.style.maxHeight == "0px")
  {
    MenuItems.style.;maxHeight = "200px";
  }
  else
  {
    MenuItems.style.maxHeight = "0px";
  }
}

// --------------------------------- product --------------------------------

// var menuItems = document.getElementById("menuItems");

// MenuItems.style.maxHeight == "0px";

// function menutoggle(){
//   if(menuitems.style.maxHeight == "0px")
//   {
//     menuitems.style.;maxheight = "200px";
//   }
//   else
//   {
//     menuitems.style.maxheight = "0px";
//   }
// }

// ----------------------------- about --------------------------------------



// ------------------------------- contacts ----------------------------------



// ------------------------------ account -----------------------------------

    
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function register(){

   RegForm.style.transform = "translateX(0px)";
   LoginForm.style.transform = "translateX(0px)";
   Indicator.style.transform = "translateX(100px)";

}

function login(){

   RegForm.style.transform = "translateX(300px)";
   LoginForm.style.transform = "translateX(300px)";
   Indicator.style.transform = "translateX(0px)";

}

// ------------------------------ product-desining---------------------------























// --------------------- js for toggle form ----------------------

// var LoginForm = document.getElementById("LoginForm");
// var RegForm = document.getElementById("RegForm");
// var Indicator = document.getElementById("Indicator");

// function register(){

//    RegForm.style.transform = "translateX(0px)";
//    LoginForm.style.transform = "translateX(0px)";
//    Indicator.style.transform = "translateX(100px)";

// }

// function login(){

//    RegForm.style.transform = "translateX(300px)";
//    LoginForm.style.transform = "translateX(300px)";
//    Indicator.style.transform = "translateX(0px)";

// }