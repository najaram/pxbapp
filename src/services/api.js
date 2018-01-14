import axios from 'axios'
import {config} from './../config'

const apiDomain = config.API_ENDPOINT

export default {

	install (Vue, options) {
		Vue.prototype.$apiService = {

			search (url, payload) {
				return new Promise((resolve, reject) => {
					axios.get(apiDomain + url, payload).then((response) => {
						resolve(response.data)
					})
				})
			}

		}
	}

}