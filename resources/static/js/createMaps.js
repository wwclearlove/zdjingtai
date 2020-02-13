window.onload = function() {
  //创建地图
  var map = new AMap.Map("container", {
    resizeEnable: true,
    zoom: 18, // 缩放层级
    center: [103.7199819088, 29.5266459849] //中心点
  });
  //左上角缩放、移动、定位功能
 map.setFeatures(["bg", "building", "road", "point"]);
  AMap.plugin(["AMap.ToolBar", "AMap.Scale", "AMap.MapType"], function() {
    map.addControl(new AMap.ToolBar());
    map.addControl(new AMap.Scale());
  });
  //中心定位图标显示
  var marker = new AMap.Marker({ position: [103.7199819088, 29.5266459849] });
  marker.setMap(map);
  //中心定位范围显示
  var circle = new AMap.Circle({
    center: [103.7199819088, 29.5266459849],
    radius: 50,
    fillOpacity: 0.2,
    strokeWeight: 1
  });
  circle.setMap(map);
};
