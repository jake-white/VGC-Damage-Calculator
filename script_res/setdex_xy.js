var SETDEX_XY = {};

var components = [
    SETDEX_SHOWDOWN,
    SETDEX_NUGGETBRIDGE
];

for (var i=0; i<components.length; i++) {
    var sourceDex = components[i];
    if (sourceDex) {
        for (var p in sourceDex) {
            if (sourceDex.hasOwnProperty(p)) {
                SETDEX_XY[p] = $.extend(SETDEX_XY[p], sourceDex[p])
            }
        }
    }
}