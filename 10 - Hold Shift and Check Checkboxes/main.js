let lastChecked;
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
function handleCheck(e) {
  if (e.shiftKey && this.checked) {
    let checking = false;
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        checking = !checking;
      }
      if (checking) checkbox.checked = true;
    })
  }
  lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
