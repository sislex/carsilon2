export function getSortedRoutes(routes, destination) {
  return distanceRoutesPoint(routes, destination);
}

function distanceRoutesPoint(routes, destination) {
  routes.forEach((route) => {
    route.distance = distanceRoutePoint(route, destination);
  });
  var sorted = routes.sort((a,b) => a.distance - b.distance);
  //sorted.forEach(route => {console.log(route.distance);})
  return sorted;
}

function distanceRoutePoint(route, destination) {
  var bestPath;
  for (var i = 0 ; i < route.allPoints.length - 1; i++) {
    var path = distanceSegmentPoint(destination, route.allPoints[i], route.allPoints[i+1]);
    bestPath = (bestPath && (bestPath < path)) ? bestPath : path;
    //console.log(path);
  }
  //console.log(bestPath);
  return bestPath;
}

function distanceSegmentPoint (pt, p1, p2){
  var closest;
  var dx = p2[0] - p1[0];
  var dy = p2[1] - p1[1];
  if ((dx == 0) && (dy == 0))
  {

    closest = p1;
    dx = pt[0] - p1[0];
    dy = pt[1] - p1[1];
    return Math.sqrt(dx * dx + dy * dy);
  }
  var t = ((pt[0] - p1[0]) * dx + (pt[1] - p1[1]) * dy) / (dx * dx + dy * dy);

  if (t < 0)
  {
    closest = [p1[0], p1[1]];
    dx = pt[0] - p1[0];
    dy = pt[1] - p1[1];
  }
  else if (t > 1)
  {
    closest = [p2[0], p2[1]];
    dx = pt[0] - p2[0];
    dy = pt[1] - p2[1];
  }
  else
  {
    closest = [(p1[0] + t * dx), (p1[1] + t * dy)];
    dx = pt[0] - closest[0];
    dy = pt[1] - closest[1];
  }
  return Math.sqrt(dx * dx + dy * dy);
}
