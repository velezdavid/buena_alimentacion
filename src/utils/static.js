export const sections = [
  { title: "Home", url: "/" },
  { title: "Generate Meal Plan", url: "/generate" },
  { title: "Search Food Videos", url: "/search" },
];

export const grafico = `<style>
.spoonacular-switch .slide-button,
.toggle p span {
    display: none
}

@media only screen {
    .toggle {
        position: relative;
        padding: 0;
        margin-left: 100px
    }

    .toggle label {
        position: relative;
        z-index: 3;
        display: block;
        width: 100%
    }

    .toggle input {
        position: absolute;
        opacity: 0;
        z-index: 5
    }

    .toggle p {
        position: absolute;
        left: -100px;
        width: 100%;
        margin: 0;
        padding-right: 100px;
        text-align: left
    }

    .toggle p span {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 5;
        display: block;
        width: 50%;
        margin-left: 100px;
        text-align: center
    }

    .toggle p span:last-child {
        left: 50%
    }

    .toggle .slide-button {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 4;
        display: block;
        width: 50%;
        height: 100%;
        padding: 0
    }

    .spoonacular-switch {
        position: relative;
        padding: 0
    }

    .spoonacular-switch input {
        position: absolute;
        opacity: 0
    }

    .spoonacular-switch label {
        position: relative;
        z-index: 2;
        float: left;
        width: 50%;
        height: 100%;
        margin: 0;
        text-align: center
    }

    .spoonacular-switch .slide-button {
        position: absolute;
        top: 0;
        left: 0;
        padding: 0;
        z-index: 1;
        width: 50%;
        height: 100%
    }

    .spoonacular-switch input:last-of-type:checked~.slide-button {
        left: 50%
    }

    .switch.switch-three label,
    .switch.switch-three .slide-button {
        width: 33.3%
    }

    .switch.switch-three input:checked:nth-of-type(2)~.slide-button {
        left: 33.3%
    }

    .switch.switch-three input:checked:last-of-type~.slide-button {
        left: 66.6%
    }

    .switch.switch-four label,
    .switch.switch-four .slide-button {
        width: 25%
    }

    .switch.switch-four input:checked:nth-of-type(2)~.slide-button {
        left: 25%
    }

    .switch.switch-four input:checked:nth-of-type(3)~.slide-button {
        left: 50%
    }

    .switch.switch-four input:checked:last-of-type~.slide-button {
        left: 75%
    }

    .switch.switch-five label,
    .switch.switch-five .slide-button {
        width: 20%
    }

    .switch.switch-five input:checked:nth-of-type(2)~.slide-button {
        left: 20%
    }

    .switch.switch-five input:checked:nth-of-type(3)~.slide-button {
        left: 40%
    }

    .switch.switch-five input:checked:nth-of-type(4)~.slide-button {
        left: 60%
    }

    .switch.switch-five input:checked:last-of-type~.slide-button {
        left: 80%
    }

    .toggle,
    .spoonacular-switch {
        display: block;
        height: 24px
    }

    .spoonacular-switch *,
    .toggle * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        -o-box-sizing: border-box;
        box-sizing: border-box
    }

    .spoonacular-switch .slide-button,
    .toggle .slide-button {
        display: block;
        -webkit-transition: all .3s ease-out;
        -moz-transition: all .3s ease-out;
        -ms-transition: all .3s ease-out;
        -o-transition: all .3s ease-out;
        transition: all .3s ease-out
    }

    .toggle label,
    .toggle p,
    .spoonacular-switch label {
        line-height: 24px;
        vertical-align: middle
    }

    .toggle input:checked~.slide-button {
        right: 50%
    }

    .toggle input:focus~.slide-button,
    .spoonacular-switch input:focus+label {
        outline: 1px dotted #888
    }

    .spoonacular-switch,
    .toggle {
        -webkit-animation: bugfix infinite 1s
    }

    @-webkit-keyframes bugfix {
        0% {
            position: relative
        }

        to {
            position: relative
        }
    }

    .spoonacular-metro {
        background-color: #b6b6b6;
        color: #fff
    }

    .spoonacular-metro.toggle {
        border: 2px solid #b6b6b6
    }

    .spoonacular-metro.spoonacular-switch {
        overflow: hidden
    }

    .spoonacular-metro.spoonacular-switch .slide-button {
        background-color: #279fca
    }

    .spoonacular-metro.toggle .slide-button {
        border-radius: 2px;
        background-color: #848484
    }

    .spoonacular-metro.toggle input:first-of-type:checked~.slide-button {
        background-color: #279fca
    }

    .spoonacular-metro p {
        color: #333
    }

    .spoonacular-metro span {
        color: #fff
    }
}

.stepper-wrap {
    position: relative;
    display: inline-block;
    font: 11px Arial, sans-serif
}

.stepper-wrap input {
    text-align: right
}

.stepper-btn-wrap {
    position: absolute;
    top: 0;
    right: -15px;
    width: 15px;
    height: 100%;
    overflow: hidden;
    border: 1px solid #ccc;
    border-left: 0;
    -webkit-border-radius: 0 2px 2px 0;
    -moz-border-radius: 0 2px 2px 0;
    border-radius: 0 2px 2px 0;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    background-color: #ddd;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#eee), to(#ddd));
    background-image: -webkit-linear-gradient(top, #eee, #ddd);
    background-image: -moz-linear-gradient(top, #eee, #ddd);
    background-image: -ms-linear-gradient(top, #eee, #ddd);
    background-image: -o-linear-gradient(top, #eee, #ddd);
    background-image: linear-gradient(top, #eee, #ddd);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorStr="#eee", EndColorStr="#ddd");
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

.stepper-btn-wrap a {
    display: block;
    height: 50%;
    overflow: hidden;
    line-height: 100%;
    text-align: center;
    text-decoration: none;
    text-shadow: 1px 1px 0 #fff;
    cursor: default;
    color: #666;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

.stepper-btn-wrap a:hover {
    background: rgba(255, 255, 255, .5)
}

#spoonacular-serving-stepper {
    width: 25px;
    margin-left: 4px
}

.spoonacular-ingredient {
    width: 100px;
    height: 100px;
    position: relative;
    border: 6px solid rgba(30, 30, 30, .3);
    margin-right: 10px;
    margin-top: 10px
}

.spoonacular-image-wrapper {
    width: 100px;
    height: 100px;
    vertical-align: middle;
    text-align: center;
    line-height: 100px;
    background-color: #fff;
    position: relative
}

#spoonacular-ingredient-vis-list .spoonacular-image-wrapper {
    border: 6px solid rgba(30, 30, 30, .3);
    width: 80px;
    height: 80px;
    line-height: 80px
}

.spoonacular-ingredient img {
    max-width: 100px;
    max-height: 97px;
    vertical-align: middle;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto
}

.spoonacular-ingredient .spoonacular-name,
.spoonacular-ingredient .spoonacular-amount {
    padding: 0 2px;
    width: 96px;
    height: 0;
    position: absolute;
    background-color: #20222ca3;
    line-height: 20px;
    color: #fff;
    text-align: center;
    overflow: hidden;
    z-index: 999
}

.spoonacular-ingredient div.spoonacular-amount {
    top: 0;
    height: 18px
}

.spoonacular-ingredient div.spoonacular-name {
    bottom: 0;
    height: 18px
}

.t12 {
    font-size: 12px
}

.t11 {
    font-size: 11px
}

.t10 {
    font-size: 10px
}

.t9 {
    font-size: 9px
}

#spoonacular-ingredient-vis-list {
    display: none
}

div.spoonacular-ingredient-list {
    border-bottom: 1px solid #036;
    color: #036;
    font-size: 19px;
    line-height: 80px;
    padding: 5px 0
}

.spoonacular-ingredient-list img {
    max-width: 80px;
    max-height: 77px;
    vertical-align: middle;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto
}

div.spoonacular-ingredient-list .spoonacular-amount {
    margin-left: 20px;
    width: 90px;
    float: left
}

div.spoonacular-ingredient-list .spoonacular-name {
    float: left
}
</style>
<div style="width:100%;height: 420px;overflow:hidden;position:relative;">
<div id=spoonacularPriceBreakdownChart style="position:absolute;top:0px;left:0px; height: 380px; width: 100%"></div>
<div id=spoonacularPriceBreakdownTable
    style="position:absolute;top:0px;left:100%;margin-top:24px;margin-left:20px;font-size: 14px;line-height: 22px;">
    <div class=spoonacular-quickview style=margin-bottom:6px;>Cost per Serving: $1.74</div>
    <div style=clear:both></div>
    <div style=display:inline-block;float:left;max-width:80%>
        <b>Ingredient</b><br>90 grams whey protein<br>150 grams frozen strawberries<br>150 grams frozen blueberries<br>3 bananas<br>1 pomegranate<br>60 grams walnuts<br>30 grams pumpkin seeds<br>30 grams flaxseed<br>180 grams granola<br></div>
        <div style=text-align:right;display:inline-block;float:left;padding-left:1em>
            <b>Price</b><br>$2.51<br>$1.34<br>$1.18<br>$0.47<br>$1.56<br>$1.44<br>$0.54<br>$0.18<br>$1.22<br>
            <div style="border-top: 3px double black">$10.43</div>
        </div>
    </div>
    <div id=spoonacularPriceView class="spoonacular-switch spoonacular-metro"
        style=float:right;width:130px;margin-right:10px>
        <input id=spoonacular-price-chart name=priceView type=radio checked onchange=spoonacularTogglePriceBreakdownView();><label for=spoonacular-price-chart onclick>chart</label><input id=spoonacular-price-table name=priceView type=radio onchange=spoonacularTogglePriceBreakdownView();><label for=spoonacular-price-table onclick>table</label><span class=slide-button></span>
    </div>
</div>
<script id=spoonacular-price-estimator-script>
    jQuery(function(){var e=new CanvasJS.Chart("spoonacularPriceBreakdownChart",{backgroundColor:"rgba(0,0,0,0)",creditHref:"",creditText:"",toolTip:{content:"{price} for {amount} <br> {indexLabel} <br> <img src=''{image}> "},data:[{type:"doughnut",dataPoints:[{image:"https://spoonacular.com/cdn/ingredients_100x100/plain-protein-powder.png",amount:"90 grams",price:"$2.51",y:"251",indexLabel:"whey protein"},{image:"https://spoonacular.com/cdn/ingredients_100x100/strawberries.png",amount:"150 grams",price:"$1.34",y:"134",indexLabel:"frozen strawberries"},{image:"https://spoonacular.com/cdn/ingredients_100x100/blueberries.jpg",amount:"150 grams",price:"$1.18",y:"118",indexLabel:"frozen blueberries"},{image:"https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg",amount:"3 ",price:"47 cents",y:"47",indexLabel:"bananas"},{image:"https://spoonacular.com/cdn/ingredients_100x100/pomegranate.jpg",amount:"1 ",price:"$1.56",y:"156",indexLabel:"pomegranate"},{image:"https://spoonacular.com/cdn/ingredients_100x100/walnuts.jpg",amount:"60 grams",price:"$1.44",y:"144",indexLabel:"walnuts"},{image:"https://spoonacular.com/cdn/ingredients_100x100/pumpkin-seeds.jpg",amount:"30 grams",price:"54 cents",y:"54",indexLabel:"pumpkin seeds"},{image:"https://spoonacular.com/cdn/ingredients_100x100/flax-seeds.png",amount:"30 grams",price:"18 cents",y:"18",indexLabel:"flaxseed"},{image:"https://spoonacular.com/cdn/ingredients_100x100/granola.jpg",amount:"180 grams",price:"$1.22",y:"122",indexLabel:"granola"}]}]});e.render()});
</script>
<div style=margin-top:3px;margin-right:10px;text-align:right;>Widget by <a
        href=https://spoonacular.com>spoonacular.com </a> </div>`;

