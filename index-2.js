console.clear();

// ITALIA
let platillos = [ 
    'Pizza Margherita',
    'Lasagna',
    'Risotto'];

// Descripcion, ingredientes, precio 

let descrip = [ 
    'La Pizza Margherita es un clásico de la cocina italiana, caracterizada por su sencilla pero deliciosa combinación de ingredientes. Se elabora con una base de masa de pizza cubierta con una salsa de tomate casera, mozzarella fresca y hojas de albahaca. Se completa con un toque de aceite de oliva virgen extra y una pizca de sal, creando una mezcla perfecta de sabores frescos y aromáticos.',
        'La Lasagna es un reconfortante plato italiano que consiste en capas de pasta ancha y plana intercaladas con un rico ragú de carne, una suave bechamel y queso mozzarella. Todo se hornea hasta que se obtiene una textura cremosa y dorada. Cada bocado ofrece una combinación de sabores profundos y una textura abundante y satisfactoria.',
      ' El Risotto es un elegante plato italiano de arroz cremoso cocido lentamente en caldo, que se puede personalizar con una variedad de ingredientes. Generalmente preparado con arroz arborio, se mezcla con ingredientes como champiñones, mariscos o espárragos, y se remata con queso parmesano rallado para una textura rica y un sabor profundo. Cada cucharada ofrece una experiencia suave y satisfactoria, perfecta para cualquier ocasión.'
];

let ingre =[
    'Masa de pizza, salsa de tomate, mozzarella fresca, albahaca, aceite de oliva virgen extra, sal.',
    'Pasta para lasagna, carne molida de res, cebolla, zanahoria, tomate, bechamel, queso mozzarella, queso parmesano, aceite de oliva, especias (como orégano y albahaca).',
        'Arroz arborio, caldo (vegetal o de pollo), cebolla, vino blanco, queso parmesano, mantequilla, aceite de oliva, ingredientes adicionales según la variedad (como champiñones, mariscos, espárragos, etc.).'
    ];


let price =[
            '$12.00.',
            '$16.00.',
            '$18.00.'
];

let imag = [
    'https://images.prismic.io/eataly-us/ed3fcec7-7994-426d-a5e4-a24be5a95afd_pizza-recipe-main.jpg?auto=compress,format',
     'https://www.cento.com/images/recipes/pasta/traditional_lasagne.webp',
    'https://www.comedera.com/wp-content/uploads/2013/06/receta-de-risotto-de-mariscos.jpg'
 ];




        

let plato = document.querySelector('#listaItalia');
        
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



plato.append(listmake(platillos,descrip,ingre,price,imag));




