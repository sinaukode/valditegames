function ValidRowCol(a, b) {
    let hasil = []
    try {
        for (let i = 0; i < a.length; i++) {
            let validRow = true
            let validCol = true
            let r = a[i]
            let prepArrayKolom = []
            let prepArrayBaris = []
            //cek jumlah row
            if (r.length === b.length) {
                for (let x = 0; x < r.length; x++) {
                    prepArrayKolom.push(a[x][i])
                }
                //ambil baris
                for (let x = 0; x < r.length; x++) {
                    prepArrayBaris.push(a[i][x])
                }

                //sorting kolom
                let c = prepArrayKolom.sort()
                //sorting baris
                let d = prepArrayBaris.sort()


                //validasi kolom

                for (let k = 0; k < c.length; k++) {

                    if (c[k] !== b[k]) {
                        validCol = false
                    }

                    hasil.push(validCol)


                    //validasi row
                    for (k = 0; k < d.length; k++) {
                        if (d[k] !== b[k]) {
                            validRow = false
                        }
                    }

                    hasil.push(validRow)
                }
            } else {

                validRow = false
                hasil.push(validRow)
            }

        }
    } catch (e) {
        hasil.push(false)
    }


    return hasil
}

let validBox = (a, b) => {

    let hasilBox = [];
    let validBox = true;
    try {
        //transform 3x3
        for (let i = 0; i < a.length; i += 3) {
            for (let j = 0; j < a.length; j += 3) {
                let prepArrayBox = []
                for (let x = 0; x < 3; x++) {

                    for (let y = 0; y < 3; y++) {

                        prepArrayBox.push(a[i + x][j + y])
                    }

                }

                let f = prepArrayBox.sort()


                for (let z = 0; z < f.length; z++) {

                    if (f[z] !== b[z]) {
                        validBox = false
                    }
                }
                hasilBox.push(validBox)

            }
        }

    } catch (e) {
        validBox = false
        hasilBox.push(validBox)
    }

    return hasilBox
}


let runner = async (a, b) => {
    let row = await ValidRowCol(a, b)
    let colrow = row.indexOf(false);

    let grid = await validBox(a, b)
    let box = grid.indexOf(false);


    console.log(box)
    console.log(colrow)

    if (box === -1 && colrow === -1) {
        return 'CORRECT'
    } else {
        return 'INCORRECT'
    }
}


module.exports = {
    runner
}