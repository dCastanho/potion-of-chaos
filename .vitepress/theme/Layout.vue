<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import Home from './pages/Home.vue';
import Character from './pages/Character.vue';
import SessionListing from './pages/SessionListing.vue';
import Session from './pages/Session.vue';
// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <div class="w-screen h-screen flex flex-col min-h-0">
		<img src="/background-home.jpg" class=" absolute top-0 right-0 object-cover h-screen -z-20" />
    <div class=" absolute top-0 right-0 w-screen h-screen -z-10 bg-[#272727]/70" />
    <div class="w-full h-16 flex flex-row items-center justify-between px-12 shrink-0 border-b border-slate-500">
      <a class="text-slate-200 font-semibold text-xl" :href="withBase('/')"> Home </a>
      <div>
      <a class="text-slate-200 font-semibold text-xl mr-8" :href="withBase('/sessions/')"> Sessions </a>
      <a class="text-slate-200 font-semibold text-xl"> Lore </a>
        
      </div>
    </div>
    <Home v-if="frontmatter.home" />
    <Character v-else-if="frontmatter.layout == 'character' " />
    <SessionListing v-else-if="frontmatter.layout == 'session-home' " />
    <Session v-else-if="frontmatter.layout == 'session' " />
    <div v-else>
      <a href="/">Home</a>
      <Content />
    </div>
  </div>


</template>
