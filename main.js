$.getJSON("https://api.spoonacular.com/recipes/random?number=3&tags=vegetarian,dessert&apiKey=cb1c464d94f142c08b156c5beddade8b", function(data){
    console.log(data);

    var logo = data.recipes[0].image;
    console.log(logo); 
    $('.slider_1_img').attr("src", logo);

    var Name = data.recipes[0].healthScore;
    console.log(Name); 
    $('.slider_1_h5').append("Health Score:- ",Name);

    var pricererserving = data.recipes[0].pricePerServing;
    console.log(pricererserving); 
    $('.slider_1_p').append("$ ",pricererserving);



    var logo = data.recipes[1].image;
    console.log(logo); 
    $('.slider_2_img').attr("src", logo);

    var Name = data.recipes[1].healthScore;
    console.log(Name); 
    $('.slider_2_h5').append("Health Score:- ",Name);

    var pricererserving = data.recipes[1].pricePerServing;
    console.log(pricererserving); 
    $('.slider_2_p').append("$ ",pricererserving);


    var logo = data.recipes[2].image;
    console.log(logo); 
    $('.slider_3_img').attr("src", logo);

    var Name = data.recipes[2].healthScore;
    console.log(Name); 
    $('.slider_3_h5').append("Health Score:- ",Name);

    var pricererserving = data.recipes[2].pricePerServing;
    console.log(pricererserving); 
    $('.slider_3_p').append("$ ",pricererserving);
});