// const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
// function count(text){

// const count = {};

// text.split("0").forEach(e=> { count[e] = count[e] ? (count[e]+1):1;});

// return(count);}


    // var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    // count ={};

    // text.split("").forEach(e=> count[e] = (count[e] || 0)+1);
    // console.log(count.split('o').length-1);


    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

    let findLorem = text.split(' ').includes("Lorem");
    let count = text.split(' ').join('').split('o').length-1.;
    console.log(count);
    console.log(findLorem);



//     const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
// const count = text.split('').reduce((count, char) => {
//   if (char === 'o') {
//     return count + 1;
//   }
//   return count;
// }, 0);

// console.log(count);