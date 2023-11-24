const experience=document.querySelector(".experience");
const education=document.querySelector(".education");
const skill=document.querySelector(".skill");
const aboutinfo=document.querySelector(".aboutinfo");
const experienceMaterial=` <h4 style="color: maroon; margin-bottom: 5px; font-size: 20px;">Hackathon Qualifier</h4>
     <p>Participated in 2 days Hackathon and acheived 8th position.</p> <br>
     
     <h4 style="color: maroon; margin-bottom: 5px; font-size: 20px;">Empowering Innovation</h4>
     <p>Participating in a university solvathon, my team uncovered and addressed a crucial issue, clinching the second prize with our innovative solution.
      our triumph highlights the potency of collaborative problem-solving and creativity in shaping a better academic environment</p>
      <br>
     <h4 style="color: maroon; margin-bottom: 5px; font-size: 20px;">Flavorful Victory:Dominating Web Canva with our Recipe App Excellence.</h4>
     <p>SecuIn the Web Canva competition, our team's recipe app clinched the top spot.From diverse recipe exploration to user contributions, our platform redefines
      digital gastronomy, earning us the 1st prize with flavorful fitness.</p>`;

const studydetails=` <h4 style="color: maroon; margin-bottom: 5px; font-size: 20px;">Pursuing BTECH CSE in GIET University.(2022-2026)</h4>
     <p><q>I am a dedicated and driven student with a relentless passion for acquiring valuable technical skills and knowledge
       to elevate my expertise. Notably, I achieved an outstanding 8.98 CGPA in my first year.</q>
     </p>
     <br>
     <h4 style="color: maroon; margin-bottom: 5px; font-size: 20px;">Completed 12th from Nirmala English School(ISC)</h4>
     <p><q>Triumphantly graduated from 12th grade with an impressive 88.25%, served as House
       Leader, demonstrated remarkable organizational skills through event management, 
      and led the Volleyball team to victory as the Captain.</q>
     </p>
     <br>
     <h4 style="color: maroon; margin-bottom: 5px; font-size: 20px;">Completed 10th from Nirmala English School(ICSE)</h4>
     <p><q>Completed 10th with a decent 85%</q>
     </p>`;

     const skillmaterial=`<h4 style="color: maroon; margin-bottom: 5px; font-size: 20px;">Web Development</h4>
      <h4>Web app Development and websites Development</h4> 
      <br>
     <div class="details">
      <div><h4 style="color: maroon; margin-bottom: 5px; font-size: 20px;">Front-End Development</h4>
        <ul>
          <li>HTML5</li>
          <li>CSS3 (Sass/SCSS)</li>
          <li>JavaScript (ES6+)</li>
          <li>Responsive Web Design</li>
        </ul> </div>
       <div class="backend"><h4 style="color: maroon; margin-bottom: 5px; font-size: 20px;">Back-End Development</h4>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>RESTful API Design</li>
          <li>Database Design (MYSQL)</li>
        </ul></div> 
        <div class="backend"><h4 style="color: maroon; margin-bottom: 5px; font-size: 20px;">programming languages</h4>
        <ul>
          <li>c</li>
          <li>Java</li>
          <li>Python</li>
          <li>JavaScript</li>
        </ul></div>`;
        skill.classList.add('show-before')
experience.addEventListener('click',()=>{
  aboutinfo.innerHTML=experienceMaterial;
  toggleClass(experience);
});
education.addEventListener('click',()=>{
  aboutinfo.innerHTML=studydetails;
  toggleClass(education);
});
skill.addEventListener('click',()=>{
  aboutinfo.innerHTML=skillmaterial;
  toggleClass(skill);
});


function toggleClass(clickedElement) {
// Remove 'show-before' class from all elements
[experience, education, skill].forEach(element => {
if (element !== clickedElement) {
  element.classList.remove('show-before');
}
});

// Toggle 'show-before' class for the clicked element
clickedElement.classList.toggle('show-before');
}



const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".header_link");

      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      });

      document.querySelectorAll(".nav-link").forEach((n) =>
        n.addEventListener("click", () => {
          console.log('object');
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        })
      );
    
