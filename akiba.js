$(function() {
  var center = new google.maps.LatLng(35.698683, 139.774219);

  /* Google Map */
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17, center: center, mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  /* Confirm */
  if(!confirm('このページは Twitter API を大量に (23 回ぐらい) 消費しますが，続けますか？')) return;

  /* Akiba Shop Class */
  function AkibaShop(id, latitude, longitude) {

    $.getJSON('http://twitter.com/statuses/user_timeline/' + id + '.json?callback=?', function(json) {
      var j = json[0];
      var latlng = new google.maps.LatLng(latitude, longitude);
      var marker = new google.maps.Marker({
        title: j.user.name,
        position: latlng,
        map: map,
        icon: j.user.profile_image_url,
      });
      
      var infowindow = new google.maps.InfoWindow({
        content: $('<div class="tweet" />').append(
          $('<a />').attr('href', 'http://twitter.com/' + id).append(
            $('<div class="name" />').text(j.user.name + ' (@' + j.user.screen_name + ')')
          )
        ).append(
          $('<div class="text" />').text(j.text)
        ).html(),
        maxWidth: 300,
      });

      var shown = true;
      google.maps.event.addListener(marker, 'click', function() {
        if(shown = !shown)
          infowindow.open(map, marker);
        else
          infowindow.close(map, marker);
      });
      google.maps.event.addListener(marker, 'dblclick', function() {
        location.href = 'http://twitter.com/' + id;
      });

      infowindow.open(map, marker);
    });

  }

  new AkibaShop('oliospec', 35.699325, 139.768822);
  new AkibaShop('tthonten', 35.701025, 139.771035);
  new AkibaShop('ocworks',  35.703460, 139.769977);
  new AkibaShop('faith_go', 35.702072, 139.772455);
  new AkibaShop('ark_akiba', 35.702077, 139.771138);
  new AkibaShop('clevery1', 35.700575, 139.770986);
  new AkibaShop('clevery2', 35.700416, 139.770941);
  new AkibaShop('cleverynet', 35.701277, 139.771133);
  new AkibaShop('TSUKUMO_HONTEN', 35.69889, 139.770273);
  new AkibaShop('Tsukumo_eX', 35.701119, 139.771866);
  new AkibaShop('ph_toei', 35.698869, 139.770097);
  new AkibaShop('jyanjyan_tei', 35.701613, 139.770663);
  new AkibaShop('akiba_ten_M', 35.700394, 139.770586);
  new AkibaShop('cafetriomphe', 35.703486, 139.772646);
  new AkibaShop('technologia999', 35.702474, 139.773438);
  new AkibaShop('super_potato', 35.699375, 139.770711);
  new AkibaShop('yourmaiden', 35.702108, 139.770433);
  new AkibaShop('busou', 35.701688, 139.771313);
  new AkibaShop('comiczin', 35.69953, 139.771024);
  new AkibaShop('AkibaGuild', 35.701688, 139.771313);
  new AkibaShop('akibajoshiryou', 35.7026, 139.772508);
  new AkibaShop('schatz1', 35.701325, 139.770841);
  new AkibaShop('dearstage', 35.701041, 139.770811);
});
