    // Function to display team according to the selected year
    var t020 = document.getElementById("t020");
    var t019 = document.getElementById("t019");
    t019.style.display = "none";//Only current year will be displayed by default
  function selectTeam() {
    var x = document.getElementById("mySelect").value;

    if(x=="2020"){
    t020.style.display = "block";
    t019.style.display = "none";
    }else if(x == "2019"){
      t019.style.display = "block";
      t020.style.display = "none";
    }
  }