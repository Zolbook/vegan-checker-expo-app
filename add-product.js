const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productSchema = new mongoose.Schema({
  barcode: String,
  name: String,
  ingredients: [String],
});

const Product = mongoose.model('product', productSchema);

const products = [
  {
    barcode: '8680474921296',
    name: 'Dark chocolate biscuits',
    ingredients: ['Dark chocolate', 'Cocoa', 'sugar', 'cocoa butter', 'cocoa powder', 'emulsifier', 'wheat flour', 'vegetable oil', 'raising agent', 'thickener', 'shellac', 'E414', 'vanilla'],
  },
  {
    barcode: '6941349383871',
    name: 'Bioaqua lotion',
    ingredients: ['water', 'rice extract', 'glycerin', 'mineral oil', 'cetearyl alcohol', 'sucroset tristearate', 'xanthan gym', 'methyl parabon'],
  },
  {
    barcode: '8991002103788',
    name: 'Cappuccino good day',
    ingredients: ['sugar', 'non dairy creamer', 
    'instant coffee', 'cocoa powder', 'sodium caseinate', 'E551', 'E471', 'E481', 
    'synthetic cappuccino flavor', 'steviol glycosides natural sweetener', 'sodium caseinate', 'E471', 'E481', 'E551' ],
  },
  {
    barcode: '4600080501082',
    name: 'Коровка вафли',
    ingredients: ['Drinking water', 'sugar', 'wheat flour of the highest grade', 'refined deodorized (non-hydrogenated) coconut oil', 'whole milk powder', 'cocoa butter substitute', 'partially hydrogenated fraction of palm oil', 'emulsifiers: E492, soy lecithin', 'antioxidants: tocopherols, mixture concentrate, citric acid', 'refined deodorized sunflower oil', 'dry egg melange', 'cocoa powder', 'soy lecithin emulsifier', 'salt', 'flavoring Milk', 'baking powder - sodium bicarbonate', 'acidity regulator- citric acid'],
  },
  {
    barcode: '9556023331238',
    name: 'Rota potato chips',
    ingredients: ['Potatoes', 'vegetable oil', 'sugar', 'salt'],
  },

  {
    barcode: '01325614040',
    name: 'Honey peanuts',
    ingredients: ['peanuts', 'vegetable oil', 'sugar', 'salt', 'honey', 'glucose syrup', 'E491'],
  },
  {
    barcode: '8656021462017',
    name: 'Мовьёос',
    ingredients: ['овьёос', 'үзэм', 'ургамлын масло', 'хатаасан жимс', 'наранцэцгийн үр', 'бор сахар', 'синнамон'],
  },
  {
    barcode: '8652000100246',
    name: 'Цэнэг',
    ingredients: ['дорнын усан үзмийн өтгөрүүлсэн ханд', 'чихэр өвсний ханд', 'элсэн чихэр', 'натрийн цитрат', 'карамель']
  },
  {
    barcode: '1325682040',
    name: 'Coated coconut peanuts',
    ingredients: ['Peanuts', 'egg', 'flour', 'sugar', 'coconut cream', 'vegetable oil', 'salt', 'E491']
  },
  {
    barcode: '8936036027617',
    name: 'Orice Natural Snow Rice Cracker' ,
    ingredients: ['Japonica Rice 59.7%', 'Vegetable Oil (Palm oil)', 'Sugar', 'Potato Starch', 'Thickener (Ins 1420)', 'Iodized Salt', 'Hydrolysed Pea Protein', 
      'Natural Roasted Rice Flavor', 'Nature Identical Roasted Rice Flavor', 'Antioxidant (Ins 307B)']
  },
]
  


Product.insertMany(products)
  .then((result) => {
    console.log('Products inserted:', result);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error inserting products:', error);
  })
