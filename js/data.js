const data = {
    roadmap: {
        logo: 'logoshiba.svg'
    },
    backer: [
        'seaour.png',
        'seaour2.png',
        'seaour2.png',
        'seaour2.png',
    ]
};

var img = '<img src="img/'+data.roadmap.logo+'">';
$('.timeline-content-icon').html(img);

for(var i = 0; i < data.backer.length; i ++) {
    console.log(i);
    var backer = $('.backer-item:first').clone();
    backer.removeAttr('style');
    backer.find('img').attr('src', 'img/' + data.backer[i]);
    $('.backer-list').append(backer);
}