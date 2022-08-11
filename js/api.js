import {showTopGame} from "./main.js";
import {getPlatformList} from "./platform.js";
import {getAchievementsList} from "./achievements.js";
import {getDlcList} from "./additions.js";


let dateObj = new Date();
let year = dateObj.getUTCFullYear();
const API_KEY = ""; // Put your API key here (https://rawg.io/apidocs)

export async function getInfos() {
    try {
        const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
        const resParsed = await res.json();
        showTopGame(resParsed);
        return resParsed;
    } catch (error) {
        throw new Error(error);
    };
};

export async function getNewGames() {
    try {
        const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&dates=${year}-07-01,${year}-12-31&ordering=-added`);
        const resParsed = await res.json();
        showTopGame(resParsed);
        return resParsed;
    } catch (error) {
        throw new Error(error);
    };
};

export async function getAllPlatforms() {
    try {
        const res = await fetch(`https://api.rawg.io/api/platforms?key=${API_KEY}`);
        const resParsed = await res.json();
        getPlatformList(resParsed);
        return resParsed;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    };
};

export async function getAchievements() {
    try {
        const res = await fetch(`https://api.rawg.io/api/games/4200/achievements?key=${API_KEY}`);
        const resParsed = await res.json();
        getAchievementsList(resParsed);
        return resParsed;
    } catch (error) {
        throw new Error(error);
    };
}

export async function getAllDlc() {
    try {
        const res = await fetch(`https://api.rawg.io/api/games/4200/additions?key=${API_KEY}`);
        const resParsed = await res.json();
        getDlcList(resParsed);
        return resParsed;
    } catch (error) {
        throw new Error(error);
    };
}