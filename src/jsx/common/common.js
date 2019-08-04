import React, { Component } from 'react';

export function stripHTML(html) {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
}

export function compare(a, b, sortType) {
    a = a.trim().toLowerCase();
    b = b.trim().toLowerCase();
    var comparing = (a > b)? 1 : ((a < b)? -1 : 0);
    return sortType * comparing;
}

export function highlightFound(field, search) {
    var searchRegExp = new RegExp(search, 'gi'),
        isTag = false,
        cs = '',
        result = '';
    for(var c in field) {
        if(field[c] == '<') {
            isTag = true;
            if(cs !== '') {
                result += cs.replace(searchRegExp, `<span class="highlighted">${search}</span>`);
                cs = '';
            }
        }
        if(isTag) result += field[c];
        else cs += field[c];
        if(field[c] == '>') isTag = false;
    }
    if(cs !== '') result += cs.replace(searchRegExp, `<span class="highlighted">${search}</span>`);
    return result;
}

export function formatDate(timestamp) {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"],
        day = timestamp.getDate(),
        monthIx = timestamp.getMonth(),
        year = timestamp.getFullYear();
        return monthNames[monthIx] + ' ' + day + ', ' + year;
}

export function formatTime(timestamp) {
    var h = timestamp.getHours().toString(),
        m = timestamp.getMinutes().toString();
    if(h.length == 1) h = '0' + h;
    if(m.length == 1) m = '0' + m;
    return  h + ':' + m;
}
export function formatDateTime(timestamp) {
    return formatDate(timestamp) + ' ' + formatTime(timestamp);
}
export  function generateStatusClassFromText(statusText) {
    statusText = statusText.replace(/[^a-zA-Z0-9]/g, '');
    return statusText.charAt(0).toLowerCase() + statusText.slice(1);
}