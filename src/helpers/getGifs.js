export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=3Ohb73CrnLorrerRvaKzGSdaycRwC5V5&q=${category}&limit=10`
    const res = await fetch(url)
    const {data} = await res.json()

    const gifs = data.map(g => ({
        id: g.id,
        title: g.title,
        url: g.images.downsized_medium.url
    }))

    return gifs
}