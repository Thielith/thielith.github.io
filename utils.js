const link = {
    "Aseprite": "<a href='https://www.aseprite.org/'>Aseprite</a>",
    "Blender": "<a href='https://www.blender.org/'>Blender</a>",
    "Inkscape": "<a href='https://inkscape.org/'>Inkscape</a>",
    "Audacity": "<a href='https://www.audacityteam.org/'>Audacity</a>",
    "Davinci Resolve": "<a href='https://www.blackmagicdesign.com/products/davinciresolve/'>Davinci Resolve</a>",
    "Adobe Animate": "<a href='https://www.adobe.com/products/animate.html'>Adobe Animate</a>"
}


const animation = {
    "fadeIn": [
        { "opacity": 0, "zIndex": -1 },
        { "opacity": 100, "zIndex": 2 }
    ],
    "slideFromLeft": [
        { "transform": "translateX(-50px)", "opacity": 0 },
        { "transform": "translateX(-20px)", "opacity": 100 }
    ],
    "slideFromRight": [
        { "transform": "translateX(50px)", "opacity": 0 },
        { "transform": "translateX(20px)", "opacity": 100 }
    ],
    "slideFromBottom": [
        { "transform": "translateY(50px)", "opacity": 0 },
        { "transform": "translateY(0)", "opacity": 100 }
    ],
    "100ms": {
        "duration": 100,
        "fill": "forwards"
    },
    "100ms_backwards": {
        "duration": 100,
        "fill": "forwards",
        "direction": "reverse"
    },
    "300ms": {
        "duration": 300,
        "fill": "forwards",
        "easing": "ease"
    },
    "300ms_backwards": {
        "duration": 300,
        "fill": "forwards",
        "easing": "ease",
        "direction": "reverse"
    }
}

