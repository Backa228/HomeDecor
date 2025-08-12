import replace from "gulp-replace"
import browsersync from "browser-sync"
import notify from "gulp-notify"
import plumber from "gulp-plumber"
import newer from "gulp-newer"
import ifPlagin from "gulp-if";

export const plugins = {
    replace: replace,
    plumber: plumber,
    browsersync: browsersync,
    notify: notify, 
    newer: newer,
    if: ifPlugin
}