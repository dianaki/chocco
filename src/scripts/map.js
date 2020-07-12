let myMap;

function init() {
  myMap = new ymaps.Map("map", {
    center: [55.752264, 37.600023],
    zoom: 13,
    controls: []
  });

  const myPlacemark = [
    [55.755565, 37.620905],
    [55.748141, 37.604512],
    [55.742889, 37.583089],
    [55.758612, 37.583919]
  ]

  const myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: './images/marker.png',
    iconImageSize: [46, 57],
    iconImageOffset: [-35, -52]
  });


  for (let i = 0; i < myPlacemark.length; i++) {
    myCollection.add(new ymaps.Placemark(myPlacemark[i]));
  }

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
};
ymaps.ready(init);