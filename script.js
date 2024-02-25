// Sample recipes for each category with corresponding image URLs and links
var meatRecipes = [
	{
		name: "Easy Chicken Parmesan",
		image:
			"https://www.inspiredtaste.net/wp-content/uploads/2016/08/Chicken-Parmesan-Recipe-1-1200.jpg",
		url: "https://www.inspiredtaste.net/22178/chicken-parmesan-recipe/"
	},
	{
		name: "Easy Swedish Meatballs",
		image:
			"https://www.inspiredtaste.net/wp-content/uploads/2018/11/Homemade-Swedish-Meatballs-Recipe-2-1200.jpg",
		url: "https://www.inspiredtaste.net/37759/swedish-meatballs-recipe/"
	},
	{
		name: "Pork Tacos",
		image:
			"https://www.inspiredtaste.net/wp-content/uploads/2018/03/Easy-Ground-Pork-Tacos-Recipe-3-1200.jpg",
		url: "https://www.inspiredtaste.net/36140/ground-pork-tacos-recipe/"
	}
];

var veganRecipes = [
	{
		name: "Easy Vegetable Baked Pasta",
		image:
			"https://www.inspiredtaste.net/wp-content/uploads/2019/04/Vegetable-Baked-Pasta-Recipe-3-1200.jpg",
		url: "https://www.inspiredtaste.net/40176/vegetable-baked-pasta/"
	},
	{
		name: "Spicy Veggie Burritos",
		image:
			"https://www.inspiredtaste.net/wp-content/uploads/2019/08/Veggie-Burrito-Recipe-1-1200.jpg",
		url: "https://www.inspiredtaste.net/42878/cauliflower-veggie-burritos/"
	},
	{
		name: "Tahini Lemon Quinoa Bowls",
		image:
			"https://www.inspiredtaste.net/wp-content/uploads/2022/08/Quinoa-Salad-with-Tahini-Dressing-1200.jpg",
		url: "https://www.inspiredtaste.net/54376/tahini-quinoa-bowl/"
	}
];

var glutenFreeRecipes = [
	{
		name: "Gluten-Free Pizza",
		image:
			"https://i0.wp.com/laulimakitchen.com/wp-content/uploads/2021/04/PizzaBlog1.png?resize=1220%2C600&ssl=1",
		url: "https://laulimakitchen.com/?p=1082"
	},
	{
		name: "Garlic Zucchini Noodles Pasta",
		image:
			"https://www.inspiredtaste.net/wp-content/uploads/2016/08/Zucchini-Pasta-Recipe-1.jpg",
		url: "https://www.inspiredtaste.net/29992/garlic-zucchini-pasta-recipe/"
	},
	{
		name: "Avocado Tomato Stuffed Sweet Potatoes",
		image:
			"https://www.inspiredtaste.net/wp-content/uploads/2016/04/Baked-Sweet-Potato-Recipe-3-1200.jpg",
		url:
			"https://www.inspiredtaste.net/28780/baked-sweet-potato-with-tomato-salsa/"
	}
];

// Function to get a random recipe from an array
function getRandomRecipe(recipes) {
	return recipes[Math.floor(Math.random() * recipes.length)];
}

// Update modal content with random recipe, image, and link
function updateModalContentWithImage(modalId, recipe) {
	var modal = document.getElementById(modalId);
	var modalRecipeLink = modal.querySelector("a");

	// Select the anchor element
	var modalRecipe = modal.querySelector(".modal-content p");
	var modalHeaderImg = modal.querySelector(".modal-content img");

	modalRecipe.textContent = recipe.name;
	modalHeaderImg.src = recipe.image;
	modalHeaderImg.alt = recipe.name;
	modalRecipeLink.href = recipe.url;

	modal.style.display = "block";
}

// Modified button onclick functions to show random recipe and image
document.getElementById("meatBtn").onclick = function () {
	var recipe = getRandomRecipe(meatRecipes);
	updateModalContentWithImage("meatModal", recipe);
};

document.getElementById("veganBtn").onclick = function () {
	var recipe = getRandomRecipe(veganRecipes);
	updateModalContentWithImage("veganModal", recipe);
};

document.getElementById("glutenFreeBtn").onclick = function () {
	var recipe = getRandomRecipe(glutenFreeRecipes);
	updateModalContentWithImage("glutenFreeModal", recipe);
};

// CLICK X, CLOSE MODAL - MODIFIED TO CLOSE SPECIFIC MODAL
var closeButtons = document.getElementsByClassName("close");
for (var i = 0; i < closeButtons.length; i++) {
	closeButtons[i].onclick = function () {
		this.parentElement.parentElement.style.display = "none";
	};
}

// CLICK OUTSIDE WINDOW, CLOSE IT - REMAINS THE SAME
window.onclick = function (event) {
	var meatModal = document.getElementById("meatModal");
	var veganModal = document.getElementById("veganModal");
	var glutenFreeModal = document.getElementById("glutenFreeModal");

	if (
		event.target == meatModal ||
		event.target == veganModal ||
		event.target == glutenFreeModal
	) {
		meatModal.style.display = "none";
		veganModal.style.display = "none";
		glutenFreeModal.style.display = "none";
	}
};
