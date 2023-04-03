//de sters  si create
async function attachHomePage(){
    let container=document.querySelector(".container");

    container.innerHTML=`
    <h1>Phones</h1>
	<p><a class="button new-phone">Create New Phone</a></p>
  
	<table>
		<thead>
			<tr class="container-sort">

            <th class="id">Id</th>
			<th class="marca">Marca</th>
			<th class="model">Model</th>
			<th class="pret">Pret</th>
				
			</tr>
		</thead>
		<tbody class="container-telefoane">
		
		</tbody>
	</table>

    `;
    let data=await getAllPhones();
    attachRows(data);

    let containerSort=document.querySelector(".container-sort");

    containerSort.addEventListener("click",async(e)=>{
        e.preventDefault;
            let data=e.target;

            if(data.classList.contains("pret")){
                let vec=await sortByPrice();
                attachRows(vec);
            }else if(data.classList.contains("marca")){

                let vec=await sortByMarca();

                attachRows(vec);

            }else if(data.classList.contains("model")){
                let vec=await sortByModel();

                attachRows(vec);
            }
        
    });
   
    let btnNewPhone=document.querySelector(".new-phone")

    btnNewPhone.addEventListener("click",(e)=>{
        attachNewPhonePage();
    });

    let rowsContainer=document.querySelector(".container-telefoane");

    rowsContainer.addEventListener("click",(e)=>{
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
        <label for="marcaInp">marca</label>
        <input name="marca" type="text" class="marca" value="${phone.marca}"  disabled>

    <p>
        <label for="modelInp">Model</label>
        <input name="model" type="text" class="model" value="${phone.model}">
    </p>

    <p>
        <label for="pretInp">Pret</label>
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

        let erors=[];

        
        
        if(inp2.value==""){
            erors.push("trebuie pusa modelul");
            inp2.getElementsByClassName.borderColor="red";
        }

        if(inp3.value==0){
            erors.push("trebuie pusa pretul");

            inp3.getElementsByClassName.borderColor="red";
        }

        if(erors.length>0){
            let errorContainer=document.querySelector(".error");

            let h1=document.createElement("h1");
            h1.textContent="Oooops";
            errorContainer.appendChild(h1);

            for(let i=0;i<erors.length;i++){

                let li=document.createElement("li");

                li.textContent=erors[i];

                errorContainer.appendChild(li);
            }
        }else{
            let errorContainer=document.querySelector(".error");

            errorContainer.innerHTML="";
        }

        if(erors.length==0){

            let data=await updatePhone(phone);

            attachHomePage();
        }
    })

    let btnDelete=document.querySelector(".delete");

    btnDelete.addEventListener("click",async()=>{
        console.log("aici");
        let input = document.querySelector(".phoneId");

        let phoneId=input.value;

        let data=await deletePhone(phoneId);

        attachHomePage();
    });
  }

function attachNewPhonePage(){
    let container=document.querySelector(".container");

    container.innerHTML=`
    
    <h1>New phone</h1>

    <ul class="error">
            
    </ul>

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
        
        
    `;

    let btnCancel=document.querySelector(".cancel")
    btnCancel=addEventListener("click",()=>{
        attachHomePage();
    })
    
let btnAddNewPhone=document.querySelector(".add");
let inp0=document.getElementById('phoneId')
let inp1=document.getElementById("marca");
let inp2=document.getElementById("model");
let inp3=document.getElementById("pret");

btnAddNewPhone.addEventListener("click",async()=>{

    let inp1 = document.querySelector(".marca");
    let inp2 = document.querySelector(".model");
    let inp3 = document.querySelector(".pret");
    
    let phone={
        marca:inp1.value,
        model:inp2.value,
        pret:+inp3.value,
        
    }

    let erors=[];
    if(inp1.value=="" &&inp2.value==""&&inp3.value==0){
        erors.push("Nu ati completat campurile");
    }

    if(inp1.value==""){
        erors.push("Trebuie pusa marca");
        inp1.style.borderColor="red";
    }

    if(inp2.value==""){
        erors.push("trebuie pusa modelul");
        inp2.style.borderColor="red";
    }
    if(inp3.value==0){
        erors.push("Trebuie pusa pretul");
        inp3.style.borderColor="red";
    }

    if(erors.length>0){
        let errorContainer=document.querySelector(".error");
        errorContainer.innerHTML="";
        let h1=document.createElement("h1");
        h1.textContent="Oooops";
        errorContainer.appendChild(h1);


        for(let i=0;i<erors.length;i++){
            let li=document.createElement("li");

            li.textContent=erors[i];

            errorContainer.appendChild(li);
        }
       
    }
    else{
        let data=await addPhone(phone);
        attachHomePage();
    }
   
})
}

function createRow(phone){
    let tr=document.createElement("tr");

    tr.innerHTML=`
    
        <td >${phone.id}</td>
        <th>${phone.marca}</th>
        <td>${phone.model}</td>
		<td>${phone.pret}</td>
    ` ;

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
    let container=document.querySelector(".container-telefoane");
    container.innerHTML="";
    for(let i=0;i<arr.length;i++){
        container.appendChild(createRow(arr[i]));
    }

}


