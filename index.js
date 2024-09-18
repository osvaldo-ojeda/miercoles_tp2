function inicio() {
  console.log("inicio");
}

function time() {
  setTimeout(() => {
    console.log("time");
  }, 1000);
}

function promesa(boolean) {
  return new Promise((resolve, reject) => {
    if (boolean) {
      return resolve("promesa ok");
    } else {
      reject("promesa no ok");
    }
  });
}

function jsonPlaceHolder() {
  return fetch("https://jsonplaceholder.typicode.com/todo/1");
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
}

async function rm() {
  try {
    const data = await fetch("https://rickandmortyapi.com/api");
    const dataJson = await data.json();
    console.log(`🚀 ~ rm ~ data:`, dataJson);
    //     return dataJson
  } catch (error) {
    console.log(`🚀 ~ rm ~ error:`, error);
  }
}

function fin() {
  console.log("fin");
}

inicio();
time();
// console.log(promesa(true))
promesa(true)
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => console.log("final de la promesa"));
jsonPlaceHolder()
  .then((response) => {
    if (response.statusText != "OK") {
      throw "error en jsonplaceholder";
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// console.log(rm())
rm();
fin();
