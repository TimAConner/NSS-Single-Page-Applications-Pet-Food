var products = (function(){
    let dogFood = {
        "dog_brands": 
        [
            {
                "name": "Chuck wagon",
                "types": [
                {
                    "type": "all_natural",
                    "volumes": [
                    {
                        "name": "32oz",
                        "price": 9.99
                    },
                    {
                        "name": "64oz",
                        "price": 17.99
                    }
                    ]
                },
                {
                    "type": "standard",
                    "volumes": [
                    {
                        "name": "58oz",
                        "price": 12.99
                    },
                    {
                        "name": "72oz",
                        "price": 21.99
                    }
                    ]
                }
                ]
            },
            {
                "name": "Purina",
                "types": [
                {
                    "type": "puppy",
                    "volumes": [
                    {
                        "name": "16oz",
                        "price": 8.99
                    },
                    {
                        "name": "24oz",
                        "price": 14.99
                    }
                    ]
                },
                {
                    "type": "standard",
                    "volumes": [
                    {
                        "name": "58oz",
                        "price": 19.99
                    },
                    {
                        "name": "72oz",
                        "price": 24.99
                    }
                    ]
                }
                ]
            }
        ]
    };
    
    // Outputs table of products to outputDiv
    function createTable(outputDiv){
        let output = document.getElementById(outputDiv),
        tablePara = document.createElement("table"),
        dogFoods = dogFood.dog_brands;

        for(let brand = 0; brand < dogFoods.length; brand++){ // Loops through brands

            let trBrand = document.createElement("tr");
            trBrand.appendChild(createElement("td", dogFoods[brand].name));
            tablePara.appendChild(trBrand); // Adds brand row to table

            for(let type = 0; type < dogFoods[brand].types.length; type++){ // Loop through type of food in brands
                let tr = document.createElement("tr");
                let typeName = createElement("td", dogFoods[brand].types[type].type);
                let product = dogFoods[brand].types[type];

                tr.appendChild(typeName); // Creates type of food row to table
                
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

    // Creates a dom element and returns it
    function createElement(element, text){
        let domElement = document.createElement(element),
        textNode = document.createTextNode(text);

        domElement.appendChild(textNode);

        return domElement;
    }
    return {
        createTable //: createTable
    }
}());