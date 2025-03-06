const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
async function fetchDataAndDisplay(callback) {
	try{
		const response = await fetch(apiUrl);
		const data = await response.json();
		callback(data.title);
	}
	catch(error){
		console.error("Error fectching data:", error);
	}
}
function displayTitle(title){
	const outputDiv = document.getElementById('output');
	outputDiv.textContent = title;
}
document.getElementById('btn').addEventListener('click', () => {
    fetchDataAndDisplay(displayTitle);
});