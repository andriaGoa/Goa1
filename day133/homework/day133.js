const fetchData = async () =>{
    const num = Math.floor(Math.random() * 11) 
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${num}`)
    const result = await response.json()
    console.log(result)
}
fetchData()

const FetchData = async () =>{
    const num = Math.floor(Math.random() * 151) 
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${num}`)
    const result = await response.json()
    console.log(result)
}
FetchData()