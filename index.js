

const contentNav=document.querySelectorAll(".content-nav")
const navp=document.querySelectorAll('.text-nav')

const listaJiu=document.getElementById("listaJiu")
const saberJiu=document.getElementById("saberJiu")

const listaMusculacao=document.getElementById("listaMusculacao")
const verMusculacao=document.getElementById("verMusculacao")


saberJiu.addEventListener("click",()=>{
        listaJiu.innerHTML=""

const listaJiujitsu=["Autoconfiança é o primeiro dos benefícios do Jiu Jitsu",
    "Novas amizades",
    "Defesa Pessoal é um dos principais Benefícios do Jiu Jitsu",
    "Queima de calorias e definição corporal"]


listaJiujitsu.forEach(item=>{

    const li=document.createElement('li')
    li.textContent=item;
    listaJiu.appendChild(li)


})

})

verMusculacao.addEventListener('click',()=>{

listaMusculacao.innerHTML="";
const novos=["Fortalecimento dos osso","Melhora na saúde articular",
    "Perda de peso e manutenção do peso perdido",
    "Melhora a qualidade do sono"
]

novos.forEach(item1=>{
    const li=document.createElement("li")
    li.textContent=item1
    listaMusculacao.appendChild(li)
})





})

function controlNav(content,p){
    p.style.display="block"

    content.addEventListener("mouseleave",()=>{
        p.style.display="none"
    })

  



}
contentNav.forEach(content=>{
    const p=content.querySelector('p')
content.addEventListener('mouseenter',()=>{
    controlNav(content,p)
})
})






