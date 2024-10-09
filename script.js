let contenedor = document.getElementById('listamusical');
axios.get('https://api.institutoalfa.org/api/songs').then((res) => {
    res.data.songs.map((albumpopular) => {
        let div = document.createElement('div')
        div.setAttribute('class', 'song')

        div.innerHTML = `
           <img src="https://api.institutoalfa.org/api/songs/image/${albumpopular.image.filename}" >
                <div>
                    <h3>${albumpopular.title}</h3>
                    <p>${albumpopular.author}</p>
                </div>
                    
        `

        div.addEventListener('click', () => {
            audio = document.getElementById('audio')
            if (audio.getAttribute('src') != `https://api.institutoalfa.org/api/songs/audio/${albumpopular.audio.filename}`) {
                audio.setAttribute('src', `https://api.institutoalfa.org/api/songs/audio/${albumpopular.audio.filename}`)
            } else {
                if (audio.paused) {
                    audio.play()
                } else {
                    audio.pause()
                }
            }

        })
        contenedor.appendChild(div)
    })
})

