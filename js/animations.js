let cursor = document.querySelector(".cursor"),
    follower = document.querySelector(".cursor-follower");

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        document.querySelector('body').style.cursor = 'block'
    } else{
        var posX = 0,
        posY = 0;
    
    var mouseX = 0,
        mouseY = 0;
    
    gsap.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
            posX += (mouseX - posX) / 6;
            posY += (mouseY - posY) / 6;
    
            gsap.set(follower, {
                css: {
                    left: posX - 12,
                    top: posY - 12
                }
            });
    
            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });
    
    document.querySelector('body').addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    document.querySelector('body').style.cursor = 'none'
    
    document.querySelectorAll('button').forEach(el=>{
        el.classList.add('link');
    })
    document.querySelectorAll('a').forEach(el=>{
        el.classList.add('link');
    })
    
    document.querySelectorAll('.link').forEach(el =>{
        el.addEventListener('mouseenter', function () {
            cursor.classList.add('active');
            follower.classList.add('active');
        });
    })
    document.querySelectorAll('.link').forEach(el=>{
        el.addEventListener('mouseleave', function () {
            cursor.classList.remove('active');
            follower.classList.remove('active');
        });
    })
    
    
    
    }

