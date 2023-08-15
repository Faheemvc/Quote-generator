let btn = document.getElementById("button");
let textArea = document.querySelector(".text-area");
let author = document.querySelector('.author');

let quotes = [
    {
      "quote": "The only way to do great work is to love what you do.",
      "author": "Steve Jobs"
    },
    {
      "quote": "In three words I can sum up everything I've learned about life: it goes on.",
      "author": "Robert Frost"
    },
    {
      "quote": "Be yourself; everyone else is already taken.",
      "author": "Oscar Wilde"
    },
    {
      "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      "author": "Nelson Mandela"
    },
    {
      "quote": "The future belongs to those who believe in the beauty of their dreams.",
      "author": "Eleanor Roosevelt"
    },
    {
        "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill"
      },
      {
        "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "author": "Albert Einstein"
      },
      {
        "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt"
      },
      {
        "quote": "Life is really simple, but we insist on making it complicated.",
        "author": "Confucius"
      },
      {
        "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
        "author": "Chinese Proverb"
      },
      {
        "quote": "The only thing we have to fear is fear itself.",
        "author": "Franklin D. Roosevelt"
      },
      {
        "quote": "The greatest wealth is to live content with little.",
        "author": "Plato"
      },
      {
        "quote": "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        "author": "Robert Louis Stevenson"
      },
      {
        "quote": "It is during our darkest moments that we must focus to see the light.",
        "author": "Aristotle"
      },
      {
        "quote": "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
        "author": "Joel Brown"
      },
      {
        "quote": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        "author": "Buddha"
      },
      {
        "quote": "The harder I work, the luckier I get.",
        "author": "Gary Player"
      }
  ]

  
  btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length );
    textArea.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
  })