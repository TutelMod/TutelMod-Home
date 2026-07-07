<script>
    import { onMount } from "svelte";

    import { PUBLIC_API_URL, PUBLIC_STUDIO_URL } from "$env/static/public";
    
    // Components
    import NavigationBar from "$lib/NavigationBar/NavigationBar.svelte";
    import NavigationMargin from "$lib/NavigationBar/NavMargin.svelte";
    // translations
    import LocalizedText from "$lib/LocalizedText/Node.svelte";
    import Language from "../../resources/language.js";
    
    // Static values
    import LINK from "../../resources/urls.js";
    
    let currentLang = "en";
    onMount(() => {
        Language.forceUpdate();
    });
    Language.onChange((lang) => {
        currentLang = lang;
    });
    </script>
    
    <svelte:head>
        <title>TutelMod - The End.</title>
        <meta name="title" content="TutelMod - The End." />
        <meta property="og:title" content="TutelMod - The End." />
        <meta property="twitter:title" content="TutelMod - The End.">
        <meta name="description" content="The end of TutelMod.">
        <meta property="twitter:description" content="The end of TutelMod.">
        <meta property="og:url" content="https://tutelmod.com/terms">
        <meta property="twitter:url" content="https://tutelmod.com/terms">
    </svelte:head>
    
    <NavigationBar />
    
    <div class="main">
        <NavigationMargin />
    
        <div class="section-info">
            <h1>The End.</h1>
        </div>
    
        <main>

            <p>On the 7th of February, 2026, I (aster) created TutelMod.
                Now, on the 7th of July, 2026, I am announcing the end of TutelMod. It has been a fun ride, but I have decided to move on to other projects and focus on my personal life.

                So.. goodbye TutelMod. 🫡
            </p>

        </main>
    </div>
    
    <style>
        * {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }
    
        .main {
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
            min-width: 1000px;
        }
    
        main {
            margin: 0 20%;
            width: 60%;
        }
    
        .section-info {
            background: #00c3ffad;
            height: 12rem;
            color: white;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin: 0;
        }
        .section-info h1 {
            margin-block: 0;
            margin-left: 32px;
        }
    </style>
    