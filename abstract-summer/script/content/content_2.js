document.addEventListener('DOMContentLoaded', () => {
        const priorities = document.querySelector('.priorities');
        const dop_info = document.querySelector('.dop_info');
        const exactly = document.querySelector('.exactly');
        const date = document.querySelector('.date');
        const august__1 = document.querySelector('.august__block_text_1');
        const august__2 = document.querySelector('.august__block_text_2');
        const august__3 = document.querySelector('.august__block_text_3');
        const trips = document.querySelector('.trips__column');

        const trips__anim = () =>{
            let scrollTop = window.scrollY / 83.5;
            let tripsCenter = trips.offsetHeight / 2;

            if (scrollTop >= tripsCenter) {
                document.querySelector(`.trips__line_1`).style.marginTop = "0";
                document.querySelector(`.trips__line_2`).style.marginTop = "0";
                document.querySelector(`.trips__line_3`).style.marginTop = "0";
                document.querySelector(`.trips__text_1`).style.marginLeft = "0.98vw";
                document.querySelector(`.trips__text_2`).style.marginLeft = "0.98vw";
                document.querySelector(`.trips__text_3`).style.marginLeft = "0.98vw";
            }
            else{
                document.querySelector(`.trips__line_1`).style.marginTop = "4.1vw";
                document.querySelector(`.trips__line_2`).style.marginTop = "4.1vw";
                document.querySelector(`.trips__line_3`).style.marginTop = "4.1vw";
                document.querySelector(`.trips__text_1`).style.marginLeft = "-14.65vw";
                document.querySelector(`.trips__text_2`).style.marginLeft = "-14.65vw";
                document.querySelector(`.trips__text_3`).style.marginLeft = "-14.65vw";
            }
        }

        const august__anim_1 = () =>{
            let scrollTop = window.scrollY / 48.5;
            let august__1Center = august__1.offsetHeight / 2;
            if (scrollTop >= august__1Center) {
                document.querySelector(`.august__block_text_1`).style.opacity = "1";
                document.querySelector(`.august__block_text_1`).style.marginLeft = "7.32vw";
            }
            else{
                document.querySelector(`.august__block_text_1`).style.opacity = "0";
                document.querySelector(`.august__block_text_1`).style.marginLeft = "-7.32vw";
            }
        };

        const august__anim_2 = () =>{
            let scrollTop = window.scrollY / 52.5;
            let august__2Center = august__2.offsetHeight / 2;
            if (scrollTop >= august__2Center) {
                document.querySelector(`.august__block_text_2`).style.opacity = "1";
                document.querySelector(`.august__block_text_2`).style.marginRight = "7.32vw";
            }
            else{
                document.querySelector(`.august__block_text_2`).style.opacity = "0";
                document.querySelector(`.august__block_text_2`).style.marginRight = "-7.32vw";
            }
        };

        const august__anim_3 = () =>{
            let scrollTop = window.scrollY / 57;
            let august__1Center = august__3.offsetHeight / 2;
            if (scrollTop >= august__1Center) {
                document.querySelector(`.august__block_text_3`).style.opacity = "1";
                document.querySelector(`.august__block_text_3`).style.marginLeft = "7.32vw";
            }
            else{
                document.querySelector(`.august__block_text_3`).style.opacity = "0";
                document.querySelector(`.august__block_text_3`).style.marginLeft = "-7.32vw";
            }
        };

        const priorities_anim = () =>{
            let scrollTop = window.scrollY / 4.5;
            let prioritiesCenter = priorities.offsetHeight / 2;

            if (scrollTop >= prioritiesCenter) {
                document.querySelector(`.priorities__item_1`).style.opacity = "1";
                document.querySelector(`.priorities__item_1`).style.marginTop = "0";
                document.querySelector(`.priorities__item_2`).style.opacity = "1";
                document.querySelector(`.priorities__item_2`).style.marginTop = "0";
                document.querySelector(`.priorities__item_3`).style.opacity = "1";
                document.querySelector(`.priorities__item_3`).style.marginTop = "0";
            }
            else{
                document.querySelector(`.priorities__item_1`).style.opacity = "0";
                document.querySelector(`.priorities__item_1`).style.marginTop = "2.44vw";
                document.querySelector(`.priorities__item_2`).style.opacity = "0";
                document.querySelector(`.priorities__item_2`).style.marginTop = "4.88vw";
                document.querySelector(`.priorities__item_3`).style.opacity = "0";
                document.querySelector(`.priorities__item_3`).style.marginTop = "7.32vw";
            }
        };

        const dop_info__anim = () =>{
            let scrollTop = window.scrollY / 17.8;
            let dop_infoCenter = dop_info.offsetHeight / 2;

            if (scrollTop >= dop_infoCenter) {
                document.querySelector('.dop_info__line').style.width = "9.766vw";
            }
            else{
                document.querySelector('.dop_info__line').style.width = "0";
            }
        };

        const exactly_anim = () =>{
            let scrollTop = window.scrollY / 14;
            let exactlyCenter = exactly.offsetHeight / 2;

            if (scrollTop >= exactlyCenter) {
                document.querySelector('.exactly__line').style.width = "9.766vw";
            }
            else{
                document.querySelector('.exactly__line').style.width = "0";
            }
        };

        const date__anim = () =>{
            let scrollTop = window.scrollY / 10.7;
            let dateCenter = date.offsetHeight / 2;

            if (scrollTop >= dateCenter) {
                document.querySelector('.date__item_2018').style.marginLeft = "0";
                document.querySelector('.date__item_2019').style.marginTop = "0";
                document.querySelector('.date__item_2020').style.marginRight = "0";
                document.querySelector('.date__item_2018').style.opacity = "1";
                document.querySelector('.date__item_2019').style.opacity = "1";
                document.querySelector('.date__item_2020').style.opacity = "1";
            }
            else{
                document.querySelector('.date__item_2018').style.marginLeft = "-10.25vw";
                document.querySelector('.date__item_2019').style.marginTop = "7.81vw";
                document.querySelector('.date__item_2020').style.marginRight = "-10.74vw";
                document.querySelector('.date__item_2018').style.opacity = "0";
                document.querySelector('.date__item_2019').style.opacity = "0";
                document.querySelector('.date__item_2020').style.opacity = "0";
            }
        }

        priorities_anim();
        dop_info__anim();
        exactly_anim();
        date__anim();
        august__anim_1();
        august__anim_2();
        august__anim_3();
        trips__anim();
        window.addEventListener('scroll', () => {
            priorities_anim();
            dop_info__anim();
            exactly_anim();
            date__anim();
            august__anim_1();
            august__anim_2();
            august__anim_3();
            trips__anim();
        });
});