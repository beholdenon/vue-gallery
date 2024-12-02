import { ref } from 'vue'
import {createClient} from '../composables/createClient.js';
const { client } = createClient();

	const error = ref(null);
	const data = ref(null);

export function getEntries(query) {
	client.getEntries(query)
	.then(response => data.value = response.items )
	.catch(err => (error.value = err))
	return { data, error }
}