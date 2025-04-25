window.addEventListener('load',function(e){
    let mainGallary = document.getElementsByClassName('mainGallary')[0];
    for (let i = 0; i < 100; i++) {
        let img = document.createElement('img');
        img.src = "assets/imgs/b.jpg";
        img.className = "bImg"
        mainGallary.appendChild(img);
    }
})