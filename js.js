const nextPage = () => {
    window.location = "secondpage.html";
    document.writeln("<h1>Please wait... <br/> <br /> I am Feeling Shy....😇 </h1>");
    setTimeout('nextPage()',3000);   
}
