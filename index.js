$("#user-login").hide()
$("ul").hide()












function getUserData(){
var email=document.getElementById("user-email").value
var password=document.getElementById("user-password").value
console.log("email",email)
console.log("password",password)
}
function showLogin(){
    $(".gameContainer").hide()
    $(".Container").hide()
    $("#user-login").show()  
}
var usersData = [ 
    { user: {email: 'majd@rbk.org', password: '_majd(2017)'}}, 
    { user: {email: 'fatema@rbk.org', password: '1234af5'}}, 
    { user: {email: 'maher@rbk.org', password: 'M@her2017'}}, 
    { user: {email: 'sahar@rbk.org', password: 'saher2017'}} 
];      
localStorage.setItem("mydata",JSON.stringify(usersData))
var storedData=JSON.parse(localStorage.getItem('mydata'))
function check(){
    var password= $("#user-password").value
    var email = $("#user-email").value
    for(var i=0;i<localStorage.length;i++) {
     
          if(localStorage[i].user.email===email && localStorage[i].user.password===password){
            alert('you re being redirected');$("#user-login").hide();$("#gameContainer").show()} else alert('invalid password or email')
      }
     }   
     function securityCheck(){
        var password= $("#userpassword").value
        var r = new RegExp('^(?=.*)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/')
    var x= new RegExp('^[a-z0-9]')
    console.log(r.test(password))
               if(r.test(password)===true) {console.log(password +"  is strong") 
"strong" }                                    
    else if (x.test(password)===true){
             
             console.log("Your password is normal")
             console.log("password should contain atleast one Maj and one special character")
         } 
                  else {
             
             console.log("Your password is weak")
                      console.log("password should contain atleast one Maj,one number and one special character")
              
               }
        }  