function displayDetails(id) {
  render(id);
}

function render(id) {
  if (id == "1") {
    let samsung = document.getElementById("brand1");
    samsung.innerHTML =
      "<h4>Samsung Galaxy M32 (Black, 6GB RAM, 128GB Storage) 6 Months Free Screen Replacement for Prime</h4><br><p>Visit the Samsung Store</p><br><p style='text-decoration:line-through'>>M.R.P.:₹18,999.00</p><br>Deal Price:	₹16,999.00";
  }
  if (id == "2") {
    let Apple = document.getElementById("brand2");
    Apple.innerHTML =
      "<h4>Apple iPhone 13 (256GB) - Pink</h4><br><p>Visit the Apple Store</p><br><p style='text-decoration:line-through'>M.R.P.:₹89,909.00</p><br>Deal Price:	₹84,900.00";
  }
  if (id == "3") {
    let one_plus = document.getElementById("brand3");
    one_plus.innerHTML =
      "<h4>OnePlus Nord CE 2 5G (Bahamas Blue, 8GB RAM, 128GB Storage)</h4><br><p>visit the oneplus store </p><br><p style='text-decoration:line-through'>M.R.P.:₹26,909.00</p><br>Deal Price:	₹24,999.00";
  }
}
