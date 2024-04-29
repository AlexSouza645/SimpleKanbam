const cards = document.querySelectorAll('.card')
const dropZones = document.querySelectorAll('.dropzone')

cards.forEach(card => {


    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
}),
    function dragstart() {

    }
    ,
    function drag() {

    },
    function dragend() {

    },

    //  local onde vou soltar os cartoes
    dropZones.forEach(dropzone => {
        dropZones.addEventListener('dragenter', dragenter)
        dropZones.addEventListener('dragover', dragover)
        dropZones.addEventListener('dragleave', dragleave)
        dropZones.addEventListener('drop', drop)


    }),

    function dragenter() {




    },
    function dragover() {




    },

    function dragleave() {




    },

    function drop() {




    }

