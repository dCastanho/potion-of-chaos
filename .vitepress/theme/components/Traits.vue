<script setup lang="ts">
import SingleTrait from './SingleTrait.vue';


export interface Trait {
	icon : string, 
	color : string | TraitColors, 
	title: string,
	description: string
}

export interface TraitColors {
	icon : string,
	ring: string, 
	background: string 
}

const props = defineProps<{ traits: Trait[] }>() 


</script>



<template>	
	<ul role="list" class="-mb-8">
		<SingleTrait v-for="trait, i of props.traits"  :trait="trait" :is-last="i == props.traits.length - 1 " />
	</ul>
			
		<!-- 
			<li>
			  <div class="relative pb-8">
				<span class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
				<div class="relative flex space-x-3">
				  <div>
					<span class="flex h-10 w-10 items-center justify-center rounded-full bg-purple-900 ring-purple-400 ring-4">
					  <BearFace  class="size-8 p-1 fill-purple-400"/>
					</span>
				  </div>
				  <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
					<div>
					  <p class="text-sm text-gray-300"> <span class="text-[#b89e44] font-inkut"> Unbreakable </span> With her <span class="text-[#b89e44] italic"> Bear Totem </span>  Minerva becomes a moving wall. She gains resistance to almost all types of damage, making her extremely difficult to pin down. </p> 
					</div>
					
				  </div>
				</div>
			  </div>
			</li>
			<li>
			  <div class="relative pb-8">
				<span class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
				<div class="relative flex space-x-3">
				  <div>
					<span class="flex h-10 w-10 items-center justify-center rounded-full bg-red-900 ring-red-400 ring-4">
					  <BullHorns  class="size-8 p-1 fill-red-400"/>
					</span>
				  </div>
				  <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
					<div>
					  <p class="text-sm text-gray-300"> <span class="text-[#b89e44] font-inkut"> Unstoppable </span> Large, horned and strong. Minerva is the first through a door - because she is usually smashing through it with her <span class="text-[#b89e44] italic"> horns </span>. </p> 
					</div>
					
				  </div>
				</div>
			  </div>
			</li> -->
			<!-- <li>
			  <div class="relative pb-8">
				<span class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
				<div class="relative flex space-x-3">
				  <div>
					<span class="flex h-10 w-10 items-center justify-center rounded-full bg-amber-900 ring-amber-400 ring-4">
					  <NewBorn  class="size-8 p-1 fill-amber-400"/>
					</span>
				  </div>
				  <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
					<div>
					  <p class="text-sm text-gray-300"> <span class="text-[#b89e44] font-inkut"> Compassionate </span> Despite her size and aggression, Minerva is kind and can actually be gentle. She has a particular soft spot for animals and smaller racer, which remind her of her old farm and family.</p> 
					</div>
					
				  </div>
				</div>
			  </div>
			</li> -->
			<!-- <li>
			  <div class="relative pb-8">
				<div class="relative flex space-x-3">
				  <div>
					<span class="flex h-10 w-10 items-center justify-center rounded-full bg-green-900 ring-green-400 ring-4">
					  <FlatPaw  class="size-8 p-1 fill-green-400"/>
					</span>
				  </div>
				  <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
					<div>
					  <p class="text-sm text-gray-300"> <span class="text-[#b89e44] font-inkut">
					</div>
					
				  </div>
				</div>
			  </div>
			</li> -->
			
</template>

