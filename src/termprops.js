import help from './plugins/help.js';
import source from './plugins/source.js';
import math from './plugins/math.js';
import convert from './plugins/convert.js';
import special from './plugins/special.js';
import ipinfo from './plugins/ipinfo.js';
import time from './plugins/time.js';
import hex from './plugins/hex.js';
import bin from './plugins/bin.js';
import dec from './plugins/dec.js';
import tictactoe from './plugins/tictactoe.js';
import sudo from './plugins/sudo.js';
import passwd from './plugins/passwd.js';
import cal from './plugins/cal.js';
import text from './plugins/text.js';
import colors from './dracula.js';

var termProps = {
    terminal: undefined,
    prompt: "<a style='color:" + colors.green + "'>~</a><a style='color:" + colors.purple + "'>$</a> ",
    login: [
        " ",
        {text: " _          _   _       ",  color: colors.pink},
        {text: "| |        | | | |      ",  color: colors.pink},
        {text: "| |     _  | | | |  __  ",  color: colors.pink},
        {text: "|/ \\   |/  |/  |/  /  \\_",color: colors.pink},
        {text: "|   |_/|__/|__/|__/\\__/o", color: colors.pink},
        " ",
        "Type 'help' for more information."
    ],
    commands: {
        help: help,
        source: source,
        math: math,
        convert: convert,
        special: special,
        ipinfo: ipinfo,
        time: time,
        hex: hex,
        bin: bin,
        dec: dec,
        ttt: tictactoe,
        sudo: sudo,
        passwd: passwd,
        text: text,
        cal: cal
    },
    init: function() {
        for (let x in this.commands) {
            this.commands[x].parent = this;
        }
        delete this.init;
        return this;
    }
}.init();

export default termProps;