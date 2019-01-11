function renderMenu() {
  let gridLocation = document.getElementById('row');
  let counter = 1;
  gridLocation.setAttribute('style', 'text-align: center;' +
                                      'padding-bottom: 10%;');

  for(let i = 0; i < 3; ++i)
    gridLocation.innerHTML += `<div class="column"></div>`;
  let columns = document.querySelectorAll('.column');

  for(let i = 0; i < 3; ++i)
    for(let j = 0; j < 3; ++j)
      columns[i].innerHTML += `<img class="pics" src="./imgs/menu/mItem${counter++}.jpg" />`;
  let pics = document.querySelectorAll('.pics');

  for(let i = 0; i < pics.length; ++i)
    pics[i].setAttribute('style','padding: 10px;' +
                                  'border: 3px solid #fab600;' +
                                  'margin: 10px');
  for(let i = 0; i < pics.length; ++i)
    pics[i].addEventListener('click', e => {
      disp_details();
    });
}

function menuPage() {
  let content = document.getElementById('page');
  content.innerHTML += `<h1 id="title">MENU</h1>
                          <section id="grid">
                            <div id="row">
                            </div>
                          </section>`;
  let title = document.getElementById('title');
  title.setAttribute('style', 'font-size: 100px;' +
                              'color: purple;' +
                              'text-align: center;');
  renderMenu();
}

export { menuPage };
