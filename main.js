document.addEventListener('DOMContentLoaded', function() {

    let playerTurn = 0;

document.addEventListener('click', (e) => {
    let isDone = false;
if(playerTurn % 2 == 0 && e.target.innerHTML==='')
{
    
    
    e.target.innerHTML = 'X';
    // e.target.style.disabled = true;
    

    playerTurn++;
    isDone = checkWinner(e.target, 'X');
    if (isDone)
    {
        setTimeout(function(){
            alert('Player X won!');
            restGame();
        },200) ;

        playerTurn = 0;
    }

    

}
else if(playerTurn % 2 == 1 && e.target.innerHTML==='') {
    e.target.innerHTML = 'O';

    // e.target.style.disabled=true;
    playerTurn++;

    isDone = checkWinner(e.target, 'O');
    if (isDone){
        setTimeout(function(){
            alert('Player O won!');
            restGame();
        },200) ;

        playerTurn = 0;

    }

}

const isDrawed = checkDraw();
if(isDrawed &&  !isDone)
{
    setTimeout(function() {alert('no one is good enough to win!');
    restGame();
}, 200);
    playerTurn = 0;

}
})


function restGame()
{
    document.querySelectorAll('.box').forEach(element => {element.innerHTML = ''});
}


function checkDraw()
{
    // alert('checkDraw invoked!');

    let isFull = true;
const boxes = document.querySelectorAll('.box');

boxes.forEach(function(element) {
    if(!element.innerHTML) isFull = false;
});
return isFull;
}

function checkWinner(clickedBox, letter)
{
    console.log(clickedBox.id, letter);
    clickedId = clickedBox.id;
    let allHSet = true;
    let allVSet = true;
    let allDSet = true;

    switch(clickedId) {
        case 'b1':
    allHSet = true;
    allVSet = true;
    allDSet = true;

            hBoxes = document.querySelectorAll('#b2, #b3');
      
            // 
            for(var i =0; i < hBoxes.length;i++)
            {
                if(hBoxes[i].innerHTML !== letter) allHSet = false;
            }

            vBoxes = document.querySelectorAll('#b4, #b7');
            // 
            // 
            for(var i =0; i < vBoxes.length;i++)
            {
                if(vBoxes[i].innerHTML !== letter) allVSet = false;
            }

            dBoxes = document.querySelectorAll('#b5, #b9');
            // 
            
            for(var i =0; i < dBoxes.length;i++)
            {
                if(dBoxes[i].innerHTML !== letter) allDSet = false;
            }


            if(allHSet || allVSet || allDSet) return true;
            // 
        break;
        case 'b2':
                allHSet = true;
                allVSet = true;
                

                hBoxes = document.querySelectorAll('#b1, #b3');
      
                // 
                for(var i =0; i < hBoxes.length;i++)
                {
                    if(hBoxes[i].innerHTML !== letter) allHSet = false;
                }
    
                vBoxes = document.querySelectorAll('#b5, #b8');
                // 
                
                for(var i =0; i < vBoxes.length;i++)
                {
                    if(vBoxes[i].innerHTML !== letter) allVSet = false;
                }

                
                if(allHSet || allVSet) return true;
                
            break;
        case 'b3':
                allHSet = true;
                allVSet = true;
                allDSet = true;

                hBoxes = document.querySelectorAll('#b1, #b2');
      
                
                for(var i =0; i < hBoxes.length;i++)
                {
                    if(hBoxes[i].innerHTML !== letter) allHSet = false;
                }
    
                vBoxes = document.querySelectorAll('#b6, #b9');
                // 
                
                for(var i =0; i < vBoxes.length;i++)
                {
                    if(vBoxes[i].innerHTML !== letter) allVSet = false;
                }

                dBoxes = document.querySelectorAll('#b5, #b7');
                // 
                
                for(var i =0; i < dBoxes.length;i++)
                {
                    if(dBoxes[i].innerHTML !== letter) allDSet = false;
                }
    
                if(allHSet || allVSet || allDSet) return true;
                
    

        break;

        case 'b4':
                allHSet = true;
                allVSet = true;
                
                hBoxes = document.querySelectorAll('#b5, #b6');
      
                
                for(var i =0; i < hBoxes.length;i++)
                {
                    if(hBoxes[i].innerHTML !== letter) allHSet = false;
                }
    
                vBoxes = document.querySelectorAll('#b1, #b7');
                // 
                
                for(var i =0; i < vBoxes.length;i++)
                {
                    if(vBoxes[i].innerHTML !== letter) allVSet = false;
                }

                
                if(allHSet || allVSet) return true;
                
        break;
        
        case 'b5':
                allHSet = true;
                allVSet = true;
                allD1Set = true;
                allD2Set = true;
   
                hBoxes = document.querySelectorAll('#b4, #b6');
      
                
                for(var i =0; i < hBoxes.length;i++)
                {
                    if(hBoxes[i].innerHTML !== letter) allHSet = false;
                }
    
                vBoxes = document.querySelectorAll('#b2, #b8');
                // 
                
                for(var i =0; i < vBoxes.length;i++)
                {
                    if(vBoxes[i].innerHTML !== letter) allVSet = false;
                }

                d1Boxes = document.querySelectorAll('#b1, #b9');
                // 
                
                for(var i =0; i < d1Boxes.length;i++)
                {
                    if(d1Boxes[i].innerHTML !== letter) allD1Set = false;
                }
    
                d2Boxes = document.querySelectorAll('#b3, #b7');
                // 
                
                for(var i =0; i < d2Boxes.length;i++)
                {
                    if(d2Boxes[i].innerHTML !== letter) allD2Set = false;
                }

                if(allHSet || allVSet || allD1Set || allD2Set) return true;
                
    


        break;

        case 'b6':
                allHSet = true;
                allVSet = true;
               
                hBoxes = document.querySelectorAll('#b4, #b5');
      
                
                for(var i =0; i < hBoxes.length;i++)
                {
                    if(hBoxes[i].innerHTML !== letter) allHSet = false;
                }
    
                vBoxes = document.querySelectorAll('#b3, #b9');
                // 
                
                for(var i =0; i < vBoxes.length;i++)
                {
                    if(vBoxes[i].innerHTML !== letter) allVSet = false;
                }

                
                if(allHSet || allVSet) return true;
                
        break;
        
        case 'b7':
                allHSet = true;
                allVSet = true;
                allDSet = true;

                hBoxes = document.querySelectorAll('#b8, #b9');
      
                
                for(var i =0; i < hBoxes.length;i++)
                {
                    if(hBoxes[i].innerHTML !== letter) allHSet = false;
                }
    
                vBoxes = document.querySelectorAll('#b1, #b4');
                // 
                
                for(var i =0; i < vBoxes.length;i++)
                {
                    if(vBoxes[i].innerHTML !== letter) allVSet = false;
                }

                dBoxes = document.querySelectorAll('#b3, #b5');
                // 
                
                for(var i =0; i < dBoxes.length;i++)
                {
                    if(dBoxes[i].innerHTML !== letter) allDSet = false;
                }
    
                if(allHSet || allVSet || allDSet) return true;
                

        break;

        case 'b8':
                allHSet = true;
                allVSet = true;
              
                hBoxes = document.querySelectorAll('#b7, #b9');
      
                
                for(var i =0; i < hBoxes.length;i++)
                {
                    if(hBoxes[i].innerHTML !== letter) allHSet = false;
                }
    
                vBoxes = document.querySelectorAll('#b2, #b5');
                // 
                
                for(var i =0; i < vBoxes.length;i++)
                {
                    if(vBoxes[i].innerHTML !== letter) allVSet = false;
                }

                
                if(allHSet || allVSet) return true;
                
        break;

        case 'b9':
                allHSet = true;
                allVSet = true;
                allDSet = true;
                
                hBoxes = document.querySelectorAll('#b7, #b8');
      
                
                for(var i =0; i < hBoxes.length;i++)
                {
                    if(hBoxes[i].innerHTML !== letter) allHSet = false;
                }
    
                vBoxes = document.querySelectorAll('#b3, #b6');
                // 
                
                for(var i =0; i < vBoxes.length;i++)
                {
                    if(vBoxes[i].innerHTML !== letter) allVSet = false;
                }

                dBoxes = document.querySelectorAll('#b1, #b5');
                // 
                
                for(var i =0; i < dBoxes.length;i++)
                {
                    if(dBoxes[i].innerHTML !== letter) allDSet = false;
                }
    
                if(allHSet || allVSet || allDSet) return true;
                
        break;
    }

}


});