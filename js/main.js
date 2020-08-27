var MAM = MAM || {};
MAM.bindEvents = function () {
    var userProfile = $('.si-userProfile__link.si-dropdown__toggle')
    var mainMenu = $('#menu');
    var popup = document.querySelector('.si-videoDetail');

    userProfile.on('click', function () {
        $(this).parent().toggleClass('si-show');
    });

    mainMenu.on('click', function () {
        $('.si-mediaLib__left').toggleClass('open');
        $('.si-mediaLib__right').toggleClass('open');
    })

    var rowNode = document.querySelectorAll('.si-tbls__body .si-tbls__row');
    var rowArr = Array.prototype.slice.call(rowNode);
    rowArr.forEach(el => {
        el.addEventListener('click',function(event){
            popup.parentElement.classList.toggle('active');     
            document.querySelector('#showMore').addEventListener('click',function(){
                this.parentElement.classList.toggle('active');
            })   
        })
    });

    $(window).click(function (event) {
        if (!userProfile.is(event.target) && userProfile.has(event.target).length === 0) {
            userProfile.parent().removeClass('si-show');
        }
        if (event.target == popup.parentElement) {
            popup.parentElement.classList.remove('active');
        }
    })


};

$(document).ready(function () {
    MAM.bindEvents();
});