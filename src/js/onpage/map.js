ymaps.ready(function () {
  var myMapInf = new ymaps.Map('map', {
    center: [53.234492, 34.355197],
    zoom: 17,
    controls: []
  }, {
    searchControlProvider: 'yandex#search'
  }),
  myPlacemarkInf = new ymaps.Placemark(myMapInf.getCenter(), {
    hintContent: 'Брянск, ул. Красноармейская 31, оф. 216 г',
    balloonContent: 'Брянск, ул. Красноармейская 31, оф. 216 г'
  }, {
    iconLayout: 'default#image',
    iconImageHref: '/img/icons/logo-map.png',
    iconImageSize: [63, 78],
    iconImageOffset: [-25, -75]
  });
  myMapInf.geoObjects.add(myPlacemarkInf);
  myMapInf.behaviors.disable('scrollZoom');
  if($(window).width() <= 1170){
    myMapInf.behaviors.disable('drag');
  }
  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: "large",
      position: {
        right: 20,
        top: 250
      }
    }
  });
  myMapInf.controls.add(zoomControl);
});