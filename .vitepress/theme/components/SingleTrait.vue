<script setup lang="ts">
import { Trait } from './Traits.vue';
import { computed, defineAsyncComponent } from 'vue';

const props = defineProps<{ trait: Trait, isLast: boolean }>() 

const iconComponent = computed( () => defineAsyncComponent( async () => (await import(`../../../gameicons/${props.trait.icon}.svg`)).default ))

const bgColor = computed( () => typeof(props.trait.color) === 'string' ? `bg-${props.trait.color}-900` : `bg-${props.trait.color.background}`  )
const ringColor = computed( () => typeof(props.trait.color) === 'string' ? `ring-${props.trait.color}-400` : `ring-${props.trait.color.ring}`  )
const iconColor = computed( () =>  typeof(props.trait.color) === 'string' ? `fill-${props.trait.color}-400` : `fill-${props.trait.color.icon}`  )


</script>

<template>
	<li>
		<div class="relative pb-8">
		<span class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" v-if="!isLast"></span>
		<div class="relative flex space-x-3">
			<div>
			<span :class="`flex h-10 w-10 items-center justify-center rounded-full ${bgColor} ${ringColor} ring-4`">
				<component v-if="iconComponent" :is="iconComponent" :class="`size-8 p-1 ${iconColor}`"/>
				<!-- <Icon class="size-8 p-1 fill-[#D9BB52]"/> -->
			</span>
			</div>
			<div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
				<div>
					<p class="text-sm text-gray-300"> <span class="text-[#b89e44] text font-inkut" > {{  props.trait.title  }}  </span> <span v-html="props.trait.description" /> </p>
				</div>
			</div>
		</div>
	</div>
	</li>	
</template>