fetch("http://localhost:8080/api/v1/telefoane").then(data=>{
    return data.json();
}).then(data=>{
    attachRows(data);
})

/*fetch("http://localhost:8080/api/v1/masini").then(data=>{
  return data.json();
}).then(data=>{


    attachRows(data);
})*/