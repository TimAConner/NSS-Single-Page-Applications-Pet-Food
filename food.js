var products = (function(){
    let data;
    
     // Creates a dom element and returns it
    function createElement(element, text){
        let domElement = document.createElement(element),
        textNode = document.createTextNode(text);

        domElement.appendChild(textNode);

        return domElement;
    }

    // Outputs table of products to outputDiv
    function createTable(outputDiv, animal){
        let output = document.getElementById(outputDiv),
        tablePara = document.createElement("table"),
        foodProducts = data[`${animal}_products`];

        for(let brand = 0; brand < foodProducts.length; brand++){ // Loops through brands

            let trBrand = document.createElement("tr");
            trBrand.appendChild(createElement("td", foodProducts[brand].name));
            tablePara.appendChild(trBrand); // Adds brand row to table

            for(let type = 0; type < foodProducts[brand].types.length; type++){ // Loop through type of food in brands
                let tr = document.createElement("tr");
                let typeName = createElement("td", foodProducts[brand].types[type].type);
                tr.appendChild(typeName); // Creates type of food row to table
                
                let product = foodProducts[brand].types[type];
                for(let spec = 0; spec < product.volumes.length; spec ++){
                    let specName = product.volumes[spec].name,
                    specPrice = product.volumes[spec].price;

                    let tdInformation = createElement("td", `${specName} for ${specPrice}`);
                    tr.appendChild(tdInformation);
                }
                tablePara.appendChild(tr);
            }

        }
        output.appendChild(tablePara);
    }

    function loadData(animal, outputId){
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `${animal}Products.json`);
        xhr.addEventListener("load", function() {
            data = JSON.parse(this.responseText);
            createTable(outputId, animal);
        });
        xhr.send();   
    }

    return {
        loadData
    }
}());