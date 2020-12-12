    // Function to display team according to the selected year
    var t020 = document.getElementById("t020");
    var t019 = document.getElementById("t019");
    var t018 = document.getElementById("t018");
    t019.style.display = "none";
    t018.style.display = "none";
  function selectTeam() {
    var x = document.getElementById("mySelect").value;

    if(x=="2020"){
    t020.style.display = "block";
    t019.style.display = "none";
    t018.style.display = "none";
    }else if(x == "2019"){
      t019.style.display = "block";
      t018.style.display = "none";
      t020.style.display = "none";
    }else if(x == "2018"){
      t018.style.display = "block";
      t019.style.display = "none";
      t020.style.display = "none";
    }
  }