const mySkills=[
    {
        imgUrl:"https://i.ibb.co/zH1mH4n/C-Logo-svg.png",
        name: 'C++'

    },
    {
        imgUrl:'https://i.ibb.co/jHbN6SW/Python.png',
        name: 'Python'  

    },
    {
        imgUrl:'https://i.ibb.co/6D1m9c9/Java-Script.jpg',
        name: 'JavaScript'
    },
    {
        imgUrl:'https://i.ibb.co/3MGPMdf/HTML.png',
        name: 'HTML'
    },
    {
        imgUrl:'https://i.ibb.co/ts3wNwF/CSS.png',
        name: 'CSS'
    },
    {
        imgUrl:'https://i.ibb.co/4Jk812n/React.png',
        name: 'React'
    },
    {
        imgUrl:'https://i.ibb.co/GRdNSNc/Bootstrap.png',
        name: 'Bootstrap'
    },
    {
        imgUrl:'https://i.ibb.co/r2TndRR/MongoDB.png',
        name: 'MongoDB'
    },
    {
        imgUrl:'https://i.ibb.co/KN5V82p/Firebase.jpg',
        name: 'Firebase'
    },
    {
        imgUrl:'https://i.ibb.co/SRVyYr0/Git.png',
        name: 'Git'
    }
    
]

// Load Skill Sets 

const loadSkillSets = () =>{
    const skillSetDiv = document.getElementById('skill-set');
    mySkills.forEach(skill => {
        const div = document.createElement('div');
        div.classList.add('col');
        // div.classList.add('h-75');
        div.innerHTML = `
                    <div class="card h-75 ">
                        <img src="${skill.imgUrl}" class="card-img-top w-100 p-3 h-75" alt="...">
                        <div class="card-body">
                          <h5 class="card-title text-center">${skill.name}</h5>
                        </div>
                    </div>
        `;
        skillSetDiv.appendChild(div);
    })
}
loadSkillSets();