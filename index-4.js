// 'China'
let platillos1 = [ 
    'Peking Duck (Pato Pekinés)',
    'Mapo Tofu',
    'Dumplings (Jiaozi)'];


    let descrip1 = [ 'El Peking Duck es un plato emblemático de la cocina china, conocido por su piel crujiente y carne jugosa. El pato se cocina de manera especial para lograr una piel dorada y crujiente, que se sirve con crepes finas, cebollino y salsa hoisin. Este platillo combina texturas y sabores intensos en una experiencia culinaria sofisticada.',
        'El Mapo Tofu es un plato picante y sabroso originario de Sichuan, que presenta tofu suave en una salsa rica y especiada a base de pasta de frijol fermentado, chiles y carne de cerdo. La combinación de sabores picantes y umami con la textura delicada del tofu hace de este platillo una experiencia única y reconfortante.',
        'Los Dumplings, o Jiaozi, son bocados rellenos de carne o vegetales envueltos en una fina masa, cocidos al vapor, hervidos o fritos. Estos pequeños paquetes de sabor son ideales para compartir y vienen acompañados de una salsa de soja y vinagre para un toque extra de sabor.'
    ];

        let ingre1 =['Pato, crepes (tortillas finas), cebollino, salsa hoisin, pepino, azúcar.',
            'Tofu, carne de cerdo, pasta de frijol fermentado, chiles, ajo, jengibre, cebollas verdes, salsa de soja.',
            'Pollo o pavo, chiles secos, chocolate, almendras, especias (como canela, clavo), ajo, cebolla, tomate, caldo de pollo.Masa de dumpling, carne de cerdo o pollo, repollo, cebollinos, jengibre, ajo, salsa de soja, vinagre.'
        ];

        let price1 =['$35.00.',
            '$14.00.',
            '$12.00'

        ];
        let imag1 = ['https://www.unileverfoodsolutions.co.id/dam/ufs-id/recipes/Peking%20Duck.jpg',
            'https://www.seriouseats.com/thmb/CaR7btHrJgEO3OKZD1Z_795VmII=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__07__2021-02-12-Mapo-Tofu-MHOM-10-804db1211f1d47dbae505341d1e7b994.jpg',
            'https://t1.uc.ltmcdn.com/es/posts/9/5/9/como_hacer_dumplings_chinos_46959_orig.jpg'

        ];

        let platoo = document.querySelector('#listaChina');
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