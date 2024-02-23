// //QUESTION # 36
// function make_shirt(size="Large", message="Hey World")
// {console.log("A",size,"shirt will be printed with the message:" ,message);}
// make_shirt();
// //QUESTION # 37
// function make_shirt2(size= "Large", message= "I love TypeScript")
// {console.log("A",size,"shirt will be printed with the message:",message);}
// make_shirt2(); 
// make_shirt2("Medium"); 
// make_shirt2("Small", "Hey universe");
// //QUESTION # 38
// function describe_city(city, country= "Pakistan")
// {console.log(city ,"is in",country)}
// describe_city("Hyderabad");
// describe_city("Quetta");
// describe_city("New York", "USA");
// //QUESTION # 39
// function city_country(city, country)
// {return  ('"'+city+","+country+'"');}
// let city1 = city_country("Lahore", "Pakistan");
// let city2 = city_country("Tokyo", "Japan");
// let city3 = city_country("New York", "USA");
// console.log(city1);
// console.log(city2);
// console.log(city3);
// //QUESTION # 40
// function make_album(artist, title, tracks)
// {let album = { artist: artist, title: title };
// if (tracks !== undefined) {album.tracks = tracks;}
// return album;}
// let album1 = make_album("Artist1", "Album1");
// let album2 = make_album("Artist2", "Album2", 12); 
// let album3 = make_album("Artist3", "Album3");
// console.log(album1);
// console.log(album2);
// console.log(album3);
//QUESTION # 41
// function show_magicians(magicians=["Aamir Latif" ,"Munawar Khan","Adeel Hashmi","Saad Amin", "Umer Sharif"])
// {for (let i = 0; i < magicians.length; i++) 
//     {console.log(magicians[i]);}}
// show_magicians();
// //QUESTION # 42
// function show_magicians(magicians=["Aamir Latif" ,"Munawar Khan","Adeel Hashmi","Saad Amin", "Umer Sharif"]) 
// {for (let i = 0; i < magicians.length; i++)
//      { console.log(magicians[i]);}}
// function make_great(magicians=["Aamir Latif" ,"Munawar Khan","Adeel Hashmi","Saad Amin", "Umer Sharif"])
//  {let great_magicians= [];
//     for (let i = 0; i < magicians.length; i++) {
//         great_magicians.push(magicians[i] + " the Great"); }
//     return great_magicians;}
// let great_magician_names = make_great();
// show_magicians(great_magician_names);
// //QUESTION # 43       uncomment q 41 & 42 for this question as functions are defined above
// let magician_names=["Aamir Latif" ,"Munawar Khan","Adeel Hashmi","Saad Amin", "Umer Sharif"];
// let magician_names_copy = [...magician_names];
// let great_magician_names2= make_great(magician_names_copy);
// console.log("Original Magicians:");
// show_magicians(magician_names);
// console.log("\nMagicians with 'the Great' added:");
// show_magicians(great_magician_names2);
//QUESTION # 44
// function makeSandwich(bread, ...fillings){
//     console.log("Making a Subway sandwich with the following items:");
//     console.log("- " + bread + " bread");
//     for (let i = 0; i < fillings.length; i++) {
//         console.log("- " + fillings[i]);}
//     console.log("Your Subway Sandwich is ready!");}
// makeSandwich("Grain Honey Oat", "Turkey", "Lettuce", "Tomato", "Onion", "Pickles", "Mayonnaise");
//QUESTION # 45
// function createCar(manufacturer, modelName) {
//     var options = [];
//     for (var _i = 2; _i < arguments.length; _i++) {
//         options[_i - 2] = arguments[_i];
//     }
//     var car = { manufacturer: manufacturer, modelName: modelName };
//     options.forEach(function (option) {
//         Object.keys(option).forEach(function (key) { car[key] = option[key]; });
//     });
//     return car;
// }
// var myCar = createCar("Honda", "Civic", { color: "blue" }, { year: 2022 }, { hasSunroof: true });
// console.log(myCar);
