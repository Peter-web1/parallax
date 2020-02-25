$('.mouse-parallax').on('mousemove', (e) =>{
    /*повесить событие mousemove на блок обиёртку .mouse-parallax*/
    const x = e.pageX / $(window).width();
    const y = e.pageY / $(window).height();
    /* расчитаем некие обстрактные координаты x т y которые будут получтся за счёт деления координат мышки на размеры нашего окна*/
    $('.mouse-parallax_background').css(
        'transform',
        'translate(-' + x * 30 + 'px, -' + y * 30 +'px)'
    
    /* используя наши обстрактные координаты мы будем перемещать наш здний фон и контент*/
    );

    $('.mouse-parallax_content').css(
        'transform',
        'translate(' + x * 60 + 'px, ' + y * 60 +'px)'
    
    /* убирае знак -, и делаем скорость в 2 раза больше*/
    );
});