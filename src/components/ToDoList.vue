<template>
	<div id="to-do-list">
		<div class="input" v-bind:class="{'hasVal': newItem!==''}">
			<input class="input_field" type="text" id="input-1" v-model="newItem"/>
			<label class="input_label" for="input-1">List Item</label>
			<svg class="graphic" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
				<path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
			</svg>
		</div>
	</div>	
</template>

<script>
	export default{
		name: 'to-do-list',
		data(){
			return{
				newItem: '123'
			}
		}
	}
</script>

<style lang='scss' scoped>
	$input-color: #92989e;
	#to-do-list{
		width: 50%;
		margin: 0 auto;
		.input {
			width: 50%;
			height: 5em;
			margin: 0 auto;
			position: relative;
			overflow: hidden;
			&.hasVal{
				.input_label{
					transform: translate3d(-.3em, -1.5em, 0) scale3d(0.75, 0.75, 1);
					color: darken($input-color, 50%);
				}
				.graphic{
					transform: translate3d(-66.6%, 0, 0);
					stroke: darken($input-color, 50%);
				}
			}
			.input_field{
				position: absolute;
				z-index: 99;
				left: 0;
				bottom: 10px;
				width: 100%;
				border: none;
				outline: none;
				font-size: 1.8em;
				color: $input-color;
				background: transparent;
				&:focus ~ .input_label{
					transform: translate3d(-.3em, -1.5em, 0) scale3d(0.75, 0.75, 1);
					color: darken($input-color, 50%);
				}
				&:focus ~ .graphic{
					transform: translate3d(-66.6%, 0, 0);
					stroke: darken($input-color, 50%);
				}
			}
			.input_label{
				font-size: 1.5em;
				color: $input-color;
				position: absolute;
				z-index: 9;
				left: -.1em;
				top: 50%;
				transition: transform 0.2s 0.15s, color 1s;
			}
			.graphic{
				stroke: $input-color;
			    position: absolute;
			    top: 0;
			    left: 0;
			    fill: none;
			    transition: transform 0.7s, stroke 0.7s;
			}
		}
	}
</style>