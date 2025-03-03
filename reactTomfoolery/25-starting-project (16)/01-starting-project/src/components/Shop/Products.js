import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {id: "p1", price: 6, title: "MY FIRST BOOJK", description: "This is a book", },
  {id: "p2", price: 5, title: "MY second BOOJK", description: "This is anothedr book", },

]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => <ProductItem
            title={product.title}
            price={product.price}
            description={product.description}
            key={product.id}
            id={product.id}
          />
        )}

      </ul>
    </section>
  );
};

export default Products;
