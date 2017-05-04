var webpage = require('webpage').create();

webpage
.open('https://slimerjs.org/') // loads a page
.then(function(){ // executed after loading
    // store a screenshot of the page
    webpage.viewportSize =
    { width:650, height:320 };
    webpage.render('page.png',
    {onlyViewport:true});
    // then open a second page
    return webpage.open('https://slimerjs.org/');
})
.then(function(){
    slimer.exit()
});
