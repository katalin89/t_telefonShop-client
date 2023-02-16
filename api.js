function api(path,method,body=null){
    const url="http://localhost:8080/api/v1/"+path;

    const options={
        method,
        headers:{
            'Content-Type':'application/json;charset=utf-8',

        },
        mode:"cors"
    };

    if(body!==null){
        options.body=JSON.stringify(body);
    }
    return fetch(url,options);


}

async function getAllPhones(){
    let data=await api("telefoane",'GET');

    data=await data.json();

    return data;
}

async  function addPhone(phone){
    let data=await api("add",'POST',phone);

    return data.json();
}

async function getAllMarci(){
    let data=await api("telefoane/marci",'GET');

    data=await data.json();

    return data;
}

async function getAllPhonesByMarca(marca){
    let data=await api(`telefoane/${marca}`,'GET');

    data=await data.json();

     console.log("data1:"+data);

     return data;
}

async function deletePhone(phoneId){
    let data=await api(`delete/${phoneId}`,'DELETE');
    
}

async function updatePhone(phone){
    let data=await api('update','PUT',phone);

    return data;
}

async function returnById(id){
    let data=await api(`get/phone/${id}`,'GET');

    data=await data.json();

    console.log("data"+data);
    return data;
}