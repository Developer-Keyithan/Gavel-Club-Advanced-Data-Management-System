// Define the API URL
const apiUrl = 'http://localhost:3000/api/admin';



// Fetch the latest data from MongoDB and update the HTML elements
window.onload = () => {
    fetchLatestImagesData();
};

// Fetch latest grammarian slide data
async function fetchLatestGrammarSlideData() {
    try {
        const response = await fetch(apiGrammarUrl); // Fetch data from the grammarian API
        const data = await response.json();
        const latestGrammarSlide = data[data.length - 1]; // Get the latest grammarian slide

        // Update the form fields with the fetched grammarian data
        document.getElementById('wordOfTheDay').value = latestGrammarSlide.wordOfTheDay || '';
        document.getElementById('pronunciation').value = latestGrammarSlide.pronunciation || '';
        latestGrammarSlide.meaning.forEach((meaning, index) => {
            if (index === 0) {
                document.getElementById('meaning').value = meaning;
            } else {
                addMeaningField(meaning); // Add additional meaning fields dynamically
            }
        });
        latestGrammarSlide.example.forEach((example, index) => {
            if (index === 0) {
                document.getElementById('example').value = example;
            } else {
                addExampleField(example); // Add additional example fields dynamically
            }
        });
    } catch (error) {
        console.error('Error fetching grammarian data:', error);
    }
}

async function fetchLatestImagesData() {
    try {
        const response = await fetch(apiUrl); // Fetch data from the API
        const data = await response.json();
        const latestImage = data[data.length - 1]; // Get the last entry

        updateDynamicRequiredImage(latestImage.sessionsSlideBackground, "Start & End Slide Background Image");
        updateDynamicRequiredImage(latestImage.themeSlideImage, "Theme Slide Background Image");
        updateDynamicRequiredImage(latestImage.introSlideImage, "Commitee Intro Slide Side Image");
        updateDynamicRequiredImage(latestImage.grammarianIntroSlideImage, "Grammarian Inrto Slide Side Image");
        updateDynamicRequiredImage(latestImage.wordOfTheDaySlideBackgroundImage, "Word Of The Day Slide Background Image");
        updateDynamicRequiredImage(latestImage.timerIntroSlideImage, "Timer Inrto Slide Side Image");
        updateDynamicRequiredImage(latestImage.timingSlideBackgroundImage, "Timing Slide Background Image");
        updateDynamicRequiredImage(latestImage.ahCounterIntroSlideImage, "Ah-Counter Inrto Slide Side Image") ;
        updateDynamicRequiredImage(latestImage.pillerWordsSlideBackgroundImage, "Piller Words Slide Background Image");
        updateDynamicRequiredImage(latestImage.prepareSpeakersBackgroundImage, "Prepare Speakers Slide Background Image");
        updateDynamicRequiredImage(latestImage.roundRobinBackgroundImage, "Round Robin Slide Background Image");
        updateDynamicRequiredImage(latestImage.tabelTopicBackgroundImage, "Tabel Topic Slide Background Image");
        updateDynamicRequiredImage(latestImage.feedbackSlideBackgroundImage, "Feedback Slide Background Image");
        updateDynamicRequiredImage(latestImage.thanksGivingSlideBackgroundImage, "Thanks Giving Slide Background Image");
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to handle dynamic image updates
function updateDynamicRequiredImage(imageUrl, h4TextContent, imageID) {
    const container = document.getElementById('dynamicRequiredImageContainer');
    const childContainer = document.createElement('div')
    childContainer.className = 'imageContainer';
    container.appendChild(childContainer);

    const description = document.createElement('h4');
    description.className = 'imgDes';
    description.textContent = h4TextContent;
    childContainer.appendChild(description);

    const imageDiv = document.createElement('div');
    imageDiv.className = 'imageDiv';
    childContainer.appendChild(imageDiv);

    const img = document.createElement('img');
    img.src = imageUrl;
    img.className = 'image';
    img.id = imageID;
    imageDiv.appendChild(img);
}



// Function to handle form submission and POST the data to the server
document.getElementById('imagesForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const imageData = {
        sessionsSlideBackground: formData.get('sessionSlide'),
        themeSlideImage: formData.get('themeSlide'),
        introSlideImage: formData.get('introSlide'),
        grammarianIntroSlideImage: formData.get('grammarianSlide'),
        wordOfTheDaySlideBackgroundImage: formData.get('grammarianBG'),
        timerIntroSlideImage: formData.get('timerSlide'),
        timingSlideBackgroundImage: formData.get('timerBG'),
        ahCounterIntroSlideImage: formData.get('ahCounterSlide'),
        pillerWordsSlideBackgroundImage: formData.get('ahCounterBG'),
        prepareSpeakersBackgroundImage: formData.get('prepareSpeakersBG'),
        roundRobinBackgroundImage: formData.get('roundRobinBG'),
        tabelTopicBackgroundImage: formData.get('tableTopicBG'),
        feedbackSlideBackgroundImage: formData.get('feedbackBG'),
        thanksGivingSlideBackgroundImage: formData.get('thanksGivingBG')
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(imageData)
        });

        if (response.ok) {
            fetchLatestPlayerData(); // Refresh data after successful POST
        } else {
            console.error('Failed to save data');
        }
    } catch (error) {
        console.error('Error submitting data:', error);
    }
});

// Function to add a new meaning field dynamically
document.getElementById('addMeaning').addEventListener('click', () => {
    const newField = document.createElement('input');
    newField.type = 'text';
    newField.placeholder = 'Enter New Meaning';
    document.querySelector('form fieldset .meaning').insertBefore(newField, document.querySelector('button[id="addMeaning"]'));
});

// Function to add a new example field dynamically
document.getElementById('addExample').addEventListener('click', () => {
    const newField = document.createElement('input');
    newField.type = 'text';
    newField.placeholder = 'Enter New Example';
    document.querySelector('form fieldset .example').insertBefore(newField, document.querySelector('button[id="addExample"]'));
});