class User {
    constructor(nombre, apellido, books = [], mascotas = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.books = books;
        this.mascotas = mascotas;
    }

    getFullnombre() {
        return console.log(`${this.nombre} ${this.apellido}`);
    }
    
    AddMascotas(){
        this.mascotas.push({mascotas: mascotas})
    }

    countmascotas () {
        return console.log(`Tus mascotas son ${this.mascotas.length} en total`)
    }

    addBook(titulo, autor) {  
        this.books.push({titulo: titulo, autor: autor})
    }
    
    getBooknombres(){
        return console.log(this.books.map((books) => books.titulo + ' ' + books.autor))
    }
}

let user01 = new User(
    'Agustín',
    'Martearena',
    [
        {titulo: 'El toque de midas', 
        autor: 'Donald Trump & Robert Kiyosaki'},
        
        {titulo: 'Morir lo necesario', 
        autor: 'Alejandro G. Roemmers'}
    ],    
    [
        {mascotas: 'Simon'},
        {mascotas: 'Mateo'},
        {mascotas: 'Leopoldo'}
    ]
); 

user01.getFullnombre();
user01.countmascotas();
user01.getBooknombres();