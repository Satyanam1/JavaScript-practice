document.getElementById("btn1").addEventListener('click',mysearch);



async function mysearch(){
    
    let myData = "";
    let empno = document.getElementById('txtval').value;
    let api = `http://localhost:3000/employess/?empno=${empno}`;

    const obj = await fetch(api);
    const data = await obj.json();
    data.map((key)=>{
        myData=`
           <h1> empno: ${key.empno}</h1>
           <h2> name: ${key.name}</h2>
           <h2> city: ${key.city}</h2>
           <h2> salary: ${key.salary}</h2>
        
        `
    })
    document.getElementById('demo').innerHTML=myData

}