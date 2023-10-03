let listItem=document.getElementById('foods');

let checkBox=document.querySelectorAll('input[type="checkbox"]');

document.getElementById('submit').addEventListener('click',getData);

let result=[];

function getData(){
    result=[];
    checkBox.forEach(item=>{
        if(item.checked){
            result.push(item.value);
        }    
    })
    if(result.length<=2){
        alert('minimum select two items');
    }
    
    document.querySelector('.output').textContent=result;
}


function addHTMLTableRow(){
    let table=document.getElementById('tab'),
        newRow=table.insertRow(table.length),
        cell1=newRow.insertCell(0),
            cell2=newRow.insertCell(1),
            cell3=newRow.insertCell(2),
            cell4=newRow.insertCell(3),
            cell5=newRow.insertCell(4),
            cell6=newRow.insertCell(5),
            cell7=newRow.insertCell(6),
            cell8=newRow.insertCell(7);
           
            Fname=document.getElementById('fname').value,
            lname=document.getElementById('lname').value,
            Address=document.getElementById('address').value,
            Pincode=document.getElementById('pincode').value,
            Gender=document.getElementById('gender').value,
            State=document.getElementById('state').value,
            Country=document.getElementById('country').value;
            food=document.querySelector('.output').textContent=result;
            
        
        
        cell1.innerHTML=Fname;
        cell2.innerHTML=lname;
        cell3.innerHTML=Address;
        cell4.innerHTML=Pincode;
        cell5.innerHTML=Gender;
        cell6.innerHTML=State;
        cell7.innerHTML=Country;
        cell8.innerHTML=food;
    
    
    }


let btnclear=document.querySelector('#clear');

let input=document.querySelectorAll('input[type="text"]');

btnclear.addEventListener('click',()=>{
    input.forEach(inputs=>inputs.value='');
})