var index = $('<li><a href="index.html"><img src="img/navigation/2.jpg" alt=""><span class="sdt_active"></span><span class="sdt_wrap"><span class="sdt_link">Home</span><span class="sdt_descr">Die Tischlerei ihres Vertrauens</span></span></a></li>');
var philosophie = $('<li><a href="philosophie.html"><img src="img/navigation/1.jpg" alt=""><span class="sdt_active"></span><span class="sdt_wrap"><span class="sdt_link">Philosophie</span><span class="sdt_descr">Der Kunde zuerst</span></span></a></li>');
var produkte = $('<li><a href="produkte.html"><img src="img/navigation/3.jpg" alt=""><span class="sdt_active"></span><span class="sdt_wrap"><span class="sdt_link">Produkte</span><span class="sdt_descr">Das müssen Sie gesehen haben</span></span></a></li>');
var referenzen = $('<li><a href="referenzen.html"><img src="img/navigation/4.jpg" alt=""><span class="sdt_active"></span><span class="sdt_wrap"><span class="sdt_link">Referenzen</span><span class="sdt_descr">Uns gibt es schon lange</span></span></a></li>');
var karierre = $('<li><a href="karriere.html"><img src="img/navigation/5.jpg" alt=""><span class="sdt_active"></span><span class="sdt_wrap"><span class="sdt_link">Karriere</span><span class="sdt_descr">Unsere Mitarbeiter</span></span></a></li>');
var kontakt = $('<li><a href="kontakt.html"><img src="img/navigation/6.jpg" alt=""><span class="sdt_active"></span><span class="sdt_wrap"><span class="sdt_link">Kontakt</span><span class="sdt_descr">Wir sind gleich ums Eck</span></span></a></li>');

var navigationDiv = $('<div id="navigation"><ul id="sdt_menu" class="sdt_menu"></ul></div>');

navigationDiv.children('ul').append(index).append(philosophie).append(produkte).append(referenzen).append(karierre).append(kontakt);

$('#nav').append(navigationDiv);


$(function() {
    /**
     * for each menu element, on mouseenter, 
     * we enlarge the image, and show both sdt_active span and 
     * sdt_wrap span. If the element has a sub menu (sdt_box),
     * then we slide it - if the element is the last one in the menu
     * we slide it to the left, otherwise to the right
     */
    $('#sdt_menu > li').bind('mouseenter', function() {
        var $elem = $(this);
        $elem.find('img')
                .stop(true)
                .animate({
            'width': '170px',
            'height': '170px',
            'left': '0px'
        }, 400, 'easeOutBack')
                .andSelf()
                .find('.sdt_wrap')
                .stop(true)
                .animate({'top': '140px'}, 500, 'easeOutBack')
                .andSelf()
                .find('.sdt_active')
                .stop(true)
                .animate({'height': '170px'}, 300, function() {
            var $sub_menu = $elem.find('.sdt_box');
            if ($sub_menu.length) {
                var left = '170px';
                if ($elem.parent().children().length == $elem.index() + 1)
                    left = '-170px';
                $sub_menu.show().animate({'left': left}, 200);
            }
        });
    }).bind('mouseleave', function() {
        var $elem = $(this);
        var $sub_menu = $elem.find('.sdt_box');
        if ($sub_menu.length)
            $sub_menu.hide().css('left', '0px');

        $elem.find('.sdt_active')
                .stop(true)
                .animate({'height': '0px'}, 300)
                .andSelf().find('img')
                .stop(true)
                .animate({
            'width': '0px',
            'height': '0px',
            'left': '85px'}, 400)
                .andSelf()
                .find('.sdt_wrap')
                .stop(true)
                .animate({'top': '25px'}, 500);
    });
});