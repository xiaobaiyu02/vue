<template>
	<div id="to-do-list">
		<div class="input" v-bind:class="{'hasVal': newItem!==''}">
			<input class="input_field" type="text" id="input-1" v-model="newItem" @keyup.enter="addItem()"/>
			<label class="input_label" for="input-1">List Item</label>
			<svg class="graphic" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
				<path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
			</svg>
		</div>
		<div class="list">
			<transition-group name="list" tag="ul">
				<li class="list-item" v-for="(item, i) in lists" :key="item" v-bind:class="{'done': item.done}" @click="setStatus(item)">
					<span class="listname">{{ item.name }}</span>
					<svg class="doneshap" viewBox="0 0 800 300" preserveAspectRatio="none">
						<path class="path" d="M66.033 90s-1.382-.924-1 0c.542 1.307 3.027 1.77 4 2 2.177.514 4.027 2.77 5 3 4.353 1.027 7.944 4.188 11 5 4.93 1.31 6.81 2.32 10 4 4.766 2.507 7.08 1.79 10 3 2.066.856 5.054 2.54 7 3 4.353 1.027 5.098 2.824 7 4 2.552 1.577 3.824 1.486 6 2 1.947.46 2.694 1.46 4 2 1.848.765 4 1 5 2s3.186 1.693 5 3c2.295 1.654 5.372 2.385 9 5 1.148.827 3.186 1.693 5 3 1.148.827 1.293 1.293 2 2 1.415 1.414 4.293 1.293 5 2 .708.707.293 1.293 1 2 .708.707 2 1 3 2s2.077.617 3 1c1.307.54 1.694 2.46 3 3 .924.383 3.293 2.293 4 3 .708.707.694 1.46 2 2 .924.383 4 0 5 0 5 0 8.803-1.433 15-4 2.922-1.21 5.08-.79 8-2 2.066-.856 3.824-2.486 6-3 1.947-.46 3.153-.235 5-1 2.614-1.082 5.02-2.81 6-3 5.288-1.018 6.935-3.144 9-4 2.922-1.21 7.824-3.486 10-4 2.92-.69 7.96-3.084 10-4 4.913-2.206 8-3 14-5 3-1 7.944-4.188 11-5 4.93-1.31 11-3 14-4 6-2 8.944-2.148 14-4 2.97-1.088 8.655-2.823 15-5 4.824-1.655 8.877-2.343 14-4 3.924-1.27 10.133-1.57 14-3 4.195-1.552 7.89-3.194 13-6 1.96-1.076 6.706-2.346 9-4 1.814-1.307 6.088-1.794 11-4 2.04-.916 5.13-1.13 8-2 3.45-1.045 8.08-3.79 11-5 2.066-.856 5.306-2.17 9-4 5.738-2.842 5.39-4.77 9-7 2.69-1.663 6.77-3.303 8-4 3.588-2.03 5-2 8-4s4.882-3.19 8-5c1.934-1.122 4.907-3.103 6-4 2.79-2.286 5-3 6-4 2-2 2.935-3.144 5-4 2.922-1.21 5.043-2.71 6-3 3.45-1.045 6.027-3.77 7-4 2.177-.514 2.694-2.46 4-3 .924-.383 3.186-.693 5-2 2.295-1.654 3-2 4-3s2.077-.617 3-1c1.307-.54 1.882-1.19 5-3 1.934-1.122 5.15-1.435 7-4 .585-.81 2.297-1.614 5-4 1.677-1.48 5.387-2.918 8-4 .924-.383 2-1 3-2l1-1"
							  stroke-opacity="null" stroke-width="8" stroke="#15b651" fill="none"/>
					</svg>
					<a href="javascript:void(0)" class="delete" @click.stop="delItem(item, $event)"></a>
				</li>
			</transition-group>
		</div>
	</div>
</template>

<script>
	import StoreList from '../js/todo-list-store.js';

	export default{
		name: 'to-do-list',
		data(){
			return{
				newItem: '',
				lists: StoreList.fetch()
			}
		},
		methods:{
			setStatus(item){
				item.done = !item.done;
			},
			delItem(item, e){
				this.lists.splice(this.lists.indexOf(item),1);
			},
			addItem(){
				if(this.newItem!==''){
					this.lists.push({
						name: this.newItem,
						done: false
					});
					this.newItem = '';
				}
			}
		},
		watch:{
			lists:{
				handler: function(lists){
					StoreList.save(lists);
				},
				deep: true
			}
		}
	}
</script>

<style lang='scss' scoped>
	@import '../css/todo-list.scss';

	/* list 过渡 */
	.list-item {
		transition: all 1s;
	}
	.list-enter, .list-leave-active {
	  opacity: 0;
	  transform: translateX(30px);
	}
	.list-leave-active {
	  position: absolute;
	}

	
</style>