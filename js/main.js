let elFrom = document.querySelector('.form')
let elFrom1 = document.querySelector('.form1')

elFrom.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    let elVal = e.target.elements


    fetch('https://63dcabf6367aa5a7a4ffc848.mockapi.io/test',{
        method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userId:elVal.userId.value,title:elVal.title.value,body:elVal.body.value})
    })
    .then((res)=> res.json())
    .then((data)=> console.log(data))
})



elFrom1.addEventListener('submit', (e)=>{
    e.preventDefault()

    let elVal = e.target.elements.id

    fetch(`https://63dcabf6367aa5a7a4ffc848.mockapi.io/test/${id}`,{
        method : 'POST'
    })


})