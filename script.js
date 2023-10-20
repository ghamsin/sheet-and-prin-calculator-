function calculateQuantity() {
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);
    var paperLength = parseFloat(
      document.getElementById("paperLength").value
    );
    var paperWidth = parseFloat(
      document.getElementById("paperWidth").value
    );
    var productCount = parseFloat(
      document.getElementById("productCount").value
    );

    var quantity =
      Math.floor(paperLength / length) * Math.floor(paperWidth / width);
    var paperCount = Math.ceil(productCount / quantity);

    document.getElementById("quantity").value = quantity;
    document.getElementById("paperCount").value = paperCount;
  }