//not sure what I'll put here... maybe some fun animations? I may try to do that in CSS if I can...

$(document.body).on("click", ".portfolio-column", function() {
    console.log("Hello, world!");
    console.log(this.id);
    window.location = this.id + ".html";
});


/*$(document.body).on("click", ".portfolio-column", function() {
    console.log("Clicked a portfolio");
});*/