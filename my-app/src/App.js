
import './App.css';

const App = () => {
  const sampleProd = {
      name: "Porsche Cayen",
      desc: '.',
      price: 1200000 ,
      src: "./i.webp",
    };

    return (
      <div>
        <h1>My Online Store</h1>
        <ProductCard product={sampleProd} />
      </div>
    );
    
};

export default App;
