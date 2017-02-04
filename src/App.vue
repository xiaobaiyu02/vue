<template>
	<div id="app">
        <to-do-list></to-do-list>	
	</div>
</template>

<script>
import ToDoList from './components/ToDoList'

export default {
	name: 'app',
	components: {
		ToDoList
	}
}
</script>

<style>
@import './css/common.scss';

#app{
	
}
</style>
