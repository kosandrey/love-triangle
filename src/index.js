/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var lngth = preferences.length;
  var was_checked =[];
  for(var i = 0; i < lngth; i++)
  {
    was_checked[i] = false;
  }
  var first_angle;
  var second_angle;
  var thirth_angle;
  var amount = 0;
  for(var i = 0; i < lngth; i++)
  {
    first_angle = preferences[i];
    if(first_angle != i+1)
    {
      second_angle = preferences[first_angle - 1];
      if(second_angle != i+1 && second_angle != first_angle)
      {
        thirth_angle = preferences[second_angle - 1];
        if (thirth_angle == i+1 && was_checked[first_angle - 1] == false && was_checked[second_angle - 1] == false && was_checked[thirth_angle - 1] == false)
        {
          amount++;
          was_checked[first_angle - 1] = true;
          was_checked[second_angle - 1] = true;
          was_checked[thirth_angle - 1] = true;
        }
      }
    }
  }
  return amount;// your implementation
};
