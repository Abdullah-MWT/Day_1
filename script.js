const body = document.querySelector("body");
      const buttons = document.querySelectorAll(".btn");

    buttons.forEach( function(btn){
      btn.addEventListener('click', function(e){
        if (e.target.id === 'blue') {
          body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === 'grey') {
          body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === 'green') {
          body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === 'red') {
          body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === 'yellow') {
          body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === 'aqua') {
          body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === 'white') {
          body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === 'black') {
          body.style.backgroundColor = e.target.id;
        }

      })
    })