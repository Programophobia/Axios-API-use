const search = document.querySelector('#yo');

search.addEventListener('submit', async function(e){
	e.preventDefault();
	const input = search.elements.q.value
	console.log(input);
	const config = {params: {q: input}}
	const chill = await axios.get(`https://api.tvmaze.com/search/shows`, config)
	getImg(chill.data)
	input = " "
})


const getImg = (shows) => {
	for(let result of shows){
      if(result.show.image){
      	const img = document.createElement('img');
	    img.src = result.show.image.medium
	    document.body.append(img)
	   }
	}
};
