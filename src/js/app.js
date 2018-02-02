"use strict";

var app = new Vue({
	el: "#app",
	data: {
		enteredName: '',
		enteredEmail: '',
		gravatar: 	'',
		people: [
			{
				name: 'John Johnson',
				email: 'chris.silich@gmail.com',
				hashedemail: md5('chris.silich@gmail.com'),
				time: Date.now(),
				since: 0, // number of minutes since person has checked in.
			},
			{
				name: 'Fred Fredrickson',
				email: 'shellyjames90@yahoo.com',
				hashedemail: md5('shellyjames90@yahoo.com'),
				time: Date.now(),
				since: 0,
			},
			{
				name: 'Brad Pitt',
				email: 'brad@pitt.com',
				hashedemail: md5('brad@pitt.com'),
				time: Date.now(),
				since: 0,
			},
		]
	},
	created: function(){
		setInterval(this.updateTimeSinceValues, 10 * 1000)


	},
	methods:{
		updateTimeSinceValues: function(){
			console.log('10sec')
			this.people.forEach(person => {
				person.since = Math.round((Date.now() - person.time) / 1000 /60)
			})
		},
		submitPerson: function() {
			if (!this.enteredEmail || !this.enteredName) 
				return
			console.log('enter was hit')

			this.people.unshift(
				{
				name: this.enteredName,
				email: this.enteredEmail,
				hashedemail: md5(this.enteredEmail),
				time: Date.now(),
			});

			if (this.people.length > 4) {
				this.people.pop();
			}

			this.enteredEmail = ''
			this.enteredName = ''
		},
})



