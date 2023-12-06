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
    const booksContainer = document.getElementById("booksContainer");
    const booksRow = document.createElement("div");
    booksRow.className = "row";
    const booksCol = document.createElement("div");
    booksCol.className = "col-12 col-md-6 col-lg-4";

    books.forEach((book) => {
      const card = document.createElement("div");
      card.className = "card";
    });
  });

/*           <div class="container text-center m-4">
      <div class="row align-items-start">
        <div class="col">
          <div class="card" style="width: 18rem">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-price"></p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div> */
