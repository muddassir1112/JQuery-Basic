// var arr = [{}]
// $('button').on({click:function()
//     {console.log('Hello')
// }
// });
$(function(){
    var flower = [
  "Rose",
  "Lotus",
  "Jasmine",
  "Sunflower",
  "Daisy",
  "Tulip",
  "Magnolia",
  "Lavender",
  "Balsam",
  "Flax",
  "Butterfly Pea",
  "Clitoria ternatea",
  "Crossandra",
  "infundibuliformis",
  "Golden Shower",
  "Cassia fistula",
  "Forest Ghost",
  "Aeginetia indica",
  "Yellow Marigold",
  "Tagetes",
  "Pot Marigold",
  "Calendula officinalis",
  "Star Jasmine",
  "Trachelospermum jasminoides",
  "Night Blooming Jasmine",
  "Cestrum nocturnum",
  "Primrose",
  "Primula vulgaris",
  "Crape Jasmine",
];

$( "#suggest" ).autocomplete({
    source: flower
  });
})