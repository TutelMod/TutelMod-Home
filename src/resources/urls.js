import ProjectApi from "./projectapi"

import { PUBLIC_STUDIO_URL } from "$env/static/public";

export default {
    /**
     * TutelMod's normal page
     */
    base: `${PUBLIC_STUDIO_URL}/`,

    /**
     * TutelMod's editor page
     */
    editor: `${PUBLIC_STUDIO_URL}/editor.html`,

    /**
     * TutelMod's credits page
     */
    credits: `${PUBLIC_STUDIO_URL}/credits.html`,
    
    /**
     * TutelMod's contact page
     */
    contact: `${PUBLIC_STUDIO_URL}/contact.html`,

    /**
     * TutelMod's terms of service page
     */
    terms: "/terms",

    /**
     * TutelMod's privacy policy page
     */
    privacy: "/privacy",

    /**
     * TutelMod's guideline pages for services
     */
    guidelines: {
        /**
         * TutelMod's project uploading guidelines
         */
        projects: `${PUBLIC_STUDIO_URL}/TutelMod-Guidelines/PROJECTS`
    },

    /**
     * Donation pages for sites
     */
    donate: {
        scratch: "https://www.scratchfoundation.org/donate",
        turbowarp: "https://github.com/sponsors/GarboMuffin",
        penguinmod: "https://penguinmod.com/support"
    },

    /**
     * TutelMod's project page
     */
    projects: `${ProjectApi.OriginApiUrl}/`,

    /**
     * TutelMod's my stuff page
     */
    mystuff: `${ProjectApi.OriginApiUrl}/mystuff`,

    /**
     * TutelMod's home page
     */
    home: "https://tutelmod.com/",

    /**
     * TutelMod's packager page
     */
    packager: `${PUBLIC_STUDIO_URL}/TutelMod-Packager/`,

    /**
     * TutelMod's official wiki
     */
    wiki: "https://wiki.tutelmod.com/wiki/Main_Page",

    /**
     * TutelMod's Discord invite
     */
    discord: "https://discord.gg/SbC4aXGb9A",

    /**
     * Scratch's website
     */
    scratch: "https://scratch.mit.edu",

    /**
     * TurboWarp's website
     */
    turbowarp: "https://turbowarp.org",

    /**
     * PenguinMod's website
     */
    penguinmod: "https://penguinmod.com",

    /**
     * TutelMod's github page
     */
    github: "https://github.com/TutelMod/",

    /**
     * TutelMod's basic API
     */
    basicApi: "https://projects.tutelmod.com/", // this is TEMPORARY. we will change this to the ACTUAL basic api once we get it setup n ready n stuff.

    /**
     * The admin panel for tutelmod projects api
     */
    adminPanel: "https://tutelmod.com/panel"
}
