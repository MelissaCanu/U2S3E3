fetch("https://striveschool-api.herokuapp.com/books")
  .then((booksObj) => {
    /* tramite parametro della callback ricevo il valore del fetch qua */
    if (booksObj.ok) {
      return booksObj.json(); /* parso la risposta */
    }
  })
  /* adesso sono sicura che ho i dati (controllato su network in inspector) */
  .then((booksObj) => {
    /* qua manipolo i dati ad esempio con la DOM manipulation */
  });
