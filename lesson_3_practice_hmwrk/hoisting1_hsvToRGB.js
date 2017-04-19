var hsvtorgb; //hoisted
hsvtorgb = function(h, s, v) {
    var i; //hoisted
    var f; //hoisted
    var p; //hoisted
    var q; //hoisted
    var t; //hoisted

    function format(r, g, b) { //hoisted
        return "rgb(" + Math.round(r * 255) + "," + Math.round(g * 255) + "," + Math.round(b * 255) + ")";
    }

    function setRGB(c1, c2, c3){
        r = c1;
        g = c2;
        b = c3;
    }

    if (s == 0){
        return format(v, v, v);
    }

    h = ((h + 360) % 360) / 60;

    i = Math.floor(h);
    f = h - i;
    p = v * (1 - s);
    q = v * (1 - s * f);
    t = v * (1 - s * (1 - f));
   
    

    switch(i) {
        case 0:
           setRGB(v, t, p);
           break;
        case 1:
           setRGB(q, v, p);
           break;
        case 2:
           setRGB(p, v, t);
           break;
        case 3:
           setRGB(p, q, v);
           break;
        case 4:
           setRGB(t, p, v);
           break;
        default:
           setRGB(v, p, q);
    }

    // switch(i) {
    // case 0:
    //     r = v; g = t; b = p;
    //     break;
    // case 1:
    //     r = q; g = v; b = p;
    //     break;
    // case 2:
    //     r = p; g = v; b = t;
    //     break;
    // case 3:
    //     r = p; g = q; b = v;
    //     break;
    // case 4:
    //     r = t; g = p; b = v;
    //     break;
    // default:
    //     r = v; g = p; b = q;
    // }

    return format(r, g, b);
};