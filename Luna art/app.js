hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('x');
    nav.classList.toggle('open');
})

mapboxgl.accessToken = 'pk.eyJ1IjoidG9raW9ib3kiLCJhIjoiY2w1ODIxMjV2MWRkeTNrcGJtbTdtdnhzciJ9.pPOEquxCJnl4OihAYBsBeQ';

let loc = [139.7583324197658 , 35.79378944095339];
let map = new mapboxgl.Map({
    container: 'studio',
    center: loc,
    // long,lat
    zoom: 14,
    style: 'mapbox://style/mapbox/dark-v10'
});

map.scrollZoom.disable();   
map.addControl(new mapboxgl.NavigationControl());

let marker = document.createElement('div');
marker.id = 'marker';

let popup = new mapboxgl.Popup({offset: 70})
.setText('div');

new mapboxgl.Marker(marker, {anchor: 'bottom'})
.setLngLat(loc)
.addTo(map)
.setPopup(popup);