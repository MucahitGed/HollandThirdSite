(function() {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

 
  const toogleNav = function() {
    let navButton = select('.nav-toggle')
    navButton.classList.toggle('nav-toggle-active')
    select('.nav-menu').classList.toggle('nav-menu-active')
  }
  on('click', '.nav-toggle', function(e) {
    toogleNav();
  })

  
  on('click', '.nav-menu .drop-down > a', function(e) {
    e.preventDefault()
    this.nextElementSibling.classList.toggle('drop-down-active')
    this.parentElement.classList.toggle('active')
  }, true)

  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      select('.nav-menu .active').classList.remove('active')
      this.parentElement.classList.toggle('active')
      toogleNav();
    }
  }, true)

})()