export const steps = {
  title: "Spaghetti Carbonara",
  servings: 2,
  ingredients: [
    "1 lb spaghetti",
    "3.5 oz pancetta",
    "2 Tbsps olive oil",
    "1  egg",
    "0.5 cup parmesan cheese",
  ],
  instructions:
    "Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta. ",
};

export const resultVideos = [
  {
    title: "8 One-Pot Pastas",
    length: 370,
    rating: 0.985984219269103,
    shortTitle: "8 One-Pot Pastas",
    thumbnail: "https://i.ytimg.com/vi/YTZGPCCB2FU/mqdefault.jpg",
    views: 550467,
    youTubeId: "YTZGPCCB2FU",
  },
  {
    title:
      "Macaroni salad - pasta salad recipes - healthy recipe channel - quick tasty recipe - cooking channel",
    length: 333,
    rating: 1.0,
    shortTitle: "Macaroni salad",
    thumbnail: "https://i.ytimg.com/vi/81bn4p8H3Kg/mqdefault.jpg",
    views: 307,
    youTubeId: "81bn4p8H3Kg",
  },
];
export const similiarRecipes = [
  {
    id: 209128,
    title: "Dinner Tonight: Grilled Romesco-Style Pork",
    imageType: "jpg",
    readyInMinutes: 45,
    servings: 4,
    sourceUrl:
      "http://www.seriouseats.com/recipes/2008/07/grilled-romesco-style-pork-salad-recipe.html",
  },
  {
    id: 31868,
    title: "Dinner Tonight: Chickpea Bruschetta",
    imageType: "jpg",
    readyInMinutes: 45,
    servings: 2,
    sourceUrl:
      "http://www.seriouseats.com/recipes/2009/06/dinner-tonight-chickpea-bruschetta-babbo-nyc-recipe.html",
  },
];

