// 'China'
let platillos1 = [ 
    'Coq au Vin',
    'Bouillabaisse',
    'Ratatouille'];


    let descrip1 = [ 'El Coq au Vin es un clásico de la cocina francesa, donde el pollo se cocina lentamente en vino tinto con champiñones, cebollas y panceta. Este estofado tiene una rica salsa llena de sabor, con la carne de pollo tierna y suculenta que absorbe todos los matices del vino y los aromáticos.',
        'La Bouillabaisse es una sopa de pescado tradicional de la región de Provenza, elaborada con una variedad de pescados y mariscos cocidos en un caldo de tomate y azafrán. Este plato se sirve con una salsa de rouille (ajo y azafrán) y pan crujiente, ofreciendo una explosión de sabores marinos y especiados.',
        ' Ratatouille es un plato vegetariano provenzal que consiste en una mezcla de verduras asadas, como berenjenas, calabacines, pimientos y tomates, cocidas con hierbas frescas. Este estofado de verduras es un ejemplo perfecto de la simplicidad y la frescura de la cocina francesa.'
    ];

        let ingre1 =['Pollo, vino tinto, champiñones, cebolla, panceta, ajo, zanahorias, caldos, hierbas (como tomillo y laurel).',
            'Pescados variados (como dorada y congrio), mariscos (como mejillones y camarones), caldo de pescado, tomate, azafrán, cebolla, ajo, rouille, pan.',
            'Berenjenas, calabacines, pimientos, tomates, cebolla, ajo, hierbas frescas (como tomillo y albahaca), aceite de oliva.'
        ];

        let price1 =['$35.00.',
            '$14.00.',
            '$12.00'

        ];
        let imag1 = ['https://www.unileverfoodsolutions.co.id/dam/ufs-id/recipes/Peking%20Duck.jpg',
            'https://www.seriouseats.com/thmb/CaR7btHrJgEO3OKZD1Z_795VmII=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__07__2021-02-12-Mapo-Tofu-MHOM-10-804db1211f1d47dbae505341d1e7b994.jpg',
            'https://t1.uc.ltmcdn.com/es/posts/9/5/9/como_hacer_dumplings_chinos_46959_orig.jpg'

        ];

        let platoo = document.querySelector('#listaFrancia');
var contador = 0;

function listmake(plat,des,ing,pri,ig){
    while(contador < plat.length){
        document.write("<div class='platIta'>");
                document.write("<p class='nomPlatillo'>"+ plat[contador]+"</p>");
                document.write("<strong> Descripción: </strong> "+ des[contador]+"<br> <br>");
                 document.write("<strong> Ingredientes:  </strong>"+ ing[contador]+"<br> <br>");
                document.write("<strong>Precio:  </strong>"+ pri[contador]+"<br> <br>");
                document.write("<div class='contimg'>");
                document.write("<img class='imag' src="+ ig[contador]+">");
                document.write("</div>");
        document.write("</div>");
        contador++;
    }
}

platoo.append(listmake(platillos1,descrip1,ingre1,price1,imag1));