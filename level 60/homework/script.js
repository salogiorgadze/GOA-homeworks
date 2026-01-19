const form = document.getElementById('formElement'); // მოვიპოვეთ წვდომა form ზე
const tbody = document.getElementById('tbody'); // მოვიპოვეთ წვდომა tbody ზე

const products = JSON.parse(localStorage.getItem('products')) || []; // localStorage-დან იღებს პროდუქტების სიას, გარდაქმნის მასივად; თუ ცარიელია, ქმნის ცარიელ მასივს

const addItem = (product) => {
    const exists = products.find((obj) => obj.name === product.name); // ქმნის ფუნქციას და შემდეგ ეძებს მასივში პროდუქტს იმავე სახელით

    if(exists){
        alert('The product name already exists!'); // თუ არსებობს alert ით ეუბნება
        return;
    };

    products.push(product); // პროდუქტი ემატება პროდუქტებში

    localStorage.setItem('products', JSON.stringify(products)); // products მასივს გარდაქმნის ტექსტად და ინახავს localStorage-ში products გასაღებით
};

const deleteItem = (id) => {
    const productIndex = products.findIndex((product) => product.id === id);

    if(productIndex === -1){
        alert('Product does not exist with the given id');
        return;
    };

    products.splice(productIndex, 1);    
    localStorage.setItem('products', JSON.stringify(products));
    
    renderProductInTable();
};

const renderProductInTable = () => {
    tbody.innerHTML = '';

    products.forEach(product => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${product.name}</td>
            <td>${product.id}</td>
            <td><button onclick="deleteItem(${product.id})">Delete</button></td>
        `;

        tbody.appendChild(tr);
    });
};

form.addEventListener('submit', (e) => {    
    e.preventDefault();

    const productName = e.target.productName.value;

    const product = {
        name: productName,
        id: Date.now()
    };
    
    addItem(product);
    renderProductInTable();

    e.target.reset();
});

renderProductInTable();


// 3) შექმენით ფუნქცია სახელად sumOfElements რომელიც არგუმენტად იღებს რიცხვებს (ეს რიცხვები არ არის მოქცეული მასივში), გამოიყენეთ შესაბამისი operator - ი მოცემული დავალების შესასრულებლად

const sumOfElements = (...numbers)=>{
    let sum = 0;
    for (let num of numbers){
        sum+=num
    }
    return sum
}
console.log(sumOfElements(2,3,4,5,6,7))

// 4) შექმენით მასივი სადაც შეინახავთ თქვენი მეგობრების სახელებს, თქვენი დავალებაა რომ მოცემული მასივიდან ამოიღოთ იღოთ მნიშვნოლებები და შესაბამისი operator - ის გამოყენებით ჩასვათ მეორე მასივში, დაკოპირებული მასივიდან ამოიღეთ ერთ-ერთი ელემენტი და შეცვალეთ, კომენტარების ნტარების სახით ახსენით თუ რატომ შეიცვალა ორიგინალ მასივშიც იგივე index - ზე მყოფი ელემენტის მნიშვნელობა

let friends = ['mariam','nino','nene','taso','tusa']
let copied = [...friends]

console.log(friends)
console.log(copied)

copied[0]='niniko'
console.log(friends)
console.log(copied)
// იმიტომ არ შეიცვალა რომ copied არის დამოუკიდებელი მასივი და მასში ასახული ცვლილებები არ აისახება friends მასივზე


const car = {
    brand:'BMW',
    year:2025,
    color:'black',
    model:'F10'
}

let car2 = {
    ...car,
    price:15000,
    owner:'me'
}
console.log(car2)
console.log(car)

// რადგან car ობიექტში ყველა კუთვნილება არის PRIMITIVE მნიშვნელობა
// (string, number), ისინი კოპირდებიან VALUE-ის მიხედვით.