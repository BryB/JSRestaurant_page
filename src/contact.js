function contactPage() {
  let content = document.getElementById('page');
  content.innerHTML += `<h1 id="title">CONTACT US!</h1>
  <section id="container">
    <form method="GET">
      <section class="row">
        <div class="rcol">
          <label class="label" for="name">Name:</label>
        </div>
        <div class="lcol">
          <input class="textField" name="name" type="text" placeholder="Name" required>
        </div>
      </section>
      <section class="row">
        <div class="rcol">
          <label class="label" for="email">Email:</label>
        </div>
        <div class="lcol">
          <input class="textField" type="email" name="email" placeholder="Email" required>
        </div>
      </section>
      <section class="row">
        <div class="rcol">
          <label class="label" for="suggestions">Comments:</label>
        </div>
        <div class="lcol">
          <textarea class="textField" rows="10" cols="25" name="suggestions" placeholder="Comments"></textarea>
        </div>
      </section>
      <button id="button" type="submit">Submit</button>
    </form>
  </section>`;
  let title = document.getElementById('title');
  let container = document.getElementById('container');
  let button = document.getElementById('button');

  let inputFields = document.querySelectorAll('.textField');
  let labels = document.querySelectorAll('.label');
  let rows = document.querySelectorAll('.row');
  let rcols = document.querySelectorAll('.rcol');
  let lcols = document.querySelectorAll('.lcol');

  title.setAttribute('style', 'font-size: 100px;' +
                              'padding-top: 10px;' +
                              'font-family: arial;' +
                              'color: purple;' +
                              'text-align: center;');

  container.setAttribute('style', 'border-radius: 5px;' +
                                  'background-color: #f2f2f2;' +
                                  'margin: 0px 5rem 1rem 5rem;' +
                                  'text-align: center;');

  button.setAttribute('style',  'background-color: purple;' +
                                'color: white;' +
                                'padding: 12px 20px;' +
                                'border: none;' +
                                'border-radius: 4px;' +
                                'cursor: pointer;');
  for(let i = 0; i < rows.length; ++i)
    rows[i].setAttribute('style','display: flex;')
  for(let i = 0; i < rcols.length; ++i)
    {
      rcols[i].setAttribute('style', 'flex: 40%;' +
                                      'display: inline-block;' +
                                      'padding: 10px;' +
                                      'text-align: right;');
      lcols[i].setAttribute('style', 'flex: 50%;' +
                                      'display: inline-block;' +
                                      'padding: 10px;' +
                                      'text-align: left;');
    };
  for(let i = 0; i < inputFields.length; ++i)
  {
    inputFields[i].setAttribute('style', 'padding: 20px 10rem' +
                                          'border: 1px solid #ccc;' +
                                          'border-radius: 4px;' +
                                          'box-sizing: border-box;' +
                                          'width: 50%');
    labels[i].setAttribute('style', 'text-align: right;' +
                                          'font-family: verdana;');

  };


}

export { contactPage };
