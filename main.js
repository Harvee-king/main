let optionsEl = document.querySelector('.options')
let menuList = [
    {   
        id:'1',
        img:'images/karelys-ruiz-PqyzuzFiQfY-unsplash.jpg',
        prices: 300,
        title:'Full Body',
        desc:'lorem shin buko lim operium nah juriem'
    },
    {   
        id:'2',
        img:'images/antonika-chanel-RJCslxmvBcs-unsplash.jpg',
        prices: 250,
        title:'Face Care',
        desc:'lorem shin buko lim operium nah juriem'
    },
    {   
        id:'3',
        img:'images/1 (4).jpg',
        prices: 700,
        title:'Appendix',
        desc:'lorem shin buko lim operium nah juriem'
    },
    {   
        id:'4',
        img:'images/1 (1).jpg',
        prices: 1100,
        title:'Full Body',
        desc:'lorem shin buko lim operium nah juriem'
    }
]

function generateMenu(){
    return(optionsEl.innerHTML = menuList.map((x)=>{
        let {id,img,prices,desc,title} = x
        return`
        <div class="items">
        <img src='${img}' alt="" width="200">
        <div class="det">
            <p><b>${title}</b></p>
            <p>${desc}</p>
        </div>
        <div class="prize">R${prices}</div>
    </div>
        `
    }).join(' '))
}

generateMenu()