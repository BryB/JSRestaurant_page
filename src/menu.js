function renderMenu() {
  let gridLocation = document.getElementById('row');
  let counter = 1;
/*  gridLocation.setAttribute('style','display: -ms-flexbox;' +
                                    'display: flex;' +
                                    '-ms-flex-wrap: wrap;' +
                                    'flex-wrap: wrap;' +
                                    'text-align: center;' +
                                    'margin-bottom: 1rem;');

    .flex-container {
    flex-direction:row;
    display: -webkit-flex;
    display: inline-flex;
    background-color: #f5f7f9; 
    width: 100%;
    align-content: center;
    flex-flow: row wrap;
    margin-top: 100px;
    justify-content: center;
}


.flex-item {
    width: 23%;
    height: 360px;
    margin: 10px;
    order: 1;
    border-radius: 3px;
    padding: 0 10px 40px 10px;
}

*/
  for(let i = 0; i < 3; ++i)
    gridLocation.innerHTML += `<div class="column"></div>`;
  let columns = document.querySelectorAll('.column');

  for(let i = 0; i < 3; ++i)
    for(let j = 0; j < 3; ++j)
      columns[i].innerHTML += `<img class="pics" src="./imgs/menu/mItem${counter++}.jpg" />`;
  let pics = document.querySelectorAll('.pics');
/*  for(let i = 0; i < columns.length; ++i)
    columns[i].setAttribute('style','box-sizing: border-box;' +
                                  '-ms-flex: 25%;' +
                                  'flex: 25%;' +
                                  'max-width: 50%;' +
                                  'padding: 0 4px;' +
                                  'margin-top: 8px;' +
                                  'vertical-align: middle');

  for(let i = 0; i < pics.length; ++i)
    pics[i].setAttribute('style','margin-top: 8px;' +
                                  'vertical-align: middle;' +
                                  'width: 60%;'); */
}

function menuPage() {
  let content = document.getElementById('page');
  content.innerHTML += `<h1 id="title">MENU</h1>
                          <section id="grid">
                            <div id="row">
                            </div>
                          </section>`;
  let title = document.getElementById('title');
  let grid = document.getElementById('.grid');

/*  title.setAttribute('style', 'font-size: 100px;' +
                              'color: purple;' +
                              'text-align: center;');
*/
  renderMenu();
}

export { menuPage };
