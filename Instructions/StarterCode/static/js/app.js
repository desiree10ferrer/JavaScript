// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var inputElement = d3.select(".form-control");

// Add data to table
    data.forEach(function(tableData) {
    console.log(tableData);
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      result = cell.text(value);
      return result
    });
  });

// Avoid default when using tab key
  $('input[notab=notab]').on('keydown', function(e){ if (e.keyCode == 9)  e.preventDefault() });
 

// function for city 
  function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("city");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
//function for date
  function myFunction1() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datetime");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  // function for state
  function myFunction2() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("state");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  //function for country
  function myFunction3() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("country");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

   //function for shape
   function myFunction4() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("shape");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
    