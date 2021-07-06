document.addEventListener("DOMContentLoaded", function(event) {
    document.documentElement.setAttribute("data-theme", "light");
  });


  var themeSwitcher = document.getElementById("switcher");

  themeSwitcher.onclick = () =>{
     
      var currentTheme = document.documentElement.getAttribute("data-theme");
      var switchToTheme = currentTheme === "dark" ? "light" : "dark"
      document.documentElement.setAttribute("data-theme", switchToTheme);
      document.getElementsByTagName("body").style.transition = "all 350ms ease";
  }

