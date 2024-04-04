const axios = require('axios');
async function addIngredients() {
  try {
    const response = await axios.post('http://192.168.1.6:5000/api/ingredients',
      [
        {
          "name": "gelatin",
          "category": "animal-derived"
        },
        {
          "name": "casein",
          "category": "animal-derived"
        },
        {
          "name": "lactose",
          "category": "animal-derived"
        },
        {
          "name": "whey",

          "category": "animal-derived"
        },
        {
          "name": "carmine",

          "category": "animal-derived"
        },
        {
          "name": "honey",

          "category": "animal-derived"
        },
        {
          "name": "shellac",

          "category": "animal-derived"
        },
        {
          "name": "lard",

          "category": "animal-derived"
        },
        {
          "name": "tallow",

          "category": "animal-derived"
        },
        {
          "name": "anchovy",

          "category": "animal-derived"
        },

        {
          "name": "meat",

          "category": "animal-derived"
        },
        {
          "name": "milk protein",
          "category": "animal-derived"
        },
        {
          "name": "milk",
          "category": "animal-derived"
        },

        {
          "name": "amino acids",

          "category": "animal-derived"
        },
        {
          "name": "Albumen",

          "category": "animal-derived"
        },
        {
          "name": "Albumin",

          "category": "animal-derived"
        },
        {
          "name": "Allantoin",

          "category": "animal-derived"
        },
        {
          "name": "Alpha-Hydroxy Acids",

          "category": "animal-derived"
        },
        {
          "name": "Ambergris",

          "category": "animal-derived"
        },
        {
          "name": "Aminosuccinate Acid",

          "category": "animal-derived"
        },
        {
          "name": "Angora",

          "category": "animal-derived"
        },
        {
          "name": "animal fats",

          "category": "animal-derived"
        },
        {
          "name": "Arachidonic Acid",

          "category": "animal-derived"
        },
        {
          "name": "Arachidyl Proprionate",

          "category": "animal-derived"
        },
        {
          "name": "beeswax",

          "category": "animal-derived"
        },

        {
          "name": "Vitamin H",

          "category": "animal-derived"
        },


        {
          "name": "Calciferol",

          "category": "animal-derived"
        },
        {
          "name": "Caprylamine Oxide",

          "category": "animal-derived"
        },
        {
          "name": "Capryl Betaine",

          "category": "animal-derived"
        },
        {
          "name": "milk",

          "category": "animal-derived"
        },
        {
          "name": "Caprylic Acid",

          "category": "animal-derived"
        },
        {
          "name": "Caprylic Triglyceride",

          "category": "animal-derived"
        },
        {
          "name": "Carbamide",

          "category": "animal-derived"
        },
        {
          "name": "Carminic Acid",

          "category": "animal-derived"
        },
        {
          "name": "Carotene",

          "category": "animal-derived"
        },
        {
          "name": "Sodium Caseinate",

          "category": "animal-derived"
        },
        {
          "name": "acid casein",

          "category": "animal-derived"
        },
        {
          "name": "activated carbon",

          "category": "animal-derived"
        },
        {
          "name": "adipic acid",

          "category": "animal-derived"
        },
        {
          "name": "hexanedioic acid",

          "category": "animal-derived"
        },
        {
          "name": "alanine",

          "category": "animal-derived"
        },
        {
          "name": "aspartic acid",

          "category": "animal-derived"
        },
        {
          "name": "calcium caseinate",

          "category": "animal-derived"
        },
        {
          "name": "capric acid",

          "category": "animal-derived"
        },
        {
          "name": "carminic acid",

          "category": "animal-derived"
        },
        {
          "name": "fining agent",

          "category": "animal-derived"
        },
        {
          "name": "clarifying agent",

          "category": "animal-derived"
        },
        {
          "name": "clarifier",

          "category": "animal-derived"
        },
        {
          "name": "cochineal",

          "category": "animal-derived"
        },
        {
          "name": "stearic acid",

          "category": "animal-derived"
        },
        {
          "name": "palmitic acid",

          "category": "animal-derived"
        },
        {
          "name": "isinglass",

          "category": "animal-derived"
        },
        {
          "name": "keratin",

          "category": "animal-derived"
        },
        {
          "name": "L-cystine",

          "category": "animal-derived"
        },
        {
          "name": "L-cysteine",

          "category": "animal-derived"
        },
        {
          "name": "lac-resin",

          "category": "animal-derived"
        },


        {
          "name": "lard oil",

          "category": "animal-derived"
        },
        {
          "name": "pork oil",

          "category": "animal-derived"
        },
        {
          "name": "lipase",

          "category": "animal-derived"
        },
        {
          "name": "modified starch",

          "category": "animal-derived"
        },
        {
          "name": "myristic acid",

          "category": "animal-derived"
        },
        {
          "name": "n-tetradecanoic acid",

          "category": "animal-derived"
        },
        {
          "name": "oleic acid",

          "category": "animal-derived"
        },
        {
          "name": "cis-9-octadecenoic acid",

          "category": "animal-derived"
        },
        {
          "name": "pancreatic extract",

          "category": "animal-derived"
        },
        {
          "name": "pepsin",

          "category": "animal-derived"
        },
        {
          "name": "Polysorbate 80",

          "category": "animal-derived"
        },
        {
          "name": "polysorbate 60",

          "category": "animal-derived"
        },
        {
          "name": "rennin",

          "category": "animal-derived"
        },
        {
          "name": "royal jelly",

          "category": "animal-derived"
        },
        {
          "name": "fat substitute",

          "category": "animal-derived"
        },
        {
          "name": "sodium caseinate",

          "category": "animal-derived"
        },
        {
          "name": "tallow",

          "category": "animal-derived"
        },
        {
          "name": "trypsin",

          "category": "animal-derived"
        },


        {
          "name": "vitamin A propionate",

          "category": "animal-derived"
        },
        {
          "name": "vitamin A acetate",

          "category": "animal-derived"
        },
        {
          "name": "cholecalciferol",

          "category": "animal-derived"
        },
        {
          "name": "calciferol",

          "category": "animal-derived"
        },
        {
          "name": "activated 7-dehydrocholesterol",

          "category": "animal-derived"
        },
        {
          "name": "vitamin d3",

          "category": "animal-derived"
        },
        {
          "name": "Vitamin D3",

          "category": "animal-derived"
        },
        {
          "name": "cyanocobalamin",

          "category": "animal-derived"
        },
        {
          "name": "Rennin",

          "category": "animal-derived"
        },
        {
          "name": "Pristane",

          "category": "animal-derived"
        },
        {
          "name": "Polysorbates",

          "category": "animal-derived"
        },
        {
          "name": "Polypeptides",

          "category": "animal-derived"
        },
        {
          "name": "Placenta",

          "category": "animal-derived"
        },
        {
          "name": "Oleyl Imidazoline",

          "category": "animal-derived"
        },
        {
          "name": "Oleyl Alcohol",

          "category": "animal-derived"
        },
        {
          "name": "Ocenol",

          "category": "animal-derived"
        },
        {
          "name": "Oleths",

          "category": "animal-derived"
        },
        {
          "name": "Nucleic Acids",

          "category": "animal-derived"
        },
        {
          "name": "Monoglycerides",

          "category": "animal-derived"
        },
        {
          "name": "Glycerides",

          "category": "animal-derived"
        },
        {
          "name": "Glycerin",

          "category": "animal-derived"
        },
        {
          "name": "Methionine",

          "category": "animal-derived"
        },
        {
          "name": "Lipase",

          "category": "animal-derived"
        },
        {
          "name": "Lanosterols",

          "category": "animal-derived"
        },
        {
          "name": "Lanolin",

          "category": "animal-derived"
        },
        {
          "name": "Keratin",

          "category": "animal-derived"
        },
        {
          "name": "Guanine",

          "category": "animal-derived"
        },
        {
          "name": "Polyglycerol",

          "category": "animal-derived"
        },
        {
          "name": "Glycerol",

          "category": "animal-derived"
        },
        {
          "name": "Glycreth-26",

          "category": "animal-derived"
        },



        {
          "name": "Fish Oil",

          "category": "animal-derived"
        },
        {
          "name": "fish",

          "category": "animal-derived"
        },
        {
          "name": "pork",

          "category": "animal-derived"
        },
        {
          "name": "egg",

          "category": "animal-derived"
        },
        {
          "name": "cheese",

          "category": "animal-derived"
        },
        {
          "name": "chicken",

          "category": "animal-derived"
        },
        {
          "name": "beef",

          "category": "animal-derived"
        },
        {
          "name": "skimmed milk",

          "category": "animal-derived"
        },
        {
          "name": "_skimmed milk_",

          "category": "animal-derived"
        },
        {
          "name": "_skim milk_",

          "category": "animal-derived"
        },
        {
          "name": "skim milk",

          "category": "animal-derived"
        },
        {
          "name": "_milk_",

          "category": "animal-derived"
        },
        {
          "name": "milk chocolate",

          "category": "animal-derived"
        },
        {
          "name": "milkfat",

          "category": "animal-derived"
        },
        {
          "name": "_milkfat_",

          "category": "animal-derived"
        },
        {
          "name": "Elastin",

          "category": "animal-derived"
        },
        {
          "name": "L-Cysteine",

          "category": "animal-derived"
        },
        {
          "name": "Collagen",

          "category": "animal-derived"
        },
        {
          "name": "steroid alcohol",

          "category": "animal-derived"
        },
        {
          "name": "Chitosan",

          "category": "animal-derived"
        },
        {
          "name": "Cashmere",

          "category": "animal-derived"
        },
        {
          "name": "Cochineal",

          "category": "animal-derived"
        },
        {
          "name": "Capryl Betaine",

          "category": "animal-derived"
        },
        {
          "name": "Bone Char",

          "category": "animal-derived"
        },
        {
          "name": "Honeycomb",

          "category": "animal-derived"
        },
        {
          "name": "Adrenaline",

          "category": "animal-derived"
        },


        {
          "name": "E120",

          "category": "animal-derived"
        },
        {
          "name": "E542",

          "category": "animal-derived"
        },
        {
          "name": "E904",

          "category": "animal-derived"
        },
        {
          "name": "E901",

          "category": "animal-derived"
        },
        {
          "name": "E913",

          "category": "animal-derived"
        },
        {
          "name": "E966",

          "category": "animal-derived"
        },
        {
          "name": "E1105",

          "category": "animal-derived"
        },
        {
          "name": "E631",

          "category": "animal-derived"
        },
        {
          "name": "veal",

          "category": "animal-derived"
        },
        {
          "name": "horse",

          "category": "animal-derived"
        },
        {
          "name": "turkey",

          "category": "animal-derived"
        },
        {
          "name": "goose",

          "category": "animal-derived"
        },
        {
          "name": "duck",

          "category": "animal-derived"
        },
        {
          "name": "anchovies",

          "category": "animal-derived"
        },
        {
          "name": "shrimp",

          "category": "animal-derived"
        },
        {
          "name": "butter",

          "category": "animal-derived"
        },

        {
          "name": "cream",
          "category": "animal-derived"
        },
        {
          "name": "ice cream",

          "category": "animal-derived"
        },
        {
          "name": "bee pollen",

          "category": "animal-derived"
        },
        {
          "name": "royal jelly",

          "category": "animal-derived"
        },
        {
          "name": "Omega-3",

          "category": "animal-derived"
        },
        {
          "name": "Dairy",

          "category": "animal-derived"
        },
        {
          "name": "crab",

          "category": "animal-derived"
        },
        {
          "name": "scallops",

          "category": "animal-derived"
        },
        {
          "name": "lobster",

          "category": "animal-derived"
        },
        {
          "name": "mussels",

          "category": "animal-derived"
        },
        {
          "name": "fish sauce",

          "category": "animal-derived"
        },
        {
          "name": "E910",

          "category": "animal-derived"
        },
        {
          "name": "yoghurt",

          "category": "animal-derived"
        },
        {
          "name": "E920",

          "category": "animal-derived"
        },
        {
          "name": "E921",

          "category": "animal-derived"
        },
        {
          "name": "lowfat milk",

          "category": "animal-derived"
        },
        {
          "name": "milk solid",

          "category": "animal-derived"
        },
        {
          "name": "milk solids",

          "category": "animal-derived"
        },
        {
          "name": "acidophilus milk",

          "category": "animal-derived"
        },
        {
          "name": "Ammonium Caseinate",

          "category": "animal-derived"
        },
        {
          "name": "Butter Esters",

          "category": "animal-derived"
        },
        {
          "name": "butter fat",

          "category": "animal-derived"
        },
        {
          "name": "butter oil",

          "category": "animal-derived"
        },
        {
          "name": "Butter Solids",

          "category": "animal-derived"
        },
        {
          "name": "Buttermilk",

          "category": "animal-derived"
        },
        {
          "name": "Buttermilk Powder",

          "category": "animal-derived"
        },
        {
          "name": "Condensed Milk",

          "category": "animal-derived"
        },
        {
          "name": "Caseinate",

          "category": "animal-derived"
        },
        {
          "name": "Cottage Cheese",

          "category": "animal-derived"
        },
        {
          "name": "Curds",

          "category": "animal-derived"
        },
        {
          "name": "Delactosed Whey",

          "category": "animal-derived"
        },
        {
          "name": "Demineralized Whey",

          "category": "animal-derived"
        },
        {
          "name": "Dry Milk Powder",
          "category": "animal-derived"
        },
        {
          "name": "Dry Milk Solids",
          "category": "animal-derived"
        },
        {
          "name": "Evaporated Milk",
          "category": "animal-derived"
        },
        {
          "name": "Goat Cheese",

          "category": "animal-derived"
        },
        {
          "name": "Goat Milk",

          "category": "animal-derived"
        },
        {
          "name": "Hydrolyzed Casein",

          "category": "animal-derived"
        },
        {
          "name": "Hydrolyzed Milk Protein",

          "category": "animal-derived"
        },
        {
          "name": "Iron Caseinate",

          "category": "animal-derived"
        },
        {
          "name": "Lactalbumin",

          "category": "animal-derived"
        },
        {
          "name": "Lactoferrin",

          "category": "animal-derived"
        },
        {
          "name": "Lactoglobulin",

          "category": "animal-derived"
        },
        {
          "name": "Lactulose",

          "category": "animal-derived"
        },
        {
          "name": "Low-Fat Milk",

          "category": "animal-derived"
        },
        {
          "name": "low fat milk",

          "category": "animal-derived"
        },
        {
          "name": "Magnesium Caseinate",

          "category": "animal-derived"
        },
        {
          "name": "Malted Milk",

          "category": "animal-derived"
        },
        {
          "name": "Milk Derivative",

          "category": "animal-derived"
        },
        {
          "name": "Milk Fat",

          "category": "animal-derived"
        },
        {
          "name": "Milk Powder",

          "category": "animal-derived"
        },
        {
          "name": "Milk Protein",

          "category": "animal-derived"
        },
        {
          "name": "Natural Butter Flavor",

          "category": "animal-derived"
        },
        {
          "name": "Nonfat Milk",

          "category": "animal-derived"
        },
        {
          "name": "Nougat",

          "category": "animal-derived"
        },
        {
          "name": "Paneer",

          "category": "animal-derived"
        },
        {
          "name": "Potassium Caseinate",

          "category": "animal-derived"
        },
        {
          "name": "Recaldent",

          "category": "animal-derived"
        },
        {
          "name": "Rennet Casein",

          "category": "animal-derived"
        },
        {
          "name": "Sheep Milk",

          "category": "animal-derived"
        },
        {
          "name": "Sheep Milk Cheese",

          "category": "animal-derived"
        },
        {
          "name": "Skim Milk",

          "category": "animal-derived"
        },
        {
          "name": "Sodium Caseinate",

          "category": "animal-derived"
        },
        {
          "name": "Sour Cream",

          "category": "animal-derived"
        },
        {
          "name": "Sour Milk Solids",

          "category": "animal-derived"
        },
        {
          "name": "Sweetened Condensed Milk",

          "category": "animal-derived"
        },
        {
          "name": "Sweet Whey",

          "category": "animal-derived"
        },
        {
          "name": "Whey Powder",

          "category": "animal-derived"
        },
        {
          "name": "Whey Protein",

          "category": "animal-derived"
        },
        {
          "name": "Whey Protein Concentrate",

          "category": "animal-derived"
        },
        {
          "name": "whey protein hydrolysate",

          "category": "animal-derived"
        },
        {
          "name": "Whipped Cream",

          "category": "animal-derived"
        },
        {
          "name": "Whipped Topping",

          "category": "animal-derived"
        },
        {
          "name": "whole milk",

          "category": "animal-derived"
        },
        {
          "name": "whole milk powder",

          "category": "animal-derived"
        },
        {
          "name": "Zinc Caseinate",

          "category": "animal-derived"
        },
        {
          "name": "grade a pasteurized whole milk",

          "category": "animal-derived"
        },
        {
          "name": "cultured pasteurized milk",

          "category": "animal-derived"
        },
        {
          "name": "cultured pasteurized nonfat milk",

          "category": "animal-derived"
        },
        {
          "name": "skim milk reconstitution",

          "category": "animal-derived"
        },

        {
          "name": "skimmed milk powder",

          "category": "animal-derived"
        },
        {
          "name": "milk protein",

          "category": "animal-derived"
        },
        {
          "name": "pasteurized toned milk",

          "category": "animal-derived"
        },
        {
          "name": "Pasteurized Toned Milk",

          "category": "animal-derived"
        },
        {
          "name": "grade a organic milk",

          "category": "animal-derived"
        },
        {
          "name": "organic milk",

          "category": "animal-derived"
        },
        {
          "name": "artificial butter flavor",

          "category": "animal-derived"
        },
        {
          "name": "butter fat",

          "category": "animal-derived"
        },
        {
          "name": "buttermilk",

          "category": "animal-derived"
        },
        {
          "name": "ghee",

          "category": "animal-derived"
        },
        {
          "name": "Half & half",

          "category": "animal-derived"
        },
        {
          "name": "hydrolysates",

          "category": "animal-derived"
        },

        {
          "name": "kefir",

          "category": "animal-derived"
        },
        {
          "name": "lactalbumin",

          "category": "animal-derived"
        },
        {
          "name": "lactalbumin phosphate",

          "category": "animal-derived"
        },
        {
          "name": "lactoglobulin",

          "category": "animal-derived"
        },
        {
          "name": "paneer",

          "category": "animal-derived"
        },
        {
          "name": "sour cream",

          "category": "animal-derived"
        },
        {
          "name": "sour cream solids",

          "category": "animal-derived"
        },
        {
          "name": "(milk)",

          "category": "animal-derived"
        },
        {
          "name": "natural flavors (with milk)",

          "category": "animal-derived"
        },
        {
          "name": "buttermilch",

          "category": "animal-derived"
        },
        {
          "name": "butter fat (from milk)",

          "category": "animal-derived"
        },

        {
          "name": "butter fat",

          "category": "animal-derived"
        },
        {
          "name": "milk protein hydrolysate",

          "category": "animal-derived"
        },
        {
          "name": "chicken dry protein",

          "category": "animal-derived"
        },
        {
          "name": "sweet whey powder",

          "category": "animal-derived"
        },
        {
          "name": "sweet whey powder (from milk)",

          "category": "animal-derived"
        },
        {
          "name": "skimmed cow's milk powder",

          "category": "animal-derived"
        },
        {
          "name": "white egg",

          "category": "animal-derived"
        },
        {
          "name": "white egg powder",
          "category": "animal-derived"
        },
        {
          "name": "protein milk hydrolysate",

          "category": "animal-derived"
        },
        {
          "name": "protein milk",
          "category": "animal-derived"
        },
        {
          "name": "Lactobacillus acidophilus",

          "category": "animal-derived"
        },

        {
          "name": "Anhydrous milk fat",

          "category": "animal-derived"
        },
        {
          "name": "Granulated milk powder",

          "category": "animal-derived"
        },
        {
          "name": "Native skimmed milk powder",

          "category": "animal-derived"
        },
        {
          "name": "Low heat skimmed milk powder",

          "category": "animal-derived"
        },
        {
          "name": "Sweet whey powder",

          "category": "animal-derived"
        },
        {
          "name": "Demineralized whey powder",

          "category": "animal-derived"
        },
        {
          "name": "Granulated whey powder",

          "category": "animal-derived"
        },
        {
          "name": "Deproteinized Whey",

          "category": "animal-derived"
        },
        {
          "name": "Premium Deproteinized Whey",

          "category": "animal-derived"
        },
        {
          "name": "Milk lactoferrin",

          "category": "animal-derived"
        },
        {
          "name": "Milk protein concentrate",

          "category": "animal-derived"
        },

        {
          "name": "milk permeate",

          "category": "animal-derived"
        },
        {
          "name": "Whey protein concentrate",

          "category": "animal-derived"
        },
        {
          "name": "chicken broth",

          "category": "animal-derived"
        },
        {
          "name": "chewing gum",

          "category": "animal-derived"
        },
        {
          "name": "fish sticks",
          "category": "animal-derived"
        },
        {
          "name": "Anhydrous Milk Fat",

          "category": "animal-derived"
        },
        {
          "name": "Artificial Butter",

          "category": "animal-derived"
        },
        {
          "name": "Artificial Butter Flavor",
          "category": "animal-derived"
        },
        {
          "name": "Butter Extract",

          "category": "animal-derived"
        },
        {
          "name": "Butter Flavored Oil",

          "category": "animal-derived"
        },
        {
          "name": "Buttermilk Blend",

          "category": "animal-derived"
        },

        {
          "name": "Buttermilk Powder",

          "category": "animal-derived"
        },
        {
          "name": "Buttermilk Solids",

          "category": "animal-derived"
        },
        {
          "name": "Butter Oil",

          "category": "animal-derived"
        },
        {
          "name": "Butter Soilds",

          "category": "animal-derived"
        },
        {
          "name": "Casein Hydrolysates",

          "category": "animal-derived"
        },
        {
          "name": "Cheese Flavor",

          "category": "animal-derived"
        },
        {
          "name": "Cheese Food",
          "category": "animal-derived"
        },
        {
          "name": "Cultured Milk",

          "category": "animal-derived"
        },
        {
          "name": "Curd Whey",

          "category": "animal-derived"
        },
        {
          "name": "Dairy Butter",

          "category": "animal-derived"
        },
        {
          "name": "Dairy Product Solids",

          "category": "animal-derived"
        },
        {
          "name": "Delactosed Whey",

          "category": "animal-derived"
        },
        {
          "name": "Derivative Milk",

          "category": "animal-derived"
        },
        {
          "name": "Dried Milk",

          "category": "animal-derived"
        },
        {
          "name": "dry milk",

          "category": "animal-derived"
        },
        {
          "name": "Dry Milk Powder",

          "category": "animal-derived"
        },

        {
          "name": "Dry Milk Solids",

          "category": "animal-derived"
        },
        {
          "name": "Fat Free Milk ",

          "category": "animal-derived"
        },
        {
          "name": "Fully Cream Milk Powder",

          "category": "animal-derived"
        },
        {
          "name": "Galactose",

          "category": "animal-derived"
        },
        {
          "name": "Imitation Cheese",

          "category": "animal-derived"
        },
        {
          "name": "Imitation Sour Cream",

          "category": "animal-derived"
        },
        {
          "name": "Iron Caseinate",

          "category": "animal-derived"
        },
        {
          "name": "kefir",

          "category": "animal-derived"
        },
        {
          "name": "Kourmiss",

          "category": "animal-derived"
        },
        {
          "name": "Lactaid Milk",

          "category": "animal-derived"
        },
        {
          "name": "Lactalbumin phosphate",

          "category": "animal-derived"
        },
        {
          "name": "Lactate solids",

          "category": "animal-derived"
        },
        {
          "name": "Lactitol Monohyrdrate",

          "category": "animal-derived"
        },
        {
          "name": "Lactose Free Milk",

          "category": "animal-derived"
        },
        {
          "name": "Lactyc Yeast",

          "category": "animal-derived"
        },
        {
          "name": "Malted Milk",

          "category": "animal-derived"
        },
        {
          "name": "Milk Solid Pastes",

          "category": "animal-derived"
        },
        {
          "name": "Natural Butter",

          "category": "animal-derived"
        },
        {
          "name": "Natural Butter Flavor",

          "category": "animal-derived"
        },
        {
          "name": "Nisin Preparation",

          "category": "animal-derived"
        },
        {
          "name": "Nonfat Dry Milk",

          "category": "animal-derived"
        },
        {
          "name": "Nonfat Milk",

          "category": "animal-derived"
        },
        {
          "name": "Nonfat Milk Solids",

          "category": "animal-derived"
        },
        {
          "name": "Potassium Caseinate",

          "category": "animal-derived"
        },
        {
          "name": "Powdered Milk",

          "category": "animal-derived"
        },
        {
          "name": "Powdered Whey",

          "category": "animal-derived"
        },
        {
          "name": "Protein Hydrolysates",

          "category": "animal-derived"
        },
        {
          "name": "pudding",

          "category": "animal-derived"
        },
        {
          "name": "Quark",

          "category": "animal-derived"
        },
        {
          "name": "Recaldent",

          "category": "animal-derived"
        },
        {
          "name": "Reduced Mineral Whey",

          "category": "animal-derived"
        },
        {
          "name": "Rennet Casein",

          "category": "animal-derived"
        },
        {
          "name": "rennet",

          "category": "animal-derived"
        },
        {
          "name": "Sheep Milk Cheese",

          "category": "animal-derived"
        },
        {
          "name": "sheep milk",

          "category": "animal-derived"
        },
        {
          "name": "Sherbet",

          "category": "animal-derived"
        },
        {
          "name": "Sweet Cream",

          "category": "animal-derived"
        },
        {
          "name": "Sweet Cream Buttermilk Powder",

          "category": "animal-derived"
        },
        {
          "name": "Sweet Dairy Whey",

          "category": "animal-derived"
        },
        {
          "name": "Sweetened Condensed Milk",

          "category": "animal-derived"
        },
        {
          "name": "Sweetened Condensed Skim Milk",

          "category": "animal-derived"
        },
        {
          "name": "Vegetarian Cheese with Casein",

          "category": "animal-derived"
        },
        {
          "name": "Whey Protein Concentrate",

          "category": "animal-derived"
        },
        {
          "name": "Whey Protein Hydrolysates",

          "category": "animal-derived"
        },
        {
          "name": "Whipped Butter",

          "category": "animal-derived"
        },
        {
          "name": "Whey Solids",

          "category": "animal-derived"
        },
        {
          "name": "Whey Protein",

          "category": "animal-derived"
        },
        {
          "name": "Yogurt Powder",

          "category": "animal-derived"
        },
        {
          "name": "lowfat yogurt",

          "category": "animal-derived"
        },
        {
          "name": "bifidus and l.casei",

          "category": "animal-derived"
        },
        {
          "name": "nonfat yogurt",

          "category": "animal-derived"
        },
        {
          "name": "cultured lowfat milk",

          "category": "animal-derived"
        },
        {
          "name": "grade a uht whole milk and vitamin d3",

          "category": "animal-derived"
        },
        {
          "name": "whole milk and vitamin d3",

          "category": "animal-derived"
        },
        {
          "name": "skimmed",

          "category": "animal-derived"
        },
        {
          "name": "fresh filtered milk",

          "category": "animal-derived"
        },
        {
          "name": "butter refiner",

          "category": "animal-derived"
        },
        {
          "name": "yolk",

          "category": "animal-derived"
        },
        {
          "name": "Worcestershire",

          "category": "animal-derived"
        },
        {
          "name": "Whiting",

          "category": "animal-derived"
        },
        {
          "name": "Volaise",

          "category": "animal-derived"
        },
        {
          "name": "Vitellus",

          "category": "animal-derived"
        },
        {
          "name": "veal",

          "category": "animal-derived"
        },
        {
          "name": "turkey",

          "category": "animal-derived"
        },
        {
          "name": "tuna",

          "category": "animal-derived"
        },
        {
          "name": "Triterpene",

          "category": "animal-derived"
        },
        {
          "name": "Trypsin",

          "category": "animal-derived"
        },
        {
          "name": "Triacetin",

          "category": "animal-derived"
        },
        {
          "name": "glyceryl triacetate",

          "category": "animal-derived"
        },
        {
          "name": "Tallowate",

          "category": "animal-derived"
        },
        {
          "name": "suet",

          "category": "animal-derived"
        },
        {
          "name": "Suede",

          "category": "animal-derived"
        },
        {
          "name": "Sucralose",

          "category": "animal-derived"
        },
        {
          "name": "Splenda",

          "category": "animal-derived"
        },
        {
          "name": "Sterol",

          "category": "animal-derived"
        },
        {
          "name": "Stearyldimethyl",

          "category": "animal-derived"
        },
        {
          "name": "Stearyl",

          "category": "animal-derived"
        },
        {
          "name": "Stearin",

          "category": "animal-derived"
        },
        {
          "name": "Squalene",

          "category": "animal-derived"
        },
        {
          "name": "Squalane",

          "category": "animal-derived"
        },
        {
          "name": "Spermaceti",

          "category": "animal-derived"
        },
        {
          "name": "Shortening",

          "category": "animal-derived"
        },
        {
          "name": "sheep",

          "category": "animal-derived"
        },
        {
          "name": "sheep meat",

          "category": "animal-derived"
        },
        {
          "name": "cow",

          "category": "animal-derived"
        },
        {
          "name": "cow's meat",

          "category": "animal-derived"
        },
        {
          "name": "cow's milk",

          "category": "animal-derived"
        },
        {
          "name": "seafood",

          "category": "animal-derived"
        },
        {
          "name": "sea food",

          "category": "animal-derived"
        },
        {
          "name": "scale",

          "category": "animal-derived"
        },
        {
          "name": "salmon",

          "category": "animal-derived"
        },
        {
          "name": "Saccharum",

          "category": "animal-derived"
        },
        {
          "name": "Reticulin",

          "category": "animal-derived"
        },
        {
          "name": "Resinous",

          "category": "animal-derived"
        },
        {
          "name": "Quanternium",

          "category": "animal-derived"
        },
        {
          "name": "Qivuit",

          "category": "animal-derived"
        },
        {
          "name": "bee",

          "category": "animal-derived"
        },
        {
          "name": "Propolis",

          "category": "animal-derived"
        },
        {
          "name": "Progesterone",

          "category": "animal-derived"
        },
        {
          "name": "Pristane",

          "category": "animal-derived"
        },
        {
          "name": "Poultry",

          "category": "animal-derived"
        },
        {
          "name": "Polypeptide",

          "category": "animal-derived"
        },
        {
          "name": "Pollock",

          "category": "animal-derived"
        },
        {
          "name": "Paracasein",

          "category": "animal-derived"
        },
        {
          "name": "Oxgall",

          "category": "animal-derived"
        },
        {
          "name": "Oleyl",

          "category": "animal-derived"
        },
        {
          "name": "Oleth",

          "category": "animal-derived"
        },
        {
          "name": "Oleostearin",

          "category": "animal-derived"
        },
        {
          "name": "Oleinic",

          "category": "animal-derived"
        },
        {
          "name": "Octadecanoic",

          "category": "animal-derived"
        },
        {
          "name": "Ocenol",

          "category": "animal-derived"
        },
        {
          "name": "Nucleic",

          "category": "animal-derived"
        },
        {
          "name": "Lysozyme",

          "category": "animal-derived"
        },
        {
          "name": "Linoleic",

          "category": "animal-derived"
        },
        {
          "name": "Lanogene",

          "category": "animal-derived"
        },
        {
          "name": "lamb",

          "category": "animal-derived"
        },
        {
          "name": "Lactitol",

          "category": "animal-derived"
        },
        {
          "name": "junket",

          "category": "animal-derived"
        },
        {
          "name": "fletan",

          "category": "animal-derived"
        },
        {
          "name": "Duodenum",

          "category": "animal-derived"
        },
        {
          "name": "Cortico",

          "category": "animal-derived"
        },
        {
          "name": "Confectioner",

          "category": "animal-derived"
        },
        {
          "name": "Cholesterin",

          "category": "animal-derived"
        },
        {
          "name": "Cholecalciferol",

          "category": "animal-derived"
        },
        {
          "name": "caviar",

          "category": "animal-derived"
        },
        {
          "name": "Caseinogen",

          "category": "animal-derived"
        },
        {
          "name": "Carminic",

          "category": "animal-derived"
        },
        {
          "name": "Caprylic",

          "category": "animal-derived"
        },
        {
          "name": "Calfskin",

          "category": "animal-derived"
        },
        {
          "name": "Bacon",

          "category": "animal-derived"
        },
        {
          "name": "Aminosuccinate",

          "category": "animal-derived"
        },
        {
          "name": "Amerchol",

          "category": "animal-derived"
        },
        {
          "name": "Alpha-Hydroxy",

          "category": "animal-derived"
        },
        {
          "name": "Aliphatic",

          "category": "animal-derived"
        },
        {
          "name": "Alcloxa",

          "category": "animal-derived"
        },
        {
          "name": "Abalone",

          "category": "animal-derived"
        },
        {
          "name": "Margarine",

          "category": "animal-derived"
        },
        {
          "name": "Prebiotics",

          "category": "animal-derived"
        },
        {
          "name": "Lactobacillus ",

          "category": "animal-derived"
        },
        {
          "name": "Lactic Acid Starter Culture",

          "category": "animal-derived"
        },
        {
          "name": "Fat Replacer",

          "category": "animal-derived"
        },
        {
          "name": "Whipped Topping",

          "category": "animal-derived"
        },
        {
          "name": "tagatose ",

          "category": "animal-derived"
        },
        {
          "name": "Lactose Free Milk",

          "category": "animal-derived"
        },
        {
          "name": "Demineralised Whey",

          "category": "animal-derived"
        },

        {
          "name": "fish powder",

          "category": "animal-derived"
        },
        {
          "name": "shrimp powder",

          "category": "animal-derived"
        },
        {
          "name": "cultured cream",

          "category": "animal-derived"
        },
        {
          "name": "1105",

          "category": "animal-derived"
        },
        {
          "name": "542",

          "category": "animal-derived"
        },
        {
          "name": "901",

          "category": "animal-derived"
        },
        {
          "name": "904",
          "category": "animal-derived"
        },
        {
          "name": "913",

          "category": "animal-derived"
        },
        {
          "name": "966",

          "category": "animal-derived"
        },
        {
          "name": "120",

          "category": "animal-derived"
        },
        {
          "name": "631",

          "category": "animal-derived"
        },
        {
          "name": "milk chocolate",

          "category": "animal-derived"
        },
        {
          "name": "skimmilk",

          "category": "animal-derived"
        },
        {
          "name": "milkfat",

          "category": "animal-derived"
        },
        {
          "name": "chicken flavour",

          "category": "animal-derived"
        },
        {
          "name": "beef flavour",

          "category": "animal-derived"
        },
        {
          "name": "beef",

          "category": "animal-derived"
        },
        {
          "name": "beef flavor",

          "category": "animal-derived"
        },
        {
          "name": "chicken flavor",
          "category": "animal-derived"
        },

        {
          "name": "mutton",

          "category": "animal-derived"
        },
        {
          "name": "fish flavor",

          "category": "animal-derived"
        },
        {
          "name": "fish flavour",

          "category": "animal-derived"
        },
        {
          "name": "chicken-flavored seasoning",

          "category": "animal-derived"
        },

        {
          "name": "chicken-flavoured seasoning",

          "category": "animal-derived"
        },
        {
          "name": "white egg powder",

          "category": "animal-derived"
        },




      ]);

    console.log('Орц амжилттай нэмэгдлээ:', response.data);
  } catch (error) {
    console.error('Алдаа:', error.response.data);
  }
}

addIngredients();
