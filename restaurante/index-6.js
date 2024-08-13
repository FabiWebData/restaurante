// 'China'
let platillos1 = [ 
    'Paella',
    'Gazpacho',
    'Tortilla Española'];


    let descrip1 = [ 'La Paella es el plato emblemático de España, originario de Valencia. Se trata de un sabroso arroz cocido con una variedad de ingredientes como mariscos, pollo y conejo, sazonado con azafrán y otras especias. La combinación de sabores marinos, la textura del arroz y el aroma del azafrán hacen de este platillo una experiencia culinaria rica y satisfactoria.',
        'El Gazpacho es una sopa fría refrescante originaria del sur de España, ideal para los meses de verano. Hecho a base de tomates frescos, pimientos, pepinos y cebollas, este gazpacho se adereza con ajo, vinagre y aceite de oliva, creando un platillo ligero y lleno de sabor que resalta la frescura de los ingredientes.',
        'La Tortilla Española, también conocida como Tortilla de Patatas, es un clásico de la cocina española, que consiste en una omelette gruesa hecha con huevos, patatas y cebolla. Este plato sencillo pero sabroso se puede disfrutar tanto caliente como a temperatura ambiente, ofreciendo una textura esponjosa y un sabor delicioso.'
    ];

        let ingre1 =['Arroz, mariscos (como camarones y mejillones), pollo, conejo, pimientos, guisantes, tomate, azafrán, aceite de oliva, caldo.',
            'Tomates, pepinos, pimientos, cebolla, ajo, vinagre, aceite de oliva, pan (opcional), sal.',
            'Huevos, patatas, cebolla (opcional), aceite de oliva, sal, pimienta.'
        ];

        let price1 =['$35.00.',
            '$14.00.',
            '$12.00'

        ];
        let imag1 = ['https://www.unileverfoodsolutions.co.id/dam/ufs-id/recipes/Peking%20Duck.jpg',
            'https://www.seriouseats.com/thmb/CaR7btHrJgEO3OKZD1Z_795VmII=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__07__2021-02-12-Mapo-Tofu-MHOM-10-804db1211f1d47dbae505341d1e7b994.jpg',
            'https://t1.uc.ltmcdn.com/es/posts/9/5/9/como_hacer_dumplings_chinos_46959_orig.jpg'

        ];

        let platoo = document.querySelector('#listaEspaña');
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