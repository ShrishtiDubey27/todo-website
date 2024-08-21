let list=[];

function additem()
{
 let inputval = document.getElementById("in").value ;
 let inputfate= document.querySelector('#date').value;
   list.push({item : inputval , duedate: inputfate});

   document.getElementById("in").value='';
   document.querySelector('#date').value='';
   display();
}

function display()
{
    let newhtml='';
    for(let i=0;i<list.length;i++)
    {
        newhtml += `
        
          <span>${list[i].item}</span>
          <span>${list[i].duedate}</span>
          <button  class="delete"  onclick=" list.splice(${i},1) ;
                            display();
                          ">DELETE
           </button>
       `
    }
    document.querySelector('#cont').innerHTML= newhtml;
 
}