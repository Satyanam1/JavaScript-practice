let arr=[
    {
        Team: 'CSK',
        primary: 'yellow',
        secondary:'green'
    },

     {
        Team: 'RCB',
        primary: 'red',
        secondary:'black'
    },

     {
        Team: 'KKR',
        primary: 'purple',
        secondary:'gold'
    },

     {
        Team: 'DC',
        primary: 'blue',
        secondary:'white'
    },

     {
        Team: 'SRH',
        primary: 'orange',
        secondary:'black'
    },

     {
        Team: 'GT',
        primary: 'dark blue',
        secondary:'yellow'
    },

     {
        Team: 'RY',
        primary: 'pink',
        secondary:'white'
    },

     {
        Team: 'LSG',
        primary: 'blue',
        secondary:'black'
    },

     {
        Team: 'MI',
        primary: 'blue',
        secondary:'gold'
    },

     {
        Team: 'PBKS',
        primary: 'red',
        secondary:'black'
    },
 

]

let btn = document.querySelector('button')
let h1 = document.querySelector('h1')

btn.addEventListener('click',function(){
    let num = Math.floor(Math.random()*arr.length);
    let winner = arr[num]
    h1.innerHTML = winner.Team;
    h1.style.backgroundColor=winner.primary;
    h1.style.color = winner.secondary;    
    
})


