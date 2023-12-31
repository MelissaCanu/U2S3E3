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
    booksRow.className = "row";

    /* appendo i child ai parent */
    booksContainer.appendChild(booksRow);

    books.forEach((book) => {
      /* creo una colonna per card */
      const booksCol = document.createElement("div");
      booksCol.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-3";
      /* card */
      const card = document.createElement("div");
      card.className = "card h-100";
      /* img */
      const image = document.createElement("img");
      image.src = book.img;
      image.className = "card-img-top img-fluid";
      image.alt = book.title;

      /* card body */
      const cardBody = document.createElement("div");
      cardBody.className = "card-body";
      /* div per title e price */
      const divTitlePrice = document.createElement("div");
      divTitlePrice.className = "title-price-div d-flex flex-column mb-2";
      /* card title */
      const title = document.createElement("h5");
      title.className = "card-title";
      title.textContent = book.title;
      /* price */
      const prezzo = document.createElement("p");
      prezzo.className = "card-text";
      prezzo.textContent = "Price: " + book.price + "$";

      /* div bottoni */

      const buttonsDiv = document.createElement("div");
      buttonsDiv.className = "buttons-div d-flex justify-content-center";

      /* bottone compra */

      const buttonBuy = document.createElement("a");
      buttonBuy.href = "#";
      buttonBuy.className = "btn btn-success mx-2 px-4";
      buttonBuy.textContent = "Buy";

      /* bottone scarta */

      const buttonDiscard = document.createElement("button");
      buttonDiscard.className = "btn btn-danger text-white mx-2";
      buttonDiscard.textContent = "Discard";

      /* aggiungo evento a btn discard */

      buttonDiscard.addEventListener("click", function () {
        const col = card.closest(".col-12, .col-sm-6, .col-md-4, .col-lg-3");
        if (col) {
          col.remove();
        }
      });

      /* appendo gli elementi */
      cardBody.appendChild(divTitlePrice);
      cardBody.appendChild(buttonsDiv);
      divTitlePrice.appendChild(title);
      divTitlePrice.appendChild(prezzo);
      buttonsDiv.appendChild(buttonBuy);
      buttonsDiv.appendChild(buttonDiscard);
      card.appendChild(image);
      card.appendChild(cardBody);
      booksCol.appendChild(card);
      booksRow.appendChild(booksCol);
    });
  })

  .catch((error) => console.error("Error fetching books", error));
