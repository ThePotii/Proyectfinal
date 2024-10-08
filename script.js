let contenedor = document.getElementById('listamusical');


// Tienes el código repetido y se estaba ejecutando dos veces
// axios.get('https://api.institutoalfa.org/api/songs').then((res) => {
    //     res.data.songs.map((song) => {
        //         let div = document.createElement('div')
        //         div.setAttribute('class', 'flex p-4 gap-2')
        
        //         div.innerHTML = `
        //            <img src="https://api.institutoalfa.org/api/songs/image/${song.image.filename}" class="rounded-full h-16" alt="">
        //                 <div>
        //                     <h3 class= "font-bold">${song.title}</h3>
        //                     <p>${song.author}</p>
        //                 </div>
        
        //         `
        //         contenedor.appendChild(div)
//     })
// })


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
        contenedor.appendChild(div)
    })
})