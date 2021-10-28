export interface Noticias {
    id:number;
    idCategoria: number;
    titulo:string;
    contenido: string;
    contenido2:string;
    imag:string;
    fecha:string;
    autor:string;
}

export let ListaNoticias:Array<Noticias>=[
{
    id:1,
    idCategoria:3,
    titulo: "El juego del Calamar se convierte en la serie más visitada en Netflix",
    contenido: "Es una de las series mas vistas mundialmente en la plataforma Netflix.",
    contenido2:"A los pocos dias de su estreno arraso con las visitas en la plataforma a nivel mundial, siendo una de las series mas vistas en tan poco tiempo provocando que fuera tendencia en Netflix.",
    imag:"../../assets/img/11.jpg",
    fecha:Date().toString(),
    autor:"autor1"
},
{
    id:2,
    idCategoria:1,
    titulo: "Murió el rinoceronte más viejo",
    contenido: "Tras muchos años en cautiverio, el rinoceronte no logro volver a su refugio.",
    contenido2:"El rinoceronte blanco por nombre 'Toby' era el mas viejo del mundo, falleciendo el 6 de Octubre a la edad de 54 años, el animal vivia en cautiverio.",
    imag:"../../assets/img/13.jpg",
    fecha:Date().toString(),
    autor:"autor2"
},
{
    id:3,
    idCategoria:2,
    titulo: "Ciclismo - El regreso de Chris Froome",
    contenido: "Tras el accidente que sufrio en el año 2019, por fin Chris Froome se logra recuperar.",
    contenido2:"Después de un choque que sufrió en el año 2019 Froome quedo gravemente dejandolo fuera de la pista hasta este año 2021, donde volvio a participar del Tour de Francia",
    imag:"../../assets/img/12.jpg",
    fecha:Date().toString(),
    autor:"autor3"
}
];