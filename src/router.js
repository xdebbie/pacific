import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Skiing from '@/views/Skiing.vue';
import Bobsled from '@/views/Bobsled.vue';
import Skeleton from '@/views/Skeleton.vue';
import Snowboarding from '@/views/Snowboarding.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/skiing',
		name: 'Skiing',
		component: Skiing,
	},
	{
		path: '/bobsled',
		name: 'Bobsled',
		component: Bobsled,
	},
	{
		path: '/skeleton',
		name: 'Skeleton',
		component: Skeleton,
	},
	{
		path: '/snowboarding',
		name: 'Snowboarding',
		component: Snowboarding,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
