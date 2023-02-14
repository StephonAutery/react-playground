In your App.js component, import useEffect.
Remove your data.json import, as this will no longer be needed.
Within the App component, create a state variable called “swData” and set its initial value to an empty array.
Above the return statement (and below your state variable), call useEffect(callback_function, []) and within the callback make a fetch request to https://swapi.dev/api/people/?page=2.
Remember, you must parse the json out of the fetch response:
fetch(url)
.then(res => res.json())
.then(data => {
// You have the data
}) 6. Within your fetch callback, set our state variable swData to the data.results array that is returned from the Star Wars API. 7. You should now see a new list of characters displayed on the page.
Note: Don’t forget about console.log() if you need to check values!
