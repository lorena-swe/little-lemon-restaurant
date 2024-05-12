import db from './firebaseConfig';

// Fetch all products
export const fetchProducts = async () => {
  const productsRef = db.collection('products');
  const snapshot = await productsRef.get();
  const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return products;
};

// Create products
export const createProducts = async () => {
  const veganSushiData = {
    Name: 'Vegan Sushi Rolls',
    Category: 'Appetizers',
    Description: 'We rollin\' along with you into a vegan world with these "sushi" rolls. Also really healthy!',
    Price: 10.99,
    ImageSource: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }

  const productsRef = db.collection('products');
  productsRef.doc("veganSushi").set(veganSushiData);
};