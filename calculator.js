let x = document.querySelector("#X");
        let y = document.querySelector("#Y");
        function showSomme() {
            document.querySelector("h3").innerHTML = somme(
                Number(x.value),
                Number(y.value)
            );
        }
        function somme(x, y) {
            return "somme : " + (x + y);
        }
        function showdifference() {
            document.querySelector("h2").innerHTML = difference(
                Number(x.value),
                Number(y.value)
            );
        }
        function difference(x, y) {
            return "difference : " + (x - y);
        }
        function showproduit() {
            document.querySelector("h1").innerHTML = produit(
                Number(x.value),
                Number(y.value)
            );
        }
        function produit(x, y) {
            return "produit : " + (x * y);
        }
        function showdivision() {
            document.querySelector("h4").innerHTML = division(
                Number(x.value),
                Number(y.value)
            );
        }
        function division(x, y) {
              return "division : " + (x / y);

            }
            

        