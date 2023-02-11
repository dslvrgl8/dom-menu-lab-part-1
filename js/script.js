var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

//   Select and cache the <main>element in a variable named mainEl.
const mainEl = document.querySelector('main')
console.log(mainEl)

// Set the background color of mainElto the value stored in the --main-bgCSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)'

// Set the content of mainElto <h1>SEI Rocks!</h1>.
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'

//Add a class of flex-ctr to mainEl.
mainEl.classList.add('flex-ctr');
console.log(mainEl.outerHTML)


//Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
const topMenuEl = document.getElementById('top-menu')
console.log(topMenuEl)

// Set the height topMenuElelement to be 100%.
topMenuEl.style.height = '100%'

// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)' //

topMenuEl.classList.add('flex-around')


for(let link of menuLinks) {
  const a = document.createElement('a')
  a.setAttribute('href', link.href)
  a.innerText = link.text
  topMenuEl.append(a)
}











