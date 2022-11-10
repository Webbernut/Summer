document.addEventListener('DOMContentLoaded', () => {
                        const hero = document.querySelector('.special__block_text');
                        const circle = document.querySelector('.special__circle');
                        const up = document.querySelector('.up');
                        const priorities = document.querySelector('.priorities__column');

                        const special_anim = () => {
                            let scrollTop = window.scrollY / 6.5;
                            let heroCenter = hero.offsetHeight / 2;

                            if (scrollTop >= heroCenter) {
                                hero.style.opacity = 1;
                                circle.style.marginBottom = "20px";
                                up.style.opacity = 1;
                            } else {
                                hero.style.opacity = 0;
                                circle.style.marginBottom = "100px";
                                up.style.opacity = 0;
                            }
                            if (scrollTop < heroCenter){
                                up.style.opacity = 0;
                            }
                        };

                        special_anim();
                        window.addEventListener('scroll', () => {
                            special_anim();
                        });
                    });
function up(){
    window.scrollTo(0,0);
    document.getElementById("up").style.opacity = 0;
}