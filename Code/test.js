<!DOCTYPE html>
<title>My Example</title>


<p id="msg"></p>

<script>
  // Set variables
  var myBankBalance = 0;
  var output = "";

  // Do the 'while' loop
  while (myBankBalance <= 10) {
    output += "My bank balance is now $" + myBankBalance + "<br>";
    myBankBalance ++;
  }

  // Output results to the above HTML element
  document.getElementById("msg").innerHTML = output;
</script>
