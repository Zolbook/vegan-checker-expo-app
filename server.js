const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const translate = require('translate-google-api')
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const ingredientSchema = new mongoose.Schema({
  name:{
    type: String,
    set: function(value){
      return value.toLowerCase()
    }
  },
  category: String
})
const Ingredients = mongoose.model('animalIngredients', ingredientSchema);
const translateIngredients = async (ingredientNames, targetLanguage)=>{
try {
  console.log('Translating', ingredientNames , 'to:' , targetLanguage);
  const translations = await translate(ingredientNames, {to: targetLanguage});
  console.log('Translated ingredients: ', translations);
  return translations.map((translation)=>translation.toLowerCase());
}catch(error){
  console.error('Error');
  throw error
}

}
app.post ('/api/ingredients', async(req, res)=>{
  try{
    const ingredients = req.body
    console.log('Received ingredients:', ingredients)
    const savedIngredients = Ingredients.insertMany(ingredients);
    console.log('Saved ingredients:', savedIngredients);
  }
  catch(err){
    console.error('Error saving ingredients', err);
    res.status(500).send({err:'Failed to save ingredients'})
  }
});

const cleanIngredientName = (name)=>{
  return name.replace(/[_]/g, "").trim().toLowerCase();
}
app.post('/api/check-vegan', async(req, res)=>{
  try{
    const ingredientNames = req.body.ingredients
    console.log('Received ingredients:', ingredientNames);
    const cleanedIngredients = ingredientNames.filter((name)=> name!==undefined && name!=="").map(cleanIngredientName);
    const translatedIngredients = translateIngredients(cleanedIngredients, 'en');
    const animalDerivedIngredients = Ingredients.find({category: 'animal-derived'});

    const nonVeganIngredients = []

    for (let ingredient of translatedIngredients) {
      let ingredientWords = ingredient.split('');
    
    for (let animalDerivedIngredient of animalDerivedIngredients){
      let cleanAnimalIngredient = animalDerivedIngredient.name.toLowerCase().trim();
    
    if (ingredientWords.includes(cleanAnimalIngredient)){
      nonVeganIngredients.push(animalDerivedIngredient.name)
    } 
  }

}
console.log('non vegan:', nonVeganIngredients);
res.json({isVegan: nonVeganIngredients.length===0,
          nonVeganIngredientNames: nonVeganIngredients})
} 
 catch(err) {
  console.error('Error ', err);
  res.status(500).json({err: 'Failed to check vegan status'})
 }
})




app.post('/api/products', async (req, res) => {
  try {
    const productData = req.body;
    console.log('Received product data:', productData);

    const newProduct = new Product(productData);
    const savedProduct = await newProduct.save();

    console.log('Saved product:', savedProduct);
    res.send({ message: 'Product saved successfully.' });
  } catch (error) {
    console.error('Error saving product:', error);
    res.status(500).send({ error: 'Failed to save product.' });
  }
});

app.get('/api/products/:barcode', async (req, res) => {
  try {
    const { barcode } = req.params;
    console.log('Searching for product with barcode:', barcode);

    const product = await Product.findOne({ barcode });

    if (product) {
      console.log('Found product:', product);
      res.send(product);
    } else {
      console.warn('Product not found');
      res.status(404).send({ message: 'Product not found.' });
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).send({ error: 'Failed to fetch product.' });
  }
});






app.get('/api/ingredients', async (req, res) => {
  try {
    const ingredients = await Ingredient.find({});
    res.send(ingredients);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch ingredients.' });
  }
});





app.listen(5000, '0.0.0.0', () => {
  console.log('Server is listening on port 5000');
});
