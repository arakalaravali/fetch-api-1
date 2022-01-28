// created html element using DOM element
document.body.innerHTML = `
<div id="fetchdata">  
</div>
`;


//select the element to display the results
const displayResult = document.getElementById("fetchdata");

//get data from pokemon api link by using template literal
const getData = async () => {
  try {
    let amiibodata = [];
    let result;
    
      const response = await fetch("https://www.amiiboapi.com/api/amiibo/?name=mario");
      result = await response.json(); 
      let data = result.amiibo;
    // display the required things

      displayResult.innerHTML +=`

    <img src="${result.amiibo[0].image}" alt="amiibo front image" width=150 height=100/><br><br>
    
    amiibo name: ${result.amiibo[0].name}<br><br>
    
    amiibo series: ${data[0].amiiboSeries}<br><br>
    
    head:  ${data[0].head}<br><br>
    
    tail:  ${data[0].tail}<br><br>
    
    release:
            au:${data[0].release.au}, <br>jp:${data[0].release.jp} <br>


      <img src="${result.amiibo[1].image}" alt="amiibo front image"  width=150 height=100 /><br><br>
      
      amiibo name: ${result.amiibo[1].name}<br><br>

      amiibo series: ${data[1].amiiboSeries}<br><br>
      
      head:  ${data[1].head}<br><br>
      tail:  ${data[1].tail}<br><br>

      release: 
          au: ${data[1].release.au}, <br>jp:${data[1].release.jp} <br><br>`
  } catch (error) {
    console.log(error);
  }
};

getData();