let myData = [1,2,3,4,5];


var svgContainer = d3.select("body").append("svg")
  .attr("width", 200)
  .attr("height", 200);


for (let i = 0; i < myData.length; i++) {
  pos = 25*myData[i]
  color = ""
  if (i%2 !=0) {
    color = "red"
  }
  else{
    color = "green"
  }
  svgContainer.append("circle")
  .attr("cx", pos)
  .attr("cy", pos)
  .attr("r", 25)
  .style("fill", color);
}

