
var apiKey = '9t11eTG34zO6gjnLmtOqtxvZzP9xTpZfwxMXZ8u8'; 
  // 9Tn2WuDuvpyUzRGyYKKCt09AJJGpqfNSPBlWLvWz

      document.addEventListener('DOMContentLoaded', submitButtonsReady);

      function submitButtonsReady(){
        document.getElementById('dateInput').addEventListener('click', function(event){
          var request = new XMLHttpRequest();
          var date = document.getElementById('dateValue').value; 
          var roverName = ""; 
          var buttonStatus1 = document.getElementById('btnradio1').checked;
          var buttonStatus2 = document.getElementById('btnradio2').checked;
          var buttonStatus3 = document.getElementById('btnradio3').checked;
          if(buttonStatus1 === true)
          {
            roverName = "curiosity";
          }
          else if(buttonStatus2 === true)
          {
            roverName = "opportunity";
          }
          else 
          {
            roverName = "spirit";
          }
          request.open('GET', 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + roverName +'/photos?earth_date='+ date + '&api_key=' + apiKey, true);
          request.addEventListener('load',function(){
           if(request.status >= 200 && request.status < 400){
              var response = JSON.parse(request.responseText);
              console.log(response);

              document.getElementById('imageStatus').textContent = 'Nuotrauka kraunama';
              document.getElementById('imageID').src = response.photos[0].img_src;
              document.getElementById('roverCaption').textContent = response.photos[0].rover.name;
              document.getElementById('landingCaption').textContent = response.photos[0].rover.landing_date;
              document.getElementById('endingCaption').textContent = response.photos[0].rover.max_date;

            } 
            else
            { 
                  console.log("Error in network request: " + request.statusText);

             }});

          document.getElementById('imageStatus').textContent = 'NETEISINGA DATA';
          request.send(null);
          event.preventDefault();
        })

      }


