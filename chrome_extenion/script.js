// https://api.cricapi.com/v1/currentMatches?apikey=23ec2eba-db9e-468c-b26e-abfd19f728ec&offset=IPL


// 40d33ba3-ac37-4d8b-a45c-d738167a8a39

const URL=`https://api.cricapi.com/v1/currentMatches?apikey=8d9bcb55-827c-4609-b6a2-c1b33c6194a6&offset=IPL`;

const wrapper=document.querySelector("#wrapper");

const ex=document.querySelector("#ex");




async function  fetchInfo()
{



    
   const res=await fetch(URL);
   const data1= await res.json();

   const data=data1?.data;





   const relData=data.filter(match=>match?.id==="40d33ba3-ac37-4d8b-a45c-d738167a8a39");
   console.log(relData);

  wrapper.innerHTML= relData.map((match=>




     `
     
     
     <div id="main" >

     <div class="bg">
     <img src="./bg.jpg" alt="">
     </div>

     <div class="bg2" >

     </div>


     <div id="names"  >
     <div id="name1" >
    
     <img src=${match?.teamInfo?.[0]?.img} />

     <p id="name1-p" >

${match?.teamInfo?.[0]?.shortname}


     </p>
      </div>


`+`<p id="vs" >vs</p>`+`

      <div id="name2" >
    
     <img src=${match?.teamInfo?.[1]?.img} />

     <p>

${match?.teamInfo?.[1]?.shortname}


     </p>
      </div>

    </div>

   
     
     `
     
    +

   
     `
     <div id="scores" >
     <div id="scores1"  >
     
<div id="runs1" >
     <p>Runs:</p><p>${match?.score?.[0]?.r}</p>

</div>

<div id="wicket1" >
 <p>Wickets</p><p>${match?.score?.[0]?.w}</p>
</div>

<div id="over1" >
 <p>Over</p><p>${match?.score?.[0]?.o}</p>
</div>
    
    

   </div>

<div id="ver" ></div>
   <div id="scores2"  >
     
   <div id="runs2" >
        <p>Runs:</p><p>${match?.score?.[1]?.r}</p>
   
   </div>
   
   <div id="wicket2" >
    <p>Wickets</p><p>${match?.score?.[1]?.w}</p>
   </div>
   
   <div id="over2" >
    <p>Over</p><p>${match?.score?.[1]?.o}</p>
   </div>
       
       
   
      </div>

      


      </div>

      <div id="hor2" ></div>
      <p id="status" >
      ${match?.status}
    </p>
    <div id="hor3" ></div>
   
    <p id="venue" >
    Venue:
    ${match?.venue}
   </p>
   
   <div id="hor4" ></div>

   `
   +
   `


  

     
       
     </div>



    
     `

     
     

     

   ))

     
      



      


      
   


}
fetchInfo();
// const data=[1,2,3,4,7,6,7];
