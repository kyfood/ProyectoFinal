let MenuItems = ["Beef", "Rice", "Wine"];
let CountMesas = {
    Mesa1: {Beef: 0, Rice: 0, Wine: 0},
    Mesa2: {Beef: 0, Rice: 0, Wine: 0},
    Mesa3: {Beef: 0, Rice: 0, Wine: 0},
    Mesa4: {Beef: 0, Rice: 0, Wine: 0}
}
let Precioproducto = {
    Mesa1: {Beef: 1000, Rice: 2000, Wine: 3000},
    Mesa2: {Beef: 1000, Rice: 2000, Wine: 3000},
    Mesa3: {Beef: 1000, Rice: 2000, Wine: 3000},
    Mesa4: {Beef: 1000, Rice: 2000, Wine: 3000}
}

let datosTable = [];

function Apertura (){
    let ingresecod = 0;
    ingresecod = prompt('Ingrese Su Codigo De Mesero');

    if(ingresecod == 101){
      document.getElementById ("mesero1").disabled = false
    }
    else if(ingresecod == 102){
        document.getElementById ("mesero2").disabled = false
     }
     else if(ingresecod == 103){
        document.getElementById ("mesero3").disabled = false
     }
     else if(ingresecod == 104){
        document.getElementById ("mesero4").disabled = false
     } 
     
    
    
}

function InitialValues() {
    var select = document.getElementsByClassName("menuItems");

    for (var i = 0; i < select.length; i++) {

        MenuItems.forEach((value) => {
            // New item
            let option = document.createElement("option");
            option.text = value;
            option.value = value;

            select[i].appendChild(option);
        });
    }
}

function AddTemplateItem(label, value) {
    let template = `<li class="list-group-item d-flex justify-content-between align-items-center">${label}<span class="badge bg-primary rounded-pill">${value}</span></li>`

    return template;
}

function AddTableItem(id, first, last, handle) {
    let template = `<tr><th scope="row">${id}</th><td>${first}</td><td>${last}</td><td>${handle}</td></tr>`

    return template;
}

function AddTableItemOption2(id, first, last, handle, mesa) {

    var count = datosTable.length + 1;
    var arr = {id: count ? count : 0, Mesero: '', producto: first, total: 0};
    var countTotalProduct = 0;

    switch (mesa) {
        case 1:
            if(first === 'Beef'){
                CountMesas.Mesa1.Beef = CountMesas.Mesa1.Beef +1
                countTotalProduct = CountMesas.Mesa1.Beef
                arr.total = Number(Precioproducto.Mesa1.Beef);
            }else if(first === 'Rice'){
                CountMesas.Mesa1.Rice = CountMesas.Mesa1.Rice +1
                countTotalProduct = CountMesas.Mesa1.Rice
                arr.total = Number(Precioproducto.Mesa1.Rice);
            }else if(first === 'Wine'){
                CountMesas.Mesa1.Wine = CountMesas.Mesa1.Wine +1
                countTotalProduct = CountMesas.Mesa1.Wine
                arr.total = Number(Precioproducto.Mesa1.Wine);
            }
            arr.Mesero = 'Mesa #1';
            break;
        case 2:
            if(first === 'Beef'){
                CountMesas.Mesa2.Beef = CountMesas.Mesa2.Beef +1
                countTotalProduct = CountMesas.Mesa2.Beef
                arr.total = Number(Precioproducto.Mesa2.Beef);
            }else if(first === 'Rice'){
                CountMesas.Mesa2.Rice = CountMesas.Mesa2.Rice +1
                countTotalProduct = CountMesas.Mesa2.Rice
                arr.total = Number(Precioproducto.Mesa2.Rice);
            }else if(first === 'Wine'){
                CountMesas.Mesa2.Wine = CountMesas.Mesa2.Wine +1
                countTotalProduct = CountMesas.Mesa2.Wine
                arr.total = Number(Precioproducto.Mesa2.Wine);
            }
            arr.Mesero = 'Mesa #2';
            break;
        case 3:
            if(first === 'Beef'){
                CountMesas.Mesa3.Beef = CountMesas.Mesa3.Beef +1
                countTotalProduct = CountMesas.Mesa3.Beef
                arr.total = Number(Precioproducto.Mesa3.Beef);
            }else if(first === 'Rice'){
                CountMesas.Mesa3.Rice = CountMesas.Mesa3.Rice +1
                countTotalProduct = CountMesas.Mesa3.Rice
                arr.total = Number(Precioproducto.Mesa3.Rice);
            }else if(first === 'Wine'){
                CountMesas.Mesa3.Wine = CountMesas.Mesa3.Wine +1
                countTotalProduct = CountMesas.Mesa3.Wine
                arr.total = Number(Precioproducto.Mesa3.Wine);
            }
            arr.Mesero = 'Mesa #3';
            break;
        case 4:
            if(first === 'Beef'){
                CountMesas.Mesa4.Beef = CountMesas.Mesa4.Beef +1
                countTotalProduct = CountMesas.Mesa4.Beef
                arr.total = Number(Precioproducto.Mesa4.Beef);
            }else if(first === 'Rice'){
                CountMesas.Mesa4.Rice = CountMesas.Mesa4.Rice +1
                countTotalProduct = CountMesas.Mesa4.Rice
                arr.total = Number(Precioproducto.Mesa4.Rice);
            }else if(first === 'Wine'){
                CountMesas.Mesa4.Wine = CountMesas.Mesa4.Wine +1
                countTotalProduct = CountMesas.Mesa4.Wine
                arr.total = Number(Precioproducto.Mesa4.Wine);
            }
            arr.Mesero = 'Mesa #4';
            break;
      }
var x = datosTable.find((iter)=> iter.Mesero === arr.Mesero)
if(x){
    for (let i = 0; i < datosTable.length; i++) {
        if(datosTable[i].Mesero === arr.Mesero){
            datosTable[i].total += Number(arr.total)
            break;
        }
    }
}else{
    datosTable.push(arr);
}
var pval = '';
var total = 0;

    for (let index = 0; index < datosTable.length; index++) {
        pval += "<tr>";
        pval += "<td>"+datosTable[index].id+"</td>";
        pval += "<td>"+datosTable[index].Mesero+"</td>";
        pval += "<td>"+datosTable[index].total+"</td>";
        pval += "</tr>";
        total =  Number(total) + Number(datosTable[index].total);
    }
    document.getElementById('salesItems').innerHTML=pval;
    document.getElementById('Total').innerHTML=total;

    var lista = document.getElementById(arr.Mesero);
    var ifExists = document.getElementById(`Li${first}${arr.Mesero}`);

    if(ifExists){
        document.getElementById(`total`+first+arr.Mesero).innerHTML= countTotalProduct * arr.total;
        document.getElementsByClassName(first+arr.Mesero)[0].firstElementChild.innerHTML = countTotalProduct;
    }else{
        lista.innerHTML += ` <li id="Li${first}${arr.Mesero}" class="list-group-item d-flex justify-content-between align-items-center">
        ${first} <span class="badge bg-primary rounded-pill" id="total${first}${arr.Mesero}">${arr.total}</span>   
        <a class="${first}${arr.Mesero}"><span class="badge bg-primary rounded-pill">1</span></a></li>`;
    }
    // Agregar un nuevo elemento li utilizando innerHTML
    

}

// Initial values and template defaults
InitialValues();