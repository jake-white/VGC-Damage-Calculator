var SETDEX_SS = {};

var components = [
    SETDEX_TT2020
];

for (var i=0; i<components.length; i++) {
    var sourceDex = components[i];
    if (sourceDex) {
        for (var p in sourceDex) {
            if (sourceDex.hasOwnProperty(p)) {
                SETDEX_SS[p] = $.extend(SETDEX_SS[p], sourceDex[p])
            }
        }
    }
}

var reloadXYScript = function()
{
  console.log(SETDEX_CUSTOM);
    components = [
    SETDEX_TT2020,
    SETDEX_CUSTOM,
];

for (var i=0; i<components.length; i++) {
    sourceDex = components[i];
    if (sourceDex) {
        for (var p in sourceDex) {
            if (sourceDex.hasOwnProperty(p)) {
                SETDEX_SS[p] = $.extend(SETDEX_SS[p], sourceDex[p])
            }
        }
    }
}
}
