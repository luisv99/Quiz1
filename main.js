const alerta = () => {
        alert('Su solicitud ha sido enviada')
}


const btn = document.getElementById('btn')

btn.onclick = alerta;


skills = [
        
        {label: 'html',
        data: 7},
        
        {label: 'css',
        data: 5},
        
        {label: 'python',
        data: 4},
        
        {label: 'js',
        data: 2}
]

const skill = document.getElementById('skills')

skills.forEach(({label, data}) => {
        skill.innerHTML+=`<div class="barra${data}">
        <p>${label}</p>
        <p>${data*10}%</p>
        </div>`
});

