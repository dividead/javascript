import https from 'https';

function grab(link) {
  // let id = window.location.pathname;
  https.get(link, (res) => {
    let str = '';
    res.on('data', (chunk) => {
      str += chunk;
    });
    res.on('end', () => {
      str = str.split(/"display_src":"/).pop().split(/","location"/).shift();
      console.log(str);
    });
  });
}

grab('https://instagram.com/p/8utLFmLqYx/');
