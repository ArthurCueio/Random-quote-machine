const quotes = [
  {
    quote: 'No man has a good enough memory to be a successful liar.',
    author: 'Abraham Lincoln'
  },
  {
    quote: 'Be stupid, be dumb, be funny, if that\'s who you are. Don\'t try to be someone that society wants you to be; that\'s stupid. So be yourself.',
    author: 'Christina Grimmie'
  },
  {
    quote: 'A day without sunshine is like, you know, night.',
    author: 'Steve Martin'
  },
  {
    quote: 'I may be drunk, Miss, but in the morning I will be sober and you will still be ugly.',
    author: 'Winston Churchill'
  },
  {
    quote: 'Trust is hard to come by. That\'s why my circle is small and tight. I\'m kind of funny about making new friends.',
    author: 'Eminem'
  },
  {
    quote: 'Roses are red, violets are blue, I\'m schizophrenic, and so am I.',
    author: 'Oscar Levant'
  },
  {
    quote: 'I can resist everything except temptation.',
    author: 'Oscar Wilde'
  },
  {
    quote: 'Life is hard. After all, it kills you.',
    author: 'Katharine Hepburn'
  },
  {
    quote: 'Procrastination is the art of keeping up with yesterday.',
    author: 'Don Marquis'
  },
  {
    quote: 'I\'m sorry, if you were right, I\'d agree with you.',
    author: 'Robin Williams'
  },
  {
    quote: 'The best ideas come as jokes. Make your thinking as funny as possible.',
    author: 'David Ogilvy'
  },
  {
    quote: 'It\'s simple, if it jiggles, it\'s fat.',
    author: 'Arnold Schwarzenegger'
  },
  {
    quote: 'If any of the quotes here are false blame brainyquote.com',
    author: 'this.developer'
  },
];

const newQuote = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)]
  $('#text').text(quote.quote);
  $('#author').text(quote.author);
  $("#tweet-quote").attr("href", `https://twitter.com/intent/tweet?text=${quote.quote}`)
}

$(document).ready( () => {
  newQuote();
  
  $('#new-quote').click(newQuote);
});