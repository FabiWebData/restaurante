// 'México'
let platillos1 = [ 
    'Tacos al Pastor',
    'Enchiladas Verdes',
    'Mole Poblano'];


    let descrip1 = [ 'Los Tacos al Pastor son un delicioso plato callejero mexicano que presenta carne de cerdo marinada en achiote y especias, cocida en un trompo vertical. La carne se corta en tiras finas y se sirve en tortillas de maíz calientes, con piña, cebolla, cilantro y salsa picante. El contraste entre lo dulce de la piña y las especias de la carne ofrece un sabor único y adictivo.',
        'Las Enchiladas Verdes son tortillas de maíz rellenas de pollo o carne, bañadas en una salsa verde a base de tomatillos y chiles verdes. Se hornean con queso encima y se sirven con crema, cebolla y cilantro. Este platillo combina sabores frescos y picantes con la suavidad de la salsa y el queso fundido.',
        'El Mole Poblano es un rico y complejo platillo tradicional mexicano que consiste en pollo (o pavo) cocido en una salsa espesa de mole, hecha con una mezcla de chiles secos, chocolate, especias y otros ingredientes. El mole combina sabores dulces, picantes y ahumados, creando una experiencia culinaria profunda y multifacética.'
    ];

        let ingre1 =['Carne de cerdo, achiote, especias, piña, tortillas de maíz, cebolla, cilantro, salsa picante.',
            'Tortillas de maíz, pollo o carne, salsa verde (tomatillos, chiles verdes, cebolla, ajo), queso, crema, cebolla, cilantro.',
            'Pollo o pavo, chiles secos, chocolate, almendras, especias (como canela, clavo), ajo, cebolla, tomate, caldo de pollo.'
        ];

        let price1 =['$10.00',
            '$14.00',
            '$18.00'

        ];
        let imag1 = ['https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg',
            'https://i.ytimg.com/vi/xog07VwKbjw/maxresdefault.jpg',
            'https://assets.elgourmet.com/wp-content/uploads/2023/03/mole-_9IMJjkql3RCWT1eg6AHUD8PKyZLh7o-1024x683.png.webp'

        ];

        let platoo = document.querySelector('#listaMexico');
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