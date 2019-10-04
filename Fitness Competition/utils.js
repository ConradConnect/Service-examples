
const OFFSET_HOURS = 24;
const COLORS = ['#e57373', '#f06292', '#ba68c8', '#9575cd', '#7986cb', '#64b5f6', '#4fc3f7', '#4dd0e1', '#4db6ac', '#81c784', '#aed581', '#dce775', '#fff176', '#ffd54f', '#ffb74d', '#ff8a65'];

function hasStarted(dateString, offset = 0) {
    if (!dateString) return false;
    const now = new Date();
    now.setHours(now.getHours() - offset);
    const startDate = new Date(dateString);
    return startDate < now;
}

function hasEnded(dateString, offset = 0) {
    if (!dateString) return false;
    const now = new Date();
    now.setHours(now.getHours() - offset);
    const endDate = new Date(dateString);
    return endDate < now;
}

function formatToDate(dateString) {
    const date = new Date(dateString);
    if (date.toString() === 'Invalid Date') return null;
    return date.toISOString();
}

function getRandomColor(exclude = []) {
    let possibleColors = COLORS.filter(function (c) {
        return !exclude.includes(c);
    });
    if (possibleColors.length === 0) {
        possibleColors = COLORS;
    }
    const pos = Math.floor(Math.random() * possibleColors.length);
    return possibleColors[pos];
}

module.exports = {
    hasStarted, hasEnded, formatToDate, OFFSET_HOURS, getRandomColor
}