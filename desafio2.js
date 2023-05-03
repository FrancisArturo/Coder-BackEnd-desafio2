import ProductManager from "./manager/Manager.js";

const productManager = new ProductManager();

const agregarProductos = async () => {

    //Agregar productos

    await productManager.addProduct("Escuadra", "Escuadra para dibujo", 123.45, "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png", "Asc" , 123);
    await productManager.addProduct("Calculadora", "Calculadora cientifica", 234.56, "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png", "CAL" , 234);
    let result = await productManager.getProducts();
    console.log(result);
    
}



//Agregar producto con código repetido
const agregarProductoRepetido = async () => {
    let resultError = await productManager.addProduct("Escuadra", "Escuadra para dibujo", 123.45, "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png", "Asc" , 123);
    console.log(resultError);
}

//Agregar producto donde faltan datos
const agregarProductoFaltanDatos = async () => {
    let resultError = await productManager.addProduct("Escuadra", "Escuadra para dibujo", 123.45, "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png");
    console.log(resultError);   
}


//Buscar producto por id
const getProductById = async (id) => { 
    let result = await productManager.getProductById(id);
    console.log(result);
}

//Borrar producto por id
const deleteProductById = async (id) => {
    let result = await productManager.deleteProductById(id);
    console.log(result);
}

//Actualizar producto por id
const updateProductById = async (id, updateObj) => {
    let result = await productManager.updateProductById(id, updateObj);
    console.log(result);
}


//agregarProductos();


//agregarProductoRepetido();


//agregarProductoFaltanDatos();


//getProductById(2);


//updateProductById(2, {title: "Globo Terráqueo", description: "Globo terráqueo iluminado", price: 345.67, thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png", code: "GLO", stock: 345});


//deleteProductById(1);








