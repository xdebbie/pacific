<template>
<div class="home-container">
    <div class="title">
        <h1><img src="../../public/wave.svg" alt="pacific logo" id="logo" /> Pacific.</h1>
        <nav>
            <router-link to="/skiing">Skiing</router-link>
            <router-link to="/bobsled">Bobsled</router-link>
            <router-link to="/skeleton">Skeleton</router-link>
            <router-link to="/snowboarding">Snowboarding</router-link>
        </nav>
        <router-view />
    </div>
    <div class="address">
        <p>1100 Lexington Ave</p>
        <p>New York</p>
        <p>NY 10075</p>
        <p>U.S.A.</p>
    </div>
</div>
</template>

<style lang="scss" scoped>
.home-container {
    margin: 0;
    padding: 0;

    .title {
        #logo {
            width: 6rem;
            position: absolute;
            top: 2rem;
            left: 2.3rem;
        }

        h1 {
            color: black;
            font-family: 'Special Elite', cursive;
            font-size: 5rem;
            letter-spacing: 1rem;
            margin: 2rem 0 4rem 7rem;
            padding: 0;
        }

        nav {
            float: right;

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
        }
    }

    .address {
        margin-top: 10rem;

        p {
            color: black;
            font-family: 'Bebas Neue', cursive;
            font-size: 3rem;
            letter-spacing: 0.8rem;
            margin: 0 0 1rem 0;
            padding: 0;
        }
    }
}
</style>
