/*global chrome*/

// alert('hello from your chrome extension!');

// chrome.runtime.sendMessage();

let media = new Audio(
  chrome.runtime.getURL(
    'https://www.youtube.com/watch?v=SjHUb7NSrNk&ab_channel=Grayhyaena'
  )
);

media.play();
