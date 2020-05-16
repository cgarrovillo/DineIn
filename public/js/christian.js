const logging = true
debug("Begin JS Load")

const input = document.querySelector('#file')
debug(input)

input.addEventListener('change', getUploads)

function getUploads() {
    const files = input.files
    debug(files)
}




function debug(e) {
    if (logging === true)
        console.log(e)
}