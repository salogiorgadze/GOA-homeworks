const form = document.getElementById('form')
const dltag = document.getElementById('dltag')
const totalSpan = document.getElementById('total')
const clearBtn = document.getElementById('clearCart')
class Product{
    constructor(name,price,description){
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = 1;
    }
}
class CartManager{
    constructor(){
        this.cart = []
    }
    addProduct(product){
        const isexists = this.cart.find(p=> p.name === product.name)

        if(isexists){
            isexists.quantity ++
        } else{
            this.cart.push(product)
        }
        this.render()
    }
    increase(name){
        const product = this.cart.find(p=> p.name === name)
        product.quantity++;
        this.render()
    }
    decrease(name){
        const product = this.cart.find(p=> p.name === name)
        if (product.quantity>1){
            product.quantity --
        }
        this.render()
    }
    removeProduct(name){
        this.cart = this.cart.filter(p => p.name !== name)
        this.render()
    }
    clearCart(){
        this.cart = []
        this.render()
    }
    getTotal(){
        return this.cart.reduce((sum,p)=> sum +p.price*p.quantity,0)
    }
    render(){
        dltag.innerHTML = '';
        this.cart.forEach(p=>{
            const dt = document.createElement('dt');
            const dd = document.createElement('dd');

            dt.textContent = `${p.name} (x${p.quantity})`;

            dd.innerHTML = `
                Price: ${p.price}$ <br>
                Description: ${p.description} <br>
                <button onclick="cart.increase('${p.name}')">+</button>
                <button onclick="cart.decrease('${p.name}')">-</button>
                <button onclick="cart.removeProduct('${p.name}')">Remove</button>
            `;
            dltag.appendChild(dt)
            dltag.appendChild(dd)
        }
        )
        totalSpan.textContent = this.getTotal()
    }
}
const cart = new CartManager();

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const name = e.target.name.value
    const price = e.target.price.value
    const description = e.target.description.value

    const product = new Product(name, price, description);
    cart.addProduct(product);
    e.target.reset()
})

clearBtn.addEventListener("click", () => {
    cart.clearCart();
});