// Since the content on this site is downloadable, all scripts must be executed after all media elements are fully loaded.
window.onload = function() {
    Draggable.create('.gallary', {
        bounds: 'body',
        inertia: true
    })
}