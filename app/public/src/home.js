/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var ImageSurface = famous.surfaces.ImageSurface;
var Surface = famous.core.Surface;
var StateModifier = famous.modifiers.StateModifier;

// create the main context
var mainContext = Engine.createContext();

// your app here
var logo = new ImageSurface({
    size: [200, 200],
    content: 'http://code.famo.us/assets/famous_logo.png',
    classes: ['double-sided']
});

var initialTime = Date.now();
var centerSpinModifier = new Modifier({
    origin: [0.5, 0.5],
    align: [0.5, 0.5],
    transform : function () {
        return Transform.rotateY(.003 * (Date.now() - initialTime));
    }
});

function surfaceContent() {
    return '<h5>Index</h5><br>' +
        '<a href="/flappy-bird">Flappy Bird</a>' +
        '<br><a href="/white-tile">White Tile</a>' +
        '<br><a href="/examples">Examples</a>' +
        '<br><a href="/university">FSU</a>';
}

var linkSurface = new Surface({
    size: [200, 200],
    content: surfaceContent(),
    properties: {
        backgroundColor: '#fff',
        textAlign: 'center',
        paddingTop: '10px'
    }
});

var surfaceModifier = new StateModifier({
    opacity: 100
});

console.log(surfaceModifier.getOpacity());

mainContext.add(centerSpinModifier).add(logo);
mainContext.add(surfaceModifier).add(linkSurface);
