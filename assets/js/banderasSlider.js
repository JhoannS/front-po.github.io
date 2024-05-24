let principal2 = document.getElementById('imgBanderas')

fotoBandera = new Array()

fotoBandera[0] = ['assets/img/banderas/bandera-co.webp'],
fotoBandera[1] = ['assets/img/banderas/bolivia.webp'],
fotoBandera[2] = ['assets/img/banderas/chile.webp'],
fotoBandera[3] = ['assets/img/banderas/costa-rica.webp'],
fotoBandera[4] = ['assets/img/banderas/ecuador.webp'],
fotoBandera[5] = ['assets/img/banderas/honduras.webp'],
fotoBandera[6] = ['assets/img/banderas/mexico.webp'],
fotoBandera[7] = ['assets/img/banderas/peru.webp'],
fotoBandera[8] = ['assets/img/banderas/salvador.webp'],
fotoBandera[9] = ['assets/img/banderas/venezuela.webp'],
fotoBandera[10] = ['assets/img/banderas/bandera-co.webp'],
fotoBandera[11] = ['assets/img/banderas/bolivia.webp'],
fotoBandera[12] = ['assets/img/banderas/chile.webp'],
fotoBandera[13] = ['assets/img/banderas/costa-rica.webp'],
fotoBandera[14] = ['assets/img/banderas/ecuador.webp'],
fotoBandera[15] = ['assets/img/banderas/honduras.webp'],
fotoBandera[16] = ['assets/img/banderas/mexico.webp'],
fotoBandera[17] = ['assets/img/banderas/peru.webp'],
fotoBandera[18] = ['assets/img/banderas/salvador.webp'],
fotoBandera[19] = ['assets/img/banderas/venezuela.webp']

if (principal2) {
    for (i = 0; i < fotoBandera.length; i++) {
        let crearSlideBandera = document.createElement('div');
        let crearImgBandera = document.createElement('img');

        crearSlideBandera.setAttribute('class', 'slide');
        // Agrega la imagen al slide
        crearImgBandera.setAttribute('src', fotoBandera[i][0]);
        crearSlideBandera.appendChild(crearImgBandera); // Añade la imagen al div del slide
        crearImgBandera.setAttribute('class', 'imagen-creada2');
        crearImgBandera.setAttribute('alt', 'Pais aliado');


        principal2.appendChild(crearSlideBandera);
    }
}

