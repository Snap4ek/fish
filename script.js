// используем Vue для программирования поведения и появления рыбок
new Vue({
	// создаём новое vue-приложение
	el: "#app",
	data: {
		// массив с рыбками
		fish: ["🐟", "🐠", "🐡", "🐙", '🦑', '🐬', '🐳', '🐋', '🦑', '🦈', '🧜‍♀️', '🧜'],
		// устанавливаем, какие рыбки будут двигаться на разных планах и с какой скоростью
front: [{ 'fish': '🐠', 'style': { top: '10%', animationDuration: '30s' } }],
		middle: [{ 'fish': '🐡', 'style': { top: '47%', animationDuration: '25s' } }],
		back: [{ 'fish': '🐟', 'style': { top: '14%', animationDuration: '35s' } }],
		layers: ["front", "middle", "back"] 
	},


	// задаём методы приложения
methods: {
	// функция добавления новой рыбки
		addFish: function (event) {
			// выбираем случайным образом рыбку и план для неё
			const icon = Math.floor(Math.random() * this.fish.length);
			const layer = Math.floor(Math.random() * 3);
			// создаём новую рыбку с выбранными параметрами
			const object = {
				fish: this.fish[icon],
				style: {
				// задаём размер и скорость движения рыбы
				fontSize: Math.floor(Math.random() * 10 + 2) + "rem",
				top: Math.floor(Math.random() * 100) + "%", animationDuration: Math.floor(Math.random() * 30 + 10) + "s" } 
			};

			// добавляем рыбу на нужный слой
this.layers[layer] === "front" && this.front.push(object);
			this.layers[layer] === "middle" && this.middle.push(object);
			this.layers[layer] === "back" && this.back.push(object);
		}	 
	} 
});
