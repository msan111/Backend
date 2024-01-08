//ecmascript ile artik (version 12den sonra) import ile istenilen paketleri import edebiliriz) 
//type:commonjs yerine module olursa bu özellikleri kullaniriz
import superheroes from "superheroes";

const randomName = superheroes.random();

console.log("My superhero name is " + randomName);