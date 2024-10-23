<script setup lang="ts">
import { withBase } from 'vitepress';

const props = defineProps<{ image: string, link: string}>()

</script>

<template>
	<a class="border-2 border-[#D9BB52] drop-shadow-2xl group overflow-hidden " :href="withBase(props.link)">
		<img :src="withBase(props.image)" class="object-cover  h-full w-full">
		<div class="">

		</div>
	</a>
</template>