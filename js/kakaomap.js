// 지도
var mapContainer = document.getElementById('map'); 
var mapOption = { 
    center: new kakao.maps.LatLng(37.566794, 126.978653), 
    level: 3 
};
        
var map = new kakao.maps.Map(mapContainer, mapOption);

var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);