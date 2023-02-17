async function attachHomePage(){
    let container=document.querySelector(".container");

    container.innerHTML=`
    <h1>Telefoane</h1>
    <p><a class="button new-phone">Create new Telefon</a></p>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Marca</th>
                <th>Model</th>
                <th>Pret</th>
            </tr>
        </thead>
        <tbody class="container-telefoane"
        </tbody>
    </table>

    `;
    let data=await getAllPhones();
    attachRows(data);
    let btn=document.querySelector(".new-phone")

    btn.addEventListener("click",(e)=>{
        attachNewPhonePage();
    });

    let rowsContainer=document.querySelector(".container-telefoane");

    rowsContainer.addEventListener("click",async(e)=>{
        let obj=e.target.parentNode;

        let phoneProperties=data.children;

        const phone={
            phoneId:phoneProperties[0].innerHTML,
            marca:phoneProperties[1].innerHTML,
            model:phoneProperties[2].innerHTML,
            pret:phoneProperties[3].innerHTML,

        }
        attachUpdatePage(phone);
        
    });
}

function update(){
    let inp1=document.getElementById('marca');
    let inp2=document.getElementById('model');
    let inp3=document.getElementById('pret');

    const phone={
        marca:inp1.value,
        marca:inp2.value,
        pret:inp3.value,
    }

    updatePhone(phone);
}

async function attachUpdatePage(phone){
    let container=document.querySelector(".container");

    container.innerHTML=`
    <h1>Update phone</h1>
    <input name="phoneId" class="phoneId" type="hidden" value="${phone.phoneId}"/>

    <ul class="error"

    </ul>

    <p>
        <label for="marca">marca</label>
        <input name="marca" type="text" class="marca" value="${phone.marca}"  disabled>

    <p>
        <label for="model">Model</label>
        <input name="model" type="text" class="model" value="${phone.model}">
    </p>

    <p>
        <label for="pret">Pret</label>
        <input name="pret" type="text" class="pret" value="${phone.pret}">
    </p>

    

   <div>
        <button class="update">Update Phone</button>
        <button class="delete">Delete phone</button>
        <button class="cancel">Cancel </button>
   </div>
    
    `
    let btnCancel=document.querySelector(".cancel")
    btnCancel.addEventListener("click",()=>{
        attachHomePage();
    })
  

    let btnUpdate=document.querySelector(".update");


    btnUpdate.addEventListener("click",async()=>{

        let inp1 = document.querySelector(".marca");
        let inp2 = document.querySelector(".model");
        let inp3 = document.querySelector(".pret");

        let phone={
            marca:inp1.value,
            model:inp2.value,
            pret:inp3.value,
        };

       let data=await updatePhone(phone);

        attachHomePage();
    })

    let btnDelete=document.querySelector(".delete");

    btnDelete.addEventListener("click",async()=>{
        console.log("aici");
        let input = document.querySelector(".phoneId");

        let phoneId=input.value;

        let data=await deleteCar(phoneId);

        attachHomePage();
    });
  }

function attachNewPhonePage(){
    let container=document.querySelector('.container');

    container.innerHTML=`
    <form>
    <h1>New phone</h1>

    <p>
    <label for="marca">marca</label>
    <input name="marca" type="text"  id="marca" class="marca"  >
    </p>

    <p>
    <label for="model">Model</label>
    <input name="model" type="text"  id="model" class="model">
    </p>

    <p>
    <label for="pret">Pret</label>
    <input name="pret" type="text" class="pret" id="pret">
    </p>

  
       <div class="butoane">

    
            <button class="add">Add new Phone</button>
            
            <button class="cancel">Cancel</button>

        </div>
        
        </form>
    `
    
let btnAddNewPhone=document.querySelector(".add");
let inp0=document.getElementById('phoneId')
let inp1=document.getElementById("marca");
let inp2=document.getElementById("model");
let inp3=document.getElementById("pret");

btnAddNewPhone.addEventListener("click",async()=>{
    let phone={
        marca:inp1.value,
        model:inp2.value,
        pret:+inp3.value,
        
    }

    let data=await addPhone(phone);
    attachHomePage();
});

}

function createRow(phone){
    let tr=document.createElement("tr");

    tr.innerHTML=`
    
    <td id="id-${phone.id}" class="id">${phone.id}</td>
        <td>${phone.marca}</td>
        <td>${phone.model}</td>
		<td>${phone.pret}</td>
    `

    return tr;

}

function createRow(phone){
    let tr=document.createElement("tr");

    tr.innerHTML=`
    <td>${phone.id}</td>
    <th>${phone.marca}</th>
    <td>${phone.model}</td>
    <td>${phone.pret}</td>
    
    `

    return tr;
}

function attachRows(arr){
    let container=document.querySelector(".container");
    for(let i=0;i<arr.length;i++){
        container.appendChild(createRow(arr[i]));
    }

}


