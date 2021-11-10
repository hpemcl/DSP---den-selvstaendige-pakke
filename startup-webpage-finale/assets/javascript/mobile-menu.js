const MENU_ID = "mobile-menu";
const SHOW_CLASS = " show";

function toggle() {
  var menu = document.getElementById(MENU_ID);
  var classNames = menu.className;
  var shouldHide = classNames.match(SHOW_CLASS);
  var newClassNames = (shouldHide ?
    classNames.replace(SHOW_CLASS, "") :
    classNames.concat(SHOW_CLASS)
  );
  menu.className = newClassNames;
}
