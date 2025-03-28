const Menu = document.getElementById('mySidenav');
const MenuButton = document.getElementById('menubtn');
const CloseMenu = document.getElementById('closebtn');

// adauga clasa active la meniu care il face vizibil
MenuButton.addEventListener('click', ()=>{
    Menu.classList.add('sidenav-active');
});

// butonul de inchidere
CloseMenu.addEventListener('click', ()=>{
    Menu.classList.remove('sidenav-active');
});

/*- Permite mai multe meniuri dropdowns deschise simultan */
 var dropdown = document.getElementsByClassName("dropdown-btn");
 var i;

 for (i = 0; i < dropdown.length; i++) {
     dropdown[i].addEventListener("click", function () {
         this.classList.toggle("active");
         var dropdownContent = this.nextElementSibling;
         if (dropdownContent.style.display === "block") {
             dropdownContent.style.display = "none";
         } else {
             dropdownContent.style.display = "block";
         }
     });
 }
                  