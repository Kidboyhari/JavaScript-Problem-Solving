const xhr = new XMLHttpRequest();
xhr.addEventListener((load) => {
    console.log(xhr.response);
});
xhr.open('GET','C:\Users\kidbo\Documents\Amazon Clone JS Project\amazon.html');
xhr.send();