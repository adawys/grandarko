window.onload = function() {
  const first = document.getElementById('first');
  const list = document.getElementById('right-show');
  const close1 = document.getElementById('close1');
  const close2 = document.getElementById('close2');
  const close3 = document.getElementById('close3');

  function viewMenu() {
      first.addEventListener('click', viewList);
  }
  function closeMenu() {
      close1.addEventListener("click", hideList);
      close2.addEventListener("click", hideList);
      close3.addEventListener("click", hideList);
  }
  function viewList(){
      list.classList.toggle('list-show');
  }
  function hideList(){
      list.classList.remove("list-show")
  }
  viewMenu();
  closeMenu();
};