export const detailRecipe = {
  id: 716429,
  title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
  image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
  imageType: "jpg",
  servings: 2,
  readyInMinutes: 45,
  license: "CC BY-SA 3.0",
  sourceName: "Full Belly Sisters",
  sourceUrl:
    "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
  spoonacularSourceUrl:
    "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
  aggregateLikes: 209,
  healthScore: 19.0,
  spoonacularScore: 83.0,
  pricePerServing: 163.15,
  analyzedInstructions: [],
  cheap: false,
  creditsText: "Full Belly Sisters",
  cuisines: [],
  dairyFree: false,
  diets: [],
  gaps: "no",
  glutenFree: false,
  instructions: "",
  ketogenic: false,
  lowFodmap: false,
  occasions: [],
  sustainable: false,
  vegan: false,
  vegetarian: false,
  veryHealthy: false,
  veryPopular: false,
  whole30: false,
  weightWatcherSmartPoints: 17,
  dishTypes: ["lunch", "main course", "main dish", "dinner"],
  extendedIngredients: [
    {
      aisle: "Milk, Eggs, Other Dairy",
      amount: 1.0,
      consitency: "solid",
      id: 1001,
      image: "butter-sliced.jpg",
      measures: {
        metric: {
          amount: 1.0,
          unitLong: "Tbsp",
          unitShort: "Tbsp",
        },
        us: {
          amount: 1.0,
          unitLong: "Tbsp",
          unitShort: "Tbsp",
        },
      },
      meta: [],
      name: "butter",
      original: "1 tbsp butter",
      originalName: "butter",
      unit: "tbsp",
    },
    {
      aisle: "Produce",
      amount: 2.0,
      consitency: "solid",
      id: 10011135,
      image: "cauliflower.jpg",
      measures: {
        metric: {
          amount: 473.176,
          unitLong: "milliliters",
          unitShort: "ml",
        },
        us: {
          amount: 2.0,
          unitLong: "cups",
          unitShort: "cups",
        },
      },
      meta: ["frozen", "thawed", "cut into bite-sized pieces"],
      name: "cauliflower florets",
      original:
        "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
      originalName:
        "about frozen cauliflower florets, thawed, cut into bite-sized pieces",
      unit: "cups",
    },
    {
      aisle: "Cheese",
      amount: 2.0,
      consitency: "solid",
      id: 1041009,
      image: "cheddar-cheese.png",
      measures: {
        metric: {
          amount: 2.0,
          unitLong: "Tbsps",
          unitShort: "Tbsps",
        },
        us: {
          amount: 2.0,
          unitLong: "Tbsps",
          unitShort: "Tbsps",
        },
      },
      meta: ["grated", "(I used romano)"],
      name: "cheese",
      original: "2 tbsp grated cheese (I used romano)",
      originalName: "grated cheese (I used romano)",
      unit: "tbsp",
    },
    {
      aisle: "Oil, Vinegar, Salad Dressing",
      amount: 1.0,
      consitency: "liquid",
      id: 1034053,
      image: "olive-oil.jpg",
      measures: {
        metric: {
          amount: 1.0,
          unitLong: "Tbsp",
          unitShort: "Tbsp",
        },
        us: {
          amount: 1.0,
          unitLong: "Tbsp",
          unitShort: "Tbsp",
        },
      },
      meta: [],
      name: "extra virgin olive oil",
      original: "1-2 tbsp extra virgin olive oil",
      originalName: "extra virgin olive oil",
      unit: "tbsp",
    },
    {
      aisle: "Produce",
      amount: 5.0,
      consitency: "solid",
      id: 11215,
      image: "garlic.jpg",
      measures: {
        metric: {
          amount: 5.0,
          unitLong: "cloves",
          unitShort: "cloves",
        },
        us: {
          amount: 5.0,
          unitLong: "cloves",
          unitShort: "cloves",
        },
      },
      meta: [],
      name: "garlic",
      original: "5-6 cloves garlic",
      originalName: "garlic",
      unit: "cloves",
    },
    {
      aisle: "Pasta and Rice",
      amount: 6.0,
      consitency: "solid",
      id: 20420,
      image: "fusilli.jpg",
      measures: {
        metric: {
          amount: 170.097,
          unitLong: "grams",
          unitShort: "g",
        },
        us: {
          amount: 6.0,
          unitLong: "ounces",
          unitShort: "oz",
        },
      },
      meta: ["(I used linguine)"],
      name: "pasta",
      original: "6-8 ounces pasta (I used linguine)",
      originalName: "pasta (I used linguine)",
      unit: "ounces",
    },
    {
      aisle: "Spices and Seasonings",
      amount: 2.0,
      consitency: "solid",
      id: 1032009,
      image: "red-pepper-flakes.jpg",
      measures: {
        metric: {
          amount: 2.0,
          unitLong: "pinches",
          unitShort: "pinches",
        },
        us: {
          amount: 2.0,
          unitLong: "pinches",
          unitShort: "pinches",
        },
      },
      meta: ["red"],
      name: "red pepper flakes",
      original: "couple of pinches red pepper flakes, optional",
      originalName: "couple of red pepper flakes, optional",
      unit: "pinches",
    },
    {
      aisle: "Spices and Seasonings",
      amount: 2.0,
      consitency: "solid",
      id: 1102047,
      image: "salt-and-pepper.jpg",
      measures: {
        metric: {
          amount: 2.0,
          unitLong: "servings",
          unitShort: "servings",
        },
        us: {
          amount: 2.0,
          unitLong: "servings",
          unitShort: "servings",
        },
      },
      meta: ["to taste"],
      name: "salt and pepper",
      original: "salt and pepper, to taste",
      originalName: "salt and pepper, to taste",
      unit: "servings",
    },
    {
      aisle: "Produce",
      amount: 3.0,
      consitency: "solid",
      id: 11291,
      image: "spring-onions.jpg",
      measures: {
        metric: {
          amount: 3.0,
          unitLong: "",
          unitShort: "",
        },
        us: {
          amount: 3.0,
          unitLong: "",
          unitShort: "",
        },
      },
      meta: ["white", "green", "separated", "chopped"],
      name: "scallions",
      original: "3 scallions, chopped, white and green parts separated",
      originalName: "scallions, chopped, white and green parts separated",
      unit: "",
    },
    {
      aisle: "Alcoholic Beverages",
      amount: 2.0,
      consitency: "liquid",
      id: 14106,
      image: "white-wine.jpg",
      measures: {
        metric: {
          amount: 2.0,
          unitLong: "Tbsps",
          unitShort: "Tbsps",
        },
        us: {
          amount: 2.0,
          unitLong: "Tbsps",
          unitShort: "Tbsps",
        },
      },
      meta: ["white"],
      name: "white wine",
      original: "2-3 tbsp white wine",
      originalName: "white wine",
      unit: "tbsp",
    },
    {
      aisle: "Pasta and Rice",
      amount: 0.25,
      consitency: "solid",
      id: 99025,
      image: "breadcrumbs.jpg",
      measures: {
        metric: {
          amount: 59.147,
          unitLong: "milliliters",
          unitShort: "ml",
        },
        us: {
          amount: 0.25,
          unitLong: "cups",
          unitShort: "cups",
        },
      },
      meta: ["whole wheat", "(I used panko)"],
      name: "whole wheat bread crumbs",
      original: "1/4 cup whole wheat bread crumbs (I used panko)",
      originalName: "whole wheat bread crumbs (I used panko)",
      unit: "cup",
    },
  ],
  summary:
    'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375">Cauliflower Gratin with Garlic Breadcrumbs</a>, < href="https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href="https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a>.',
  winePairing: {
    pairedWines: ["chardonnay", "gruener veltliner", "sauvignon blanc"],
    pairingText:
      "Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.",
    productMatches: [
      {
        id: 469199,
        title: "Buddha Kat Winery Chardonnay",
        description:
          "We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.",
        price: "$25.0",
        imageUrl: "https://spoonacular.com/productImages/469199-312x231.jpg",
        averageRating: 0.8,
        ratingCount: 1.0,
        score: 0.55,
        link: "https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20",
      },
    ],
  },
};

