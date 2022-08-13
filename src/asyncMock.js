
const products = [
	{
		id: "1",
		title: "viking miniature",
		description: "A miniature of a viking warrior",
		price: "400",
		stock: "10",
		category: "miniatures",
		imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn10.bigcommerce.com%2Fs-yneoa%2Fproducts%2F187%2Fimages%2F368%2F32VIKM13__67229.1461817687.1280.1280.jpg%3Fc%3D2&f=1&nofb=1"
	},
	{
		id: "2",
		title: "20 sided dice",
		description: "A dice of 20 sides for ttrpgs",
		price: "50",
		stock: "15",
		category: "dice",
		imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-content-oz1.storbie.com%2Fimages%2Fyellow-and-black-large-34mm-twenty-sided-dice-game.jpg%3Fi%3D-dJETfKBd23LP3qyJpBn2vh5OO5Kjwy0beUvZX964WBDGluY7dwuKimPIOErDovShGGOi5O77aUJIZ0clWzeURZfv0xls8_n0x7E5yUh_9kqdMEdOFKtGvqs6S7EKN8VkBZa3R7pJWI3xlf5daI1AwMQUNsm9l5Xo4dRHO2mfdtVSD2dGy9KCZq5ZkDnqbsZLV7Zgur1REYxgBAWdDzEVonxkRP29Gos-KaCUgKUw0dDDLNzFxM6C0AQS66vM6a22UgMD4Ip_g9GuN3UWBoduw~~&f=1&nofb=1"
	}
];

export const getProducts = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products)	
		}, 500)
	})
}
export const getProduct = (id) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const product = products.find((el) => {return el.id == id});
			resolve(product);
		}, 500)
	})
}
export const getProductsByCategory = (category) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const filteredProducts = products.filter((el) => {return el.category == category});
			resolve(filteredProducts);
		}, 500)
	})
}
