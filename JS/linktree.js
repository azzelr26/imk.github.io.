const search = document.getElementById("search");
const links = document.getElementById("links");

search.addEventListener("input", function() {
	const searchTerm = search.value.toLowerCase();
	const linksArray = links.getElementsByTagName("a");

	for (let i = 0; i < linksArray.length; i++) {
		const linkText = linksArray[i].textContent.toLowerCase();

		if (linkText.includes(searchTerm)) {
			linksArray[i].style.display = "block";
		} else {
			linksArray[i].style.display = "none";
		}
	}
});

const scrollButton = document.createElement("button");
scrollButton.textContent = "Scroll to Top";
scrollButton.style.position = "fixed";
scrollButton.style.bottom = "20px";
scrollButton.style.right = "20px";
scrollButton.style.backgroundColor = "#34495e";
scrollButton.style.color = "#fff";
scrollButton.style.padding = "10px";
scrollButton.style.border = "none";
scrollButton.style.borderRadius = "5px";
scrollButton.style.zIndex = "100";
scrollButton.style.display = "none";

document.body.appendChild(scrollButton);

window.addEventListener("scroll", function() {
	if (window.pageYOffset > 500) {
		scrollButton.style.display = "block";
	} else {
		scrollButton.style.display = "none";
	}
});

scrollButton.addEventListener("click", function() {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
});