<script setup lang="ts">
import { ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';

const props = defineProps<{ link: string, image: string, z?: number, index: number}>()

const isMoving = ref(false)


defineExpose({
	move() {
		isMoving.value = true
		console.log("front")
		setTimeout(() => isMoving.value = false, 500);
		return new Promise<void>((resolve) => setTimeout(() => resolve() , 300) )
		// Promise resolves earlier to avoid visual glitches
	}
})

const rotations = [
	"rotate-[0deg]",
	"rotate-[6deg]",
	"rotate-[12deg]",
	"rotate-[18deg]",
	"rotate-[24deg]",
	"rotate-[30deg]",
	"rotate-[36deg]",
]

const rotationsMov = [
	"-rotate-[30deg]",
	"-rotate-[36deg]",
	"-rotate-[42deg]",
	"-rotate-[48deg]",
	"-rotate-[54deg]",
	"-rotate-[60deg]",
	"-rotate-[66deg]",
	"-rotate-[72deg]",
]


const defaultClasses = ["lg:w-[70%]", "lg:h-[80%]", "h-4/5", "w-[90%]", "absolute", "ease-in-out", "duration-500", "transition-all", "lg:top-1/2", "top-0", "left-1/2", "lg:-translate-y-[60%]", "-translate-x-1/2", rotations[props.index]]
const inMovementClasses = ["lg:w-[70%]", "lg:h-[80%]", "h-4/5", "w-4/5", "absolute", "ease-in-out", "duration-500", "transition-all", "top-1/2", "-left-1/4", "-translate-x-full", rotationsMov[props.index]]


</script>

<template>
	<CharacterCard :style="`z-index: ${props.z}`" :class="isMoving ? inMovementClasses : defaultClasses"
		:image="props.image" :link="props.link" />
</template>