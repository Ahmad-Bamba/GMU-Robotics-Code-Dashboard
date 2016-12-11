window.onload = function() {
  NetworkTables.addWsConnectionListener(function(connected) {
    if(connected) {
      if(NetworkTables.getValue('/Robot Dashboard/Robot State') === "true") {
        document.getElementById('global-status').className = "status-enabled";
        document.getElementById('global-status').innerHTML = "Enabled";
      } else {
        document.getElementById('global-status').className = "status-disabled";
        document.getElementById('global-status').className = "Disabled";
      }
    }
      console.log("Connection changed: " + connected);
  }, true);

  NetworkTables.addGlobalListener(function(key, value, isNew){
    if(key === "/Robot Dashboard/Axis 0") {
      document.getElementById('axis0').innerHTML = "Axis 0: " + value;
    } else if(key === "/Robot Dashboard/Axis 4") {
      document.getElementById('axis4').innerHTML = "Axis 4: " + value;
    } else if(key === "/Robot Dashboard/Axis 2") {
      document.getElementById('axis2').innerHTML = "Axis 2: " + value;
    } else if(key === "/Robot Dashboard/Axis 3") {
      document.getElementById('axis3').innerHTML = "Axis 3: " + value;
    }
  }, true);
}

var enableBtn = function() {
  console.log("Hei")
  if(document.getElementById('global-status').innerHTML == "Enabled") {
    NetworkTables.putValue("/Robot Dashboard/Robot State", false);
  } else {
    NetworkTables.putValue("/Robot Dashboard/Robot State", true);
  }
}
