const React= require('react')
const Default= require('./layout/Default')

function Show ({bread, index}) {
    console.log(bread.name)
    return (
        <Default>
                <h3>{bread.name}</h3>
        <p>
            and it
            {
            bread.hasGluten
            ? <span> does </span>
            : <span> does NOT </span>
            }
            have gluten.
        </p>
        <img src={bread.image} alt={bread.name} />
        <p>Baked by {bread.baker}</p>
        <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
        <form action= {`/breads/${bread.id}?_method=DELETE`} 
        method='POST'>
            <input type='submit' value="DELETE"/>
        </form>
        
        <a href="/breads"><button>Go home</button></a>
        </Default>
    )
}

module.exports= Show


