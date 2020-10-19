<template>
<div class="navmenu">
    <div class="title">
        <router-link id="logo__text" to="/"><img src="../../public/wave.svg" alt="pacific logo" id="logo" />Pacific.</router-link>
    </div>
    <nav>
        <router-link to="/skiing">Skiing</router-link>
        <router-link to="/bobsled">Bobsled</router-link>
        <router-link to="/skeleton">Skeleton</router-link>
        <router-link to="/snowboarding">Snowboarding</router-link>
    </nav>
    <router-view />
</div>
</template>

<style lang="scss" scoped>
.navmenu {
    .title {
        margin: 2rem 0 2rem 7rem;

        #logo {
            width: 6rem;
            position: absolute;
            top: 2rem;
            left: 4.3rem;
        }

        #logo__text {
            text-decoration: none;
            color: black;
            font-family: 'Special Elite', cursive;
            font-size: 5rem;
            letter-spacing: 1rem;
            padding: 0;
            text-transform: lowercase;
        }
    }

    nav {
        float: right;
        margin: 0 2rem;

        a {
            display: flex;
            flex-direction: column;
            text-decoration: none;
            color: black;
            font-family: 'Bebas Neue', cursive;
            font-size: 4rem;
            letter-spacing: 0.8rem;
            margin: 0 0 1rem 0;
            padding: 0;
            transition: all 0.2s ease;

            &:hover {
                transition: all 0.2s ease;
                color: rgb(255, 28, 86);
            }
        }

        nav .router-link-active {
            color: blue;
        }
    }
}
</style>
