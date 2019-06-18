import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: '#app',
    data: {
      currencyRates: {},
      selectedCurrency: 0,
      selectedSecondCurrency: 0,
      amount: 0,
      convertedToEuros: 0,
      convertedFromEuros: 0,
      convertedBaseCurrency: 0
    },
    mounted() {
      this.fetchAllCurrencies();
    },
    methods: {
      fetchAllCurrencies: function() {
        let request = fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then(data => this.currencyRates = data.rates)
      },
      convertedEuros: function(event) {
         const undividedTo = this.amount / this.selectedCurrency
         this.convertedToEuros = Math.round(undividedTo * 100)/100
      },
      convertedOther: function(event) {
        const undividedFrom = this.amount * this.selectedCurrency
        this.convertedFromEuros = Math.round(undividedFrom * 100)/100
      },
      convertedBase: function(event) {
        const nonEuroConversion = this.selectedCurrency * this.selectedSecondCurrency
        this.convertedBaseCurrency = Math.round(nonEuroConversion * 100)/100
      }
    }
  })
})
