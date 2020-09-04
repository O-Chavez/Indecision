// <%- include("../partials/logic") %> 



// // write the logic here, and refference it on the start.ejs




//   var randomNum = []
//   var data = []
// // add item to decison list from input
// $("input[type='text']").keypress(function(event){

//   if(event.which === 13){
//     var decisionList = $(this).val();
//     // add item as an li
//     $(this).val("");
//     $("ul").append("<li>" + decisionList + "</li>")
//     data.push(decisionList)


//   }
// });

// var result = [];
// // on button click, generate random number with a max of data.length and render it as an index of the origional data
// $('button[id=button-addon1]').click(function(){
//       randomNum = Math.floor(Math.random()* data.length)
//       // alert(data[randomNum])
//       result = data[randomNum]

//       // remove the ul from view
//       $("ul").addClass("ulList")



//       if(data.length <= 1){
//       alert("nothin left to remove!")
//     }
//       // add the result to the result card
//       $("h5[class='card-title']").prepend(result + "!");
//       // make result card visible
//       $("div[id='resultCard']").toggleClass("resultCard")
// });



// $('a[id="reRoll"]').click(function(){
//   // remove the index of the decison list previously rolled
//   if(data.length <= 1){
//       alert("nothin left to remove!")
//     } else {
//     data.splice(randomNum, 1);
//   console.log(data)
//       var myData = JSON.stringify(data);
//   // randomly select another item from the updated list
//   randomNum = Math.floor(Math.random()* data.length)

//   alert(data[randomNum])
//       result = data[randomNum]
//   // clear previous displayed result
//       $("h5[class='card-title']").empty()
//   // upadte rsult card
//     $("h5[class='card-title']").prepend(result + "!");

//     if(data.length <= 1){
//       $("h6[class='card-subtitle mb-2 text-muted']").empty("");
//       $("h6[class='card-subtitle mb-2 text-muted']").append("Nothin left to remove!");
//     }  
//     }
// })


// </script>
