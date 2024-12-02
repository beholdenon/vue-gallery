import { ref } from 'vue'
import {createClient} from '../composables/createClient.js';
const { client } = createClient();

export function getEntry(entryId) {
	const error = ref(null);
	const data = ref(null);
	client.getEntry(entryId)
	.then(response => data.value = response )
	.catch(err => (error.value = err))
	return { data, error }
}