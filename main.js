const alerta = () => {
        alert('Su solicitud ha sido enviada')
}


const btn = document.getElementById('btn')

btn.onclick = alerta;


skills = [
        
        {label: 'html',
        data: 60},
        
        {label: 'css',
        data: 65},
        
        {label: 'python',
        data: 70},
        
        {label: 'javascript',
        data: 10}
]
const skill = document.getElementById('skills')

for (let index = 0; index < skills.length; index++) {
        const element = skills[index];
        console.log(element)
}
