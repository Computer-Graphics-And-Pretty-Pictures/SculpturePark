<template>
	<room ref="room" v-if="sculptures.length > 0" v-bind:sculpturesData="sculptures"></room>
</template>

<script>
import Sculpture from './Sculpture.vue';
import Room from './Room.vue';
import {handelUnsavedChanges} from '../helpers/handelUnsavedChanges.js';

export default {
	data: function() {
		return {
			sculptures: [],
			roomName: "Global Room"
		}
	},
	components : {
		sculpture: Sculpture,
		room : Room	
	},
	mounted() {
		this.$store.commit('setInitialCameraPose', [6, 2.5, 4]);
		this.$store.dispatch('fetchAllSculptures').then(sculptures => {
			if(sculptures) {
				let temp = [];
				Object.keys(sculptures).forEach(key => {
					temp.push(sculptures[key]);
				})
				temp.reverse();
				this.sculptures = temp; //array.push isn't tracked by state, resetting is
			}
			this.$store.commit('joinRoom', this.roomName);
		})
	},
	destroyed() {
		this.$store.commit('leaveRoom', this.roomName);
	},
	beforeRouteLeave (to, from, next) {
		handelUnsavedChanges(next, this);
	}
	
};
</script>