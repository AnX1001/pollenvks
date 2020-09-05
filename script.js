     

  const bolArray = []; // populate array with push or pop
  const allCheckBoxes = document.querySelectorAll('.checkBox');
  
  for(let i = 0; i < allCheckBoxes.length; i++) { //run push or pop for each checkbox by cycling through them

    allCheckBoxes[i].onclick = () => { //run onclick if checked == true
       
        if (allCheckBoxes[i].checked == true) { 
            bolArray.push('true'); //push to array 
            console.log(bolArray);
          
          } else { //if checked is not true, run pop()
          
            bolArray.pop();
            console.log(bolArray);
          }
        }
        
    };


    function checkArray() {
      console.log(bolArray);
    };

    function checkResults() {

      if(bolArray.length == 4) {
        console.log('Bestill en ledig time');
        showAcuity();
        
        
      } else {
        console.log('Ingen behov for vaksine');
        showMessage();

      }

    };

    // display acuity for appointment booking 
    function showAcuity () {
      console.log('acuity started');
      document.querySelector('.acuity').style.display = 'block';
      document.querySelector('.noneed').style.display = 'none';
    };

      // show message for no need 
      function showMessage() {
        document.querySelector('.noneed').style.display = 'block';
        document.querySelector('.acuity').style.display = 'none';
      }


    // onclick button and scroll down to questions 

    function scrollDown() {
        window.scrollBy(0, 900);
      
    };



    document.querySelector('.testBtn').addEventListener('click', scrollDown);
    document.querySelector('.checkresults').addEventListener('click', checkResults);