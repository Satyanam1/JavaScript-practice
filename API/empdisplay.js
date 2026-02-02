let Table = `<table border="1" width = "600" bgcolor="pink">
            <tr>
                <th>Emp no </th>
                <th>name </th>
                <th>city </th>
                <th>salary </th>
            
            
            </tr>
            `


async function dataDispaly(){
    const Obj = await fetch ("http://localhost:3000/employess");
    const Data = await Obj.json();
    Data.map((key)=>{
        Table+=`<tr>
                  <td>${key.empno}</td>
                  <td>${key.name}</td>
                  <td>${key.city}</td>
                  <td>${key.salary}</td>
          </tr>
        `
    })

    Table+="</table>"
    document.getElementById('demo').innerHTML=Table
}

dataDispaly();