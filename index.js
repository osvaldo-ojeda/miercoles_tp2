const decirHola= require("./funciones/decirHola")
const numeroMayor=require("./funciones/numeroMayor")
const sumaNumeros = require("./sumaNumeros")
const abbrevName=require("./funciones/abbrevName")
const oneProperty=require("./funciones/oneProperty")


// // decirHola()
// numeroMayor([4,6,2,1])
// sumaNumeros([10, 5, 20, 15])
// abbrevName("sam harris ojeda") 
let arreglo = [ { name: "Kuka", edad:3 }, { name: "Canela", edad:4 } ]
oneProperty(arreglo, "edad") 
oneProperty(arreglo, "name")
