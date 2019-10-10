function geraNegativo() {
    var negativoAltura = parseInt(document.getElementById("negativoAltura").value);
    var negativoLargura = parseInt(document.getElementById("negativoLargura").value);

    var inicioLinha= parseInt(document.getElementById("inicioLinha").value);
    var inicioColuna = parseInt(document.getElementById("inicioColuna").value);

    if((negativoAltura<1) || (negativoLargura<1) ){
        alert("Informe um número positivo!");
    }else{
    let tr = document.querySelectorAll('tr');
    tr.forEach(l => {

        if ((l.rowIndex>(inicioLinha-2)) && (l.rowIndex < negativoAltura)) {
            for (i = (inicioColuna-1); i < negativoLargura; i++) {
                if (l.cells[i].className == "branco") {
                    l.cells[i].className = "preto";
                } else {
                    l.cells[i].className = "branco";
                }

            }
        }
    })
}
  
}