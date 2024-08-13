console.clear();


 let paises = ['Italia',
                'México',
                'China',
                'Francia',
                'España'
 ];

 let imgpais =['https://www.recetasnestle.com.mx/sites/default/files/inline-images/plato-pasta-fetuccini-comida-italiana.jpg',
    'https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg',
    'https://cdn.sanity.io/images/jsdrzfkj/recepedia-global-production/f4e2c09fadb6448eeac86dc6b680a46aefb6d54c-1200x800.jpg?w=1200&h=800&auto=format'
,    'https://cdn7.kiwilimon.com/articuloimagen/30211/450x450/28403.jpg.webp',
'https://blog.hoteleus.com/wp-content/uploads/2022/07/gastronomia-de-Espana-PORTADA.jpg',

 ]

var contador = 0;

while(contador < paises.length){
    document.write("<div class='divPais'>");
        document.write("<button class='nombrePais'>")
        document.write(paises[contador]);
        document.write("</button>");
        document.write("<img class='imgpais' src="+ imgpais[contador]+">");
        document.write("<button class='verPais'>")
        document.write("<a href="+ paises[contador]+".html"+" class=linkslista> Ver platillos</a>");
        document.write("</button>");
    document.write("</div>");
    contador++;
}



