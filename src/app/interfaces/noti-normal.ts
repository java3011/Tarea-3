export interface NotiNormal {
    id:number;
    idCategoria: number;
    titulo:string;
    contenido: string;
    contenido2:string;
    imag:string;
    fecha:string;
    autor:string;
}

export let ListaNot:Array<NotiNormal>=[
{
    id:4,
    idCategoria:7,
    titulo: "Noticia1",
    contenido: "Gran noticia1",
    contenido2:"Esta es una gran noticia",
    imag:"../../assets/img/14.jpg",
    fecha:Date().toString(),
    autor:"autor4"
},
{
    id:5,
    idCategoria:7,
    titulo: "Noticia2",
    contenido: "Gran noticia2",
    contenido2:"Esta es una gran noticia",
    imag:"../../assets/img/15.jpg",
    fecha:Date().toString(),
    autor:"autor4"
},
{
    id:6,
    idCategoria:7,
    titulo: "Noticia3",
    contenido: "Gran noticia3",
    contenido2:"Esta es una gran noticia",
    imag:"../../assets/img/16.jpg",
    fecha:Date().toString(),
    autor:"autor4"
},
{
    id:7,
    idCategoria:7,
    titulo: "Noticia4",
    contenido: "Gran noticia4",
    contenido2:"Esta es una gran noticia",
    imag:"../../assets/img/17.jpg",
    fecha:Date().toString(),
    autor:"autor4"
},
];