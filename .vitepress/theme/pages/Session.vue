<script setup lang="ts">
import { useData } from 'vitepress';


const { frontmatter } = useData()

</script>

<template>
	<div class="px-12 py-12 grow overflow-y-scroll lg:px-8">
	  <div class="mx-auto max-w-3xl text-base/7 text-slate-200 text-justify">
		<p class="text-base/7 font-semibold text-[#b89e44]">{{frontmatter.date}}</p>
		<h1 class="mt-2 mb-8 text-5xl font-semibold text-left text-balance text-gray-100 ">Session {{frontmatter.number}}: {{ frontmatter.title }} <span class=" text-[#b89e44] text-sm">Arc {{ frontmatter.arc }}</span></h1>
			<Content class="w-full prose prose-invert"/>
	  </div>
	</div>
  </template>
  
<style scoped>
.session-content p {
	margin-top: 12em !important;
	margin-bottom: 12em !important ;
}
</style>