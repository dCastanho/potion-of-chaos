<script setup lang="ts">
import {data as sessions} from '../sessions.data.js'


</script>

<template>
	<div class="py-12 grow overflow-scroll">
		<div class="mx-auto max-w-7xl px-8 lg:px-8">
			<div class="mx-auto max-w-2xl">
				<h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-100 sm:text-5xl">Sessions
				</h2>
				<p class="mt-2 text-lg/8 text-gray-300">Follow along, have fun - be traumatized by stupidity.</p>
			</div>
			<div
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-4 mt-4">
				<article v-for="session in sessions" :key="session.url"
					class="flex max-w-xl flex-col items-start justify-between">
					<div class="flex items-center gap-x-4 text-xs">
						<time class="text-[#b89e44]">{{ session.date ?? 'Somewhere in Time' }}</time>
						<span
							class="relative z-10 rounded-full px-3 py-1.5 font-medium text-gray-300">
						Arc {{ session.arc }}
						</span>
					</div>
					<div class="group relative">
						<h3 class="mt-3 text-lg/6 font-semibold text-[#D9BB52] group-hover:text-gray-600">
							<a :href="session.url">
								<span class="absolute inset-0" />
								Session {{ session.number }}: {{ session.title }}
							</a>
						</h3>
						<p class="mt-5 line-clamp-4 lg:line-clamp-6 text-sm/6 text-gray-300">{{ session.tldr }}</p>
					</div>
					<div class="relative mt-3 flex items-center text-gray-400 gap-x-2 text-sm">
						Author: <span class="text-gray-200">{{ session.author }}</span>
					</div>
				</article>
			</div>
		</div>
	</div>
</template>