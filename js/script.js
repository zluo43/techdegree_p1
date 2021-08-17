/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Grade: I'm going for a exceeding expectation

//variable declaration
const btn=document.getElementById('load-quote');

let quote= [
  {
    "quote": "Everything that is created begins in the mind",
    "source": "Fishel, Ruth ",
  
    "tags": 'Famous scholars' 
    
  },
  {
    "quote": "To learn to think is to learn how to live.",
    "source": "Custer, Dan",
  
    "tags": 'Famous scholars' 
    
  },
  {
     "quote": "It is during our darkest moments that we must focus to see the light.",
    "source": "Aristotle",
   
    "tags":'Famous scholars' 
   
  },
   {
    "quote": "Why is it that people who can’t take advice always insist on giving it?",
    "source": "007",
    "year": '2006',
    "citation": "Orginated from agsent 007 in Casino Royale",
    "tags": "movie"
  },
    {
    "quote": "Dying For The Right Cause. It's The Most Human Thing We Can Do.",
    "source": "K",
    "year": '2017',
    "citation": 'Orginated from K in movie Blade Runner 2049',
    "tags": 'Movie' 
  },
    {
    "quote": "A Hero Can Be Anyone, Even A Man Doing Something As Simple And Reassuring As Putting A       Coat Around A Young Boy's Shoulders To Let Him Know The World Hadn't Ended.",
    "source": "Bruce Wayne",
    "year":'2012',
    "citation": 'Orginatedf from Bruce Wayne in movie Dark Knight Rises',
    "tags": 'Movie' 
  },
    {
    "quote": "Those times when you get up early and you work hard, those times when you stay up late and you work hard, those times when you don’t feel like working, you’re too tired, you don’t want to push yourself, but you do it anyway. That is actually the dream. That’s the dream. It’s not the destination, it’s the journey. And if you guys can understand that, then what you’ll see happen is you won’t accomplish your dreams, your dreams won’t come true; something greater will.",
    "source": "Kobe Bryant",
    "year":'2017',
    "citation": 'Retirement Ceremony',
    "tags": 'Sport celebrity'  
  }
  
];


/***
 * `getRandomQuote` function

***/
const getRandomQuote=()=>{
  const randint=Math.floor(Math.random() * 7) //7 quotes in total
	var content=quote[randint]
	return content;



}



/***
 * `printQuote` function
***/
const printQuote=()=>{
  const random=getRandomQuote();
  let html;
  if ('citation' in random) { 
      html=` <p class="quote"> ${random.quote} </p>
             <p class="source"> ${random.source}
            
                <span class="citation">${random.citation}</span>
                <span class="year"> ${random.year} </span> 
              <p class=“category"> ${random.tags
          
        }
    </p>`} else{ html=` <p class="quote"> ${random.quote} </p>
                          <p class="source"> ${random.source} </p>
                          <p class=“category"> ${random.tags
                      
                    }`

  };
  document.getElementById('quote-box').innerHTML = html;

  //printQuote function should trigger background_color change as well
  color();




};



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


/***
 * extra credit:change background color
***/

// code adopted from :https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php

const color=()=>{
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  
    document.body.style.background = bgColor;

};

//Let quote button change background color 

document.getElementById('load-quote').addEventListener("click", color, false);


//auto refresh function 

setInterval(printQuote, 20000);