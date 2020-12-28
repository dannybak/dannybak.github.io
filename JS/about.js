var fb = document.querySelector("#fb");
var insta = document.querySelector("#insta");
var twitter = document.querySelector("#twitter");

fb.addEventListener("click", function(){
    window.open("https://www.facebook.com/profile.php?id=100001399914188");
    console.log("fb cliqueado");
});

insta.addEventListener("click", function(){
    window.open("https://www.instagram.com/danny.bak/");
    console.log("insta cliqueado");
});

twitter.addEventListener("click", function(){
    window.open("https://twitter.com/Danny_Bak");
    console.log("twitter cliqueado");
});
