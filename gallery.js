
        document.addEventListener("DOMContentLoaded", function () {
            const images = document.querySelectorAll(".gallery img");
            const lightbox = document.getElementById("lightbox");
            const lightboxImg = document.getElementById("lightbox-img");
            
            images.forEach(image => {
                image.addEventListener("click", function () {
                    lightboxImg.src = this.src;
                    lightbox.classList.add("active");
                });
            });
            
            lightbox.addEventListener("click", function () {
                lightbox.classList.remove("active");
            });
        });
  