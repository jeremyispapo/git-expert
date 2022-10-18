export const getGif = async(category) => {

	const url = `https://api.giphy.com/v1/gifs/search?api_key=Ekc3t9pLfExeUosJ4jb2Wr9OXNGOca3l&q=${category}&limit=10`

	const response = await fetch(url)
	const {data} = await response.json()
	const gifs = data.map(({id,title,images}) => ({
		id,
		title,
		image: images.downsized_medium.url
	}))
	return gifs
}