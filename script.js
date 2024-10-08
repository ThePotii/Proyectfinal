let contenedor = document.getElementById('listamusical');

axios.get('https://api.institutoalfa.org/api/songs').then((res) => {
    res.data.songs.map((song) => {
        let div = document.createElement('div')
        div.setAttribute('class', 'flex p-4 gap-2')

        div.innerHTML = `
           <img src="https://api.institutoalfa.org/api/songs/image/${song.image.filename}" class="rounded-full h-16" alt="">
                <div>
                    <h3 class= "font-bold">${song.title}</h3>
                    <p>${song.author}</p>
                </div>
                    
        `
        contenedor.appendChild(div)
    })
})

let contenedordos = document.getElementById('albumpopular');

axios.get('https://api.institutoalfa.org/api/songs').then((res) => {
    res.data.songs.map((albumpopular) => {
        let div = document.createElement('div')
        div.setAttribute('class', 'musicmain')

        div.innerHTML = `
           <img src="https://api.institutoalfa.org/api/songs/image/${albumpopular.song.image.filename}" class="musicmain"">
                <div>
                    <h3 class= "font-bold">${albumpopular.song.title}</h3>
                    <p>${song.author}</p>
                </div>
                    
        `
        contenedor.appendChild(div)
    })
})