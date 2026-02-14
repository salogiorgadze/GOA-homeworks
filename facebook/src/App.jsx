function App() {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 1200,
      description: "Apple-ის უახლესი სმარტფონი",
      image: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone_15_hero.png"
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      price: 1000,
      description: "Samsung-ის ფლაგმანი მოდელი",
      image: "https://s3.zoommer.ge/zoommer-images/thumbs/0186195_samsung-galaxy-s23-5g-s911bds-8256gb-lavender_550.jpeg"
    },
    {
      id: 3,
      name: "MacBook Pro",
      price: 2200,
      description: "ძლიერი ლეპტოპი პროფესიონალებისთვის",
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-macbook-pro-size-select-202601-14inch_FMT_WHH?wid=690&hei=720&fmt=jpeg&qlt=90&.v=1767812805139"
    },
    {
      id: 4,
      name: "Dell XPS 13",
      price: 1500,
      description: "მსუბუქი და მძლავრი ულტრაბუქი",
      image: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/Dell-XPS-13-9340-laptop.JPG"
    },
    {
      id: 5,
      name: "iPad Air",
      price: 800,
      description: "მძლავრი ტაბლეტი სამუშაოსა და გასართობად",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8gU2EZqLof7A3RHfbOJpSMCD_x9t6bdlGw&s"
    },
    {
      id: 6,
      name: "Sony WH-1000XM5",
      price: 400,
      description: "ხმაურის ჩამხშობი ყურსასმენები",
      image: "https://store.sony.com.au/dw/image/v2/ABBC_PRD/on/demandware.static/-/Sites-sony-master-catalog/default/dw2e089ba5/images/WH1000XM5S/WH1000XM5S.png"
    },
    {
      id: 7,
      name: "Apple Watch Series 9",
      price: 500,
      description: "ჭკვიანი საათი ჯანმრთელობის მონიტორინგისთვის",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCWux9QnsoyZP94uOJ8iKnrTRUEb32OzCpg&s"
    },
    {
      id: 8,
      name: "PlayStation 5",
      price: 700,
      description: "ახალი თაობის სათამაშო კონსოლი",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdcBuIMHZPa3SLfB-2kvorwi7DOBhew5CHQ&s"
    },
    {
      id: 9,
      name: "Canon EOS R6",
      price: 2500,
      description: "პროფესიონალური კამერა ფოტოგრაფებისთვის",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3mJ2Z1LsnRDe3imR9htUYfr9wQNvoNGWqw&s"
    },
    {
      id: 10,
      name: "GoPro Hero 12",
      price: 450,
      description: "ექშენ კამერა მოგზაურობისთვის",
      image: "https://static.ee.ge/Elite/92960a67-e34e-43b4-87b7-6a2ce8e66077_Thumb.jpeg"
    }
  ];
  const names = ['lina','salome','tamri','mariami']
  return (
    <div>
      {names.map((name, id) => (
        <p key={id}>{name}</p>
      ))}
    </div>

    // <div>
    //   <h1>products</h1>
    //   {products.map((product) => (
    //     <div key={product.id}>
    //       <img src={product.image} width='300'/>
    //       <h3>{product.name}</h3>
    //       <p>{product.description}</p>
    //       <p>{product.price}$</p>
    //       <hr />
    //     </div>
    //   ))}
    // </div>
  )
}
export default App
