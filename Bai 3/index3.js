let container = document.getElementById('container');
let form = document.getElementById('input').value;
let result = document.getElementById('result');
let output =document.getElementById('form').addEventListener('submit',this.handleSubmit )
function handleSubmit(e) {
	e.preventDefault();
	let value = e.target.input.value;
	fetch(`https://api.shrtco.de/v2/shorten?url=${value}`)
		.then((res) => res.json())
		.then((data) => {
			e.target.input.value = '';
			if (!value) {
				result.innerText = 'No link!';
			} else {
				result.innerText = `Link is: ${data.result.short_link}`;
			}
		});
}

