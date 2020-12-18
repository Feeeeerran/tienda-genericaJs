// fetch("https://ttda.000webhostapp.com/data/motherboards.json")
// .then(response=>response.json())
// .then(function(data) {
// 	var prodLista=data;
// 	Rellenar(prodLista);
// })


// Simulando el fetch

var prodLista=[{
	"nombre":"MSI A320M-A PRO MAX",
	"precio":"8722",
	"tipo":"motherboard",
	"id":"1",
	"descripcion":"Soporta procesadores AMD® Ryzen™ 1ra, 2da Y 3ra Generación",
	"informacion":"",
	"caracteristicas":""
},
{
	"nombre":"GIGABYTE GA-H110M-H",
	"precio":"8550",
	"tipo":"motherboard",
	"id":"2",
	"descripcion":"Soporte para procesadores de 7ma y 6ta Generación Intel® Core™",
	"informacion":"",
	"caracteristicas":""
},
{
	"nombre":"ASUS H310M-E",
	"precio":"8540",
	"tipo":"motherboard",
	"id":"3",
	"descripcion":"Intel® Socket 1151 for 8th Generation Core™ i7/Core™ i5/Core™ i3/Pentium®/Celeron®",
	"informacion":"",
	"caracteristicas":""
},
{
	"nombre":"ASUS H310M-R",
	"precio":"9000",
	"tipo":"motherboard",
	"id":"4",
	"descripcion":"Intel® Socket 1151 para 8 º Generación Core ™ i7 / Core ™ i5 / Core ™ i3 / Pentium® / Celeron® procesadores",
	"informacion":"",
	"caracteristicas":""
},
{
	"nombre":"GIGABYTE H310M M.2 2.0 BOX M-ATX",
	"precio":"8400",
	"tipo":"motherboard",
	"id":"5",
	"descripcion":"Chipset: Intel® H310 Express Chipset para 8 º Generación Core ™ i7",
	"informacion":"",
	"caracteristicas":""
},
{
	"nombre":"MSI H310M POR-VDH PLUS",
	"precio":"7800",
	"tipo":"motherboard",
	"id":"6",
	"descripcion":"Soporta 9 º / 8 º Gen Intel ® Core ™ / Pentium ® Oro / Celeron ®",
	"informacion":"",
	"caracteristicas":""
},
{
	"nombre":"GIGABYTE E1 6010N",
	"precio":"6800",
	"tipo":"motherboard",
	"id":"7",
	"descripcion":"Soporte para Ryzen™ 1ra, 2da Y 3ra Generación",
	"informacion":"",
	"caracteristicas":""
},
{
	"nombre":"MSI A68HM-E33 FM2+",
	"precio":"6100",
	"tipo":"motherboard",
	"id":"8",
	"descripcion":"AMD A68H con soporte para Ryzen™ 1ra, 2da Y 3ra Generación ",
	"informacion":"",
	"caracteristicas":""
},
{
	"nombre":"ASROCK FM2A68M-DG3+",
	"precio":"5600",
	"tipo":"motherboard",
	"id":"9",
	"descripcion":"Supports Socket FM2+ 95W / FM2 100W processors",
	"informacion":"",
	"caracteristicas":""
}]


Rellenar(prodLista)
function Rellenar(prodLista) {
	// var large = '<div class="col-md-4 "><div class="card cardProduct albumSection_producto"><a href="producto/lamother.html" class="text-decoration-none"><img src="img/motherboards/mother1.jpg" class="card-img" alt="producto"><div class="card-body albumSection_producto_body"><p class="card-text albumSection_producto--name">MSI A320M-A PRO MAX</p><p class="card-text albumSection_producto--text">Soporta procesadores AMD® Ryzen™ 1ra, 2da Y 3ra Generación</p><p class="card-textalbumSection_producto--price">$ 8.722</p></div></a></div></div>'


	var i=0;


	prodLista.forEach( producto=>{
		$(".albumSection .row").append(`<div class="col-md-4 "><div class="card cardProduct albumSection_producto"><a id="mother${i}" href="producto/lamother.html" class="text-decoration-none"></a></div></div>`);

		$(`#mother${i}`).append(`<img src="img/motherboards/mother${i+1}.jpg" class="card-img" alt="producto">`).append(
			'<div class="card-body albumSection_producto_body"></div>');

		$(`#mother${i}>div`).append(
			`<p class="card-text albumSection_producto--name">${prodLista[i].nombre}</p>`,
			`<p class="card-text albumSection_producto--text">${prodLista[i].descripcion}</p>`,
			`<p class="card-text albumSection_producto--price">${prodLista[i].precio}</p>`);
		i++;
	});
};
