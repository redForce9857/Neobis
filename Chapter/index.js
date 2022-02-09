const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.end(`
    <div>
    <h1>HOME  PAGE</h1>
        <nav>
            <ul>
                <li>
                    <a href="/">HOME</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
    </div>
    
    `)
})
app.get('/about', (req, res)=>{
    res.end(`
    <div>
    <h1>ABOUT  PAGE</h1>
        <nav>
            <ul>
                <li>
                    <a href="/">HOME</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
    </div>
    `)
})

app.listen(PORT, () =>{
    console.log('Server is running');
})

