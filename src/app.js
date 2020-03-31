import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: '#app',
		data: {
			currencyValue: 0,
			rates: {},
			convertedAmount: 0,
			rate1: 0,
			rate2: 0
		},
		computed: {},
		mounted() {
			this.getCurrencies();
		},
		methods: {
			getCurrencies: function() {
				fetch('https://api.exchangeratesapi.io/latest')
					.then(res => res.json())
					.then(data => (this.rates = data.rates));
			},
			convertAmount: function() {
				this.convertedAmount = this.currencyValue / this.rate1;
				this.convertedAmount = this.convertedAmount * this.rate2;
				this.convertedAmount = this.convertedAmount.toFixed(2);
			}
		}
	});
});