export const fact = `<style>
#spoonacular-nutrition-label,
#spoonacular-nutrition-ingredient-list {
    border: 1px solid black;
    margin: 0 auto;
    width: 300px;
    padding: .5rem;
    font-family: Helvetica, Arial, sans-serif, sans-serif;
    font-size: 14px;
    color: #333;
    background-color: #fff
}

#spoonacular-nutrition-ingredient-list {
    text-transform: uppercase
}

#spoonacular-nutrition-label div.separator {
    border-bottom: 10px solid black
}

#spoonacular-nutrition-label>div:first-of-type {
    border-bottom: 10px solid black;
    padding: 0 0 .25rem 0;
    margin: 0 0 .5rem 0
}

#spoonacular-nutrition-label>div:first-of-type p {
    margin: 0;
    font-size: 16px
}

#spoonacular-nutrition-label table {
    border-collapse: unset;
    border-spacing: 0;
    font-size: 14px;
    width: 100%
}

#spoonacular-nutrition-label table td {
    font-weight: normal;
    text-align: left;
    padding: .3rem 0;
    border-top: 1px solid black;
    vertical-align: middle
}

#spoonacular-nutrition-label table .empty {
    width: 1rem;
    border-top: 0
}

#spoonacular-nutrition-label table #calorie-summary td {
    font-size: 33px;
    border: 0 none !important
}

#spoonacular-nutrition-label b {
    font-weight: 900
}

#spoonacular-nutrition-label .separator td {
    border-top-width: 5px
}

#spoonacular-nutrition-label table:first-of-type td:last-child {
    text-align: right !important
}

#spoonacular-nutrition-label table:nth-of-type(2) td:first-child {
    text-align: left !important
}

#spoonacular-nutrition-label table:nth-of-type(2) td:nth-of-type(2) {
    text-align: right !important
}

#spoonacular-nutrition-label .small {
    font-size: 11px
}

#spoonacular-nutrition-label h1.separator {
    border-bottom: 1px solid black
}

#spoonacular-nutrition-label h1 {
    font-size: 35px;
    margin: 0 0 .25rem 0
}
</style>
<section id=spoonacular-nutrition-label>
<div>
    <h1><b>Nutrition Facts</b></h1>
</div><b>Amount Per Serving</b>
<table>
    <tr id=calorie-summary>
        <td colspan=2><b>Calories</b>
        <td><b>787</b>
    <tr class=separator>
        <td colspan=3 class=small><b>% Daily Value*</b>
    <tr>
        <td colspan=2><b>Total Fat</b> 33g
        <td><b>43%</b>
    <tr>
        <td class=empty>
        <td>Saturated Fat 8g
        <td><b>39%</b>
    <tr>
        <td class=empty>
        <td><i>Trans</i> Fat 0.09g
        <td>
    <tr>
        <td colspan=2><b>Cholesterol</b> 96mg
        <td><b>32%</b>
    <tr>
        <td colspan=2><b>Sodium</b> 964mg
        <td><b>42%</b>
    <tr>
        <td colspan=2><b>Total Carbohydrate</b> 81g
        <td><b>30%</b>
    <tr>
        <td class=empty>
        <td>Dietary Fiber 10g
        <td><b>36%</b>
    <tr>
        <td class=empty>
        <td>Total Sugars 8g
        <td>
    <tr>
        <td colspan=2><b>Protein</b> 41g
        <td><b>81%</b>
</table>
<div class=separator></div>
<table>
    <tr>
        <td>Vitamin D 0.95mcg
        <td>5%
    <tr>
        <td>Calcium 180mg
        <td>14%
    <tr>
        <td>Iron 5mg
        <td>28%
    <tr>
        <td>Potassium 2396mg
        <td>51%
    <tr class=separator>
        <td colspan=2 class=small>*The % Daily Value tells you how much a nutrient in a serving of food contributes
            to a daily diet. 2,000 calories a day is used for general nutrition advice.
</table>
</section>`;
