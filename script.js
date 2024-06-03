var l=1;
function expandGrid(){
    var container = document.getElementById("griid");
    if(l==1)
    {
        container.innerHTML+= '<div class="box"><a href="https://en.wikipedia.org/wiki/Audi"><img class="crs" src="audi.jpg" alt="audi"><div class="tover"><br>AUDI</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/BMW"><img class="crs" src="bmw.jpg" alt="bmw"><div class="tover"><br>BMW</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/Mahindra_Bolero"><img class="crs" src="bolero.jpg" alt="bolero"><div class="tover"><br>BOLERO</div></a></div>';
        l+=1;
    }
    else if(l==2)
    {        
        container.innerHTML+= '<div class="box"><a href="https://en.wikipedia.org/wiki/Dacia_Duster"><img class="crs" src="duster.jpg" alt="duster"><div class="tover"><br>DUSTER</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/Ferrari"><img class="crs" src="ferrari.jpg" alt="ferrari"><div class="tover"><br>FERRARI</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/Toyota_Fortuner"><img class="crs" src="fortuner.jpg" alt="fortuner"><div class="tover"><br>FORTUNER</div></a></div>';
        l+=1;
    }
    else if(l==3)
    {
        container.innerHTML+= '<div class="box"><a href="https://en.wikipedia.org/wiki/MG_Motor"><img class="crs" src="hector.jpg" alt="hector"><div class="tover"><br>HECTOR</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/Jaguar_Cars"><img class="crs" src="jaguar.jpg" alt="jaguar"><div class="tover"><br>JAGUAR</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/Mercedes-Benz"><img class="crs" src="mercedes.jpg" alt="mercedes"><div class="tover"><br>MERCEDES</div></a></div>';
        l+=1;
    }
    else if(l==4)
    {
        container.innerHTML+= '<div class="box"><a href="https://en.wikipedia.org/wiki/Mahindra_Scorpio"><img class="crs" src="scorpio.jpg" alt="scorpio"><div class="tover"><br>SCORPIO</div></a></div>            <div class="box"><a href="https://en.wikipedia.org/wiki/Mahindra_Thar"><img class="crs" src="thar.webp" alt="thar"><div class="tover"><br>THAR</div></a></div>            <div class="box"><a href="https://en.wikipedia.org/wiki/Mahindra_XUV500"><img class="crs" src="xuv.jpg" alt="xuv"><div class="tover"><br>XUV</div></a></div>';
        l+=1;
    }
    else
    {
        alert('MORE CONTENT WILL BE ADDED SOON STAY TUNED:)');
    }
}
function sub(){
    alert('Form Sent')
}