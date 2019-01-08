function contactPage() {
  let content = document.getElementById('content');

  content.innerHTML += `<h1 id="title">Contact Us!</h1>
                        <section id="info">
                          <div class="packages">
                            <h1 class="tagline">Address</h1>
                            <p>1 Glen Bell Way</p>
                            <p>Irvine, CA 92618</p>
                          </div>
                          <div class="packages">
                            <h1 class="tagline">Email Us!</h1>
                            <form>
                            <label id="name-label" for="name">First Name:</label>
                              <input id="name" type="text" name="name"
                                placeholder="Enter your name" required>
                                <label id="name-label" for="name">Last Name:</label>
                                <input id="name" type="text" name="name"
                                  placeholder="Enter your name" required>
                                <label id="name-label" for="name">Email:</label>
                              <input id="email" type="email" name="email"
                                placeholder="Enter your email" required>
                              <label id="name-label" for="name">Comments:</label>
                              <textarea rows="10" cols="25"
                                id="suggestions"
                                name="suggestions"
                                placeholder="Enter your comments here.">
                              </textarea>
                            </form>
                          </div>
                          <div class="packages">
                            <h1 class="tagline">Visit Us!</h1>
                            <div style="width: 100px">
                              <iframe width="100%" height="100%"
                                src="https://maps.google.com/maps?width=600&amp;height=600&amp;hl=en&amp;q=1%20glen%20bell%20way%20Irvine%2CCA+(Taco%20Bell%20HQ)&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=A&amp;output=embed"
                                frameborder="0"
                                scrolling="no"
                                marginheight="0"
                                marginwidth="0">
                                <a href="https://www.maps.ie/map-my-route/">
                                Plot a route map</a>
                                </iframe>
                            </div>
                            <br />
                          </div>
                        </section>`;
  let title = document.getElementById('title');
  let infoStyle = document.getElementById('info');
  let packages = document.querySelectorAll('.packages');
  let taglines = document.querySelectorAll('.tagline');

  infoStyle.setAttribute('style', 'display: flex;' +
                                  'align-content: center;' +
                                  'justify-content: center;' +
                                  'font-size: 20px;');
  title.setAttribute('style', 'font-size: 100px;' +
                              'color: purple;' +
                              'text-align: center;');
  for(let i = 0; i < packages.length; ++i)
  {
    packages[i].setAttribute('style', 'margin: 0 5%;' +
                                      'text-align: center;' +
                                      'width: 20%;');
    taglines[i].setAttribute('style', 'font-size: 40px;' +
                                      'color: #e7425f;');
  }

}

export { contactPage };
