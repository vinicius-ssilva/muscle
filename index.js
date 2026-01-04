

const botao1=document.getElementById("botao1")
const botao2=document.getElementById("botao2")
const botao3=document.getElementById('botao3')
const botao4=document.getElementById('botao4')

const listaJiu=document.getElementById("listaJiu")
const saberJiu=document.getElementById("saberJiu")


const botoes=[botao1,botao2,botao3,botao4]



const listaMusculacao=document.getElementById("listaMusculacao")
const verMusculacao=document.getElementById("verMusculacao")


function alternarCores(botao) {
    botao.classList.toggle("botao-preto")
    
} 

botoes.forEach(botao=>{
    botao.addEventListener("click",()=>{
        alternarCores(botao)
    })
})

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



