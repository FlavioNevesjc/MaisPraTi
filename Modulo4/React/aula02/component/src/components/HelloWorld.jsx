const books = ['O hobbit','Harry Potter']
function HelloWorld(){
    
    const chosen = Math.random() > 0.5 ? books[0] : books[1]
    return (   
        
        <div>
            <h1>Hello World</h1>
            <p>{chosen}</p>
        </div>
    )
}

export default HelloWorld