<template>
    <section>
        <section class="contain">
        <header class="header">
            <div class="title">
                <div class="text"></div>
            </div>
            <div class="header-right">
                <div class="collapsed"></div>
                <nav class="breadcrumb">
                    <div v-for="i in 3" class="bread"></div>
                </nav>
                <div class="buttons">
                    <div v-for="i in 3" class="button"></div>
                </div>
            </div>
        </header>
        <main class="main">
            <aside class="slider">
                <div v-for="i in 5" class="menu"></div>
            </aside>
            <div class="content">
                <nav class="nav-tag">
                    <div v-for="i in 5" class="tag"></div>
                </nav>
                <div class="view">
                    <div class="router-view"></div>
                </div>
            </div>
        </main>
    </section>
    </section>
</template>



<style scoped>
.contain {
    --width: 100px;
    --background-color: rgb(249, 249, 249);
    --primary-1: #e9f7ee;
    --primary-2: #ddebe2;
    --primary-3: #badeca;
    --primary-4: #8ed1af;
    --primary-5: #66c497;
    --primary-6: #42b883;
    --primary-7: #2d9168;
    --primary-8: #1c6b4d;
    --primary-9: #0e4532;
    --primary-10: #061f17;
    display: flex;
    flex-direction: column;
    background-color: #f9c;
}
.header {
    display: flex;
    height: 40px;
    align-items: center;
    background-color: var(--primary-3);
}
.title {
    width: var(--width);
}
.text {
    margin-left: 10px;
    width: 80px;
    height: 23px;
    background-color: var(--primary-2);
}
.header-right {
    display: flex;
    flex: 1;
}
.collapsed {
    margin-left: 5px;
    width: 23px;
    height: 23px;
    background-color: var(--primary-2);
}
.breadcrumb {
    display: flex;
}
.bread {
    margin-left: 10px;
    width: 55px;
    height: 23px;
    background-color: var(--primary-2);
    transform: skew(-20deg);
}
.buttons {
    margin-left: auto;
    display: flex;
}
.button {
    margin-right: 10px;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background-color: var(--primary-2);
}
.main {
    flex: 1;
    display: flex;
}
.slider {
    width: var(--width);
    background-color: var(--primary-4);
}
.menu {
    margin: 10px 0 0 10px;
    width: 80px;
    height: 23px;
    background-color: var(--primary-3);
}
.content {
    flex: 1;
}
.nav-tag {
    display: flex;
    align-items: center;
    height: 30px;
    background-color: var(--primary-5);
}
.tag {
    margin-left: 5px;
    padding: 0 2px;
    width: 40px;
    height: 20px;
    line-height: 1;
    background-color: var(--primary-4);
    border-radius: 2px;

}
.view {
    padding: 5px;
    height: 180px;
    background-color: var(--primary-6);
}
.router-view {
    width: 100%;
    height: 100%;
    background-color: var(--primary-1);
}
</style>