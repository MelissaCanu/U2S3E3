fetch("https://striveschool-api.herokuapp.com/books")
  .then((booksObj) => {
    /* tramite parametro della callback ricevo il valore del fetch qua */
    if (booksObj.ok) {
      return booksObj.json(); /* parso la risposta */
    }
  })
  /* adesso sono sicura che ho i dati (controllato su network in inspector) */
  .then((books) => {
    /* qua manipolo i dati ad esempio con la DOM manipulation */
    const booksContainer = document.getElementById("booksContainer");
    const booksRow = document.createElement("div");
    booksRow.className = "row align-items-start";
    const booksCol = document.createElement("div");
    booksCol.className = "col-12 col-md-6 col-lg-4";

    /* appendo i child ai parent */
    booksRow.appendChild(booksCol);
    booksContainer.appendChild(booksRow);

    books.forEach((book) => {
      /* card */
      const card = document.createElement("div");
      card.className = "card";
      /* img */
      const image = document.createElement("img");
      image.src = book.img;
      image.className = "card-img-top";
      image.alt = book.title;
      /* card body */
      const cardBody = document.createElement("div");
      cardBody.className = "card-body";
      /* card title */
      const title = document.createElement("h5");
      title.className = "card-title";
      title.textContent = book.title;
      /* price */
      const prezzo = document.createElement("p");
      prezzo.className = "card-text";
      prezzo.textContent = "Price: " + book.price;

      const button = document.createElement("a");
      button.href = "#";
      button.className = "btn btn-success";
      button.textContent = "Buy";

      /* appendo gli elementi */
      cardBody.appendChild(title);
      cardBody.appendChild(prezzo);
      card.appendChild(image);
      card.appendChild(cardBody);
      booksCol.appendChild(card);
    });
  })

  .catch((error) => console.error("Error fetching books", error));
