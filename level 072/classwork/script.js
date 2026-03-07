// function createP(id, className) {
//   let p = document.createElement("p")

//   p.id = id
//   p.className = className

//   return p;
// }


import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container)

const div = (
    <div>
        <h1>Hello</h1>
        <p>sjdsjslbcjc</p>
    </div>
)
root.render(div)