// Since the content on this site is downloadable, all scripts must be executed after all media elements are fully loaded.
window.onload = function() {
    // Pre-loader logic set up:
    setTimeout(function() {

        // Here I specify the value of the delay when the content is loaded:
        document.body.classList.add('loaded')

        Draggable.create('.gallary', {
            bounds: 'body',
            inertia: true
        })
    })
}