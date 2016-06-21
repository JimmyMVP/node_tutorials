void sideLengths(
  highp float hypotenuse, 
  highp float angleInDegrees, 
  out highp float opposite, 
  out highp float adjacent) {
    
    
    
    angle = radians(angleInDegrees)
    adjacent = sin(angle)*hypotenuse
    opposite = cos(angle)*hypotenuse

    
    
}

//Do not change this line
#pragma glslify: export(sideLengths)