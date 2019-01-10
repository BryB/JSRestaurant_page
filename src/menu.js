function renderMenu() {
  let gridLocation = document.getElementById('grid');
  let grid = [[, , , ,],
              [, , , ,],
              [, , , ,],
              [, , , ,]];
  for(let i = 0; i < grid.length; ++i)
    for(let j = 0; j < grid[i].length; ++j)
      gridLocation.innerHTML += `<div class='.cell'><img src="./imgs/logo" /></div>`;

  let cells = document.querySelectorAll('.cell');
  for(let i = 0; i < cells.length; ++i)
    cells[i].setAttribute('style',  'width: 100px;' +
                                    'background-color: purple;' +
                                    'border: none;' + 
                                    'color: white;' +
                                    'margin: 30px;' +
                                    'text-align: center;' +
                                    'text-decoration: none;' +
                                    'display: inline-block;' +
                                    'font-size: 16px;');
}

}

function menuPage() {
  let content = document.getElementById('page');

  content.innerHTML += `<h1 id="title">Menu</h1>
                        <section id="info">
                          <div id="grid">

                          </div>
                        </section>`;
  let title = document.getElementById('title');
  let infoStyle = document.getElementById('info');
  let grid = document.getElementById('.grid');

  infoStyle.setAttribute('style', 'display: flex;' +
                                  'align-content: center;' +
                                  'justify-content: center;' +
                                  'font-size: 20px;');
  title.setAttribute('style', 'font-size: 100px;' +
                              'font-family: arial;' +
                              'color: purple;' +
                              'text-align: center;');
  for(let i = 0; i < grind.length; ++i)
  {
    logos[i].setAttribute('style', 'width: 45%;');
    taglines[i].setAttribute('style', 'font-size: 40px;' +
                                      'color: #e7425f;');
  }

}

export { menuPage };
