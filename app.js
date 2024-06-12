const search = document.querySelector('#yo');

search.addEventListener('submit', async function(e){
	e.preventDefault();
	const input = search.elements.q.value
	console.log(input);
	const chill = await axios.get(`https://api.tvmaze.com/search/shows?q=${input}`)
	console.log(chill.data[0].show.image.medium)
	const img = document.createElement('img');
	img.src = chill.data[0].show.image.medium
	document.body.append(img)
})
