function createRow(telefon){
    let tr=document.createElement("tr");

    tr.innerHTML=`
    <td>${telefon.id}</td>
    <td>${telefon.marca}</td>
    <td>${telefon.model}</td>
    <td>${telefon.pret}</td>

    `

    return tr;
}

function attachRows(arr){
    let container=document.querySelector(".container");
    for(let i=0;i<arr.length;i++){
        container.appendChild(createRow(arr[i]));
    }

}
