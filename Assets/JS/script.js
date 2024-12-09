// Define the API URL
const apiUrl = 'http://localhost:3000/api/admin';


// Fetch the latest data from MongoDB and update the HTML elements
window.onload = () => {
    fetchLatestImagesData();
};

// Fetch latest grammarian slide data
async function fetchLatestGrammarSlideData() {
    try {
        const response = await fetch(apiGrammarUrl);
        const data = await response.json();
        const latestGrammarSlide = data[data.length - 1];

        document.getElementById('wordOfTheDay').value = latestGrammarSlide.wordOfTheDay || '';
        document.getElementById('pronunciation').value = latestGrammarSlide.pronunciation || '';
        latestGrammarSlide.meaning.forEach((meaning, index) => {
            if (index === 0) {
                document.getElementById('meaning').value = meaning;
            } else {
                addMeaningField(meaning);
            }
        });
        latestGrammarSlide.example.forEach((example, index) => {
            if (index === 0) {
                document.getElementById('example').value = example;
            } else {
                addExampleField(example);
            }
        });
    } catch (error) {
        console.error('Error fetching grammarian data:', error);
    }
}

async function fetchLatestImagesData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const latestImage = data[data.length - 1];

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

        
        updateDynamicOptionalImage(latestImage.themeSlideDcoratingImage, "Start & End Slide Extra Image");
        updateDynamicOptionalImage(latestImage.grammarianIntroSlideDecoratingImageOne, "Grammarian Inrto Slide Extra Image One");
        updateDynamicOptionalImage(latestImage.grammarianIntroSlideDecoratingImageTwo, "Grammarian Inrto Slide Extra Image Two");
        updateDynamicOptionalImage(latestImage.timerIntroSlideDecoratingImageOne, "Timer Inrto Slide Extra Image One");
        updateDynamicOptionalImage(latestImage.timerIntroSlideDecoratingImageTwo, "Timer Inrto Slide Extra Image Two");
        updateDynamicOptionalImage(latestImage.ahCounterIntroSlideDecoratingImageOne, "Ah-Counter Inrto Slide Extra Image One");
        updateDynamicOptionalImage(latestImage.ahCounterIntroSlideDecoratingImageTwo, "Ah-Counter Inrto Slide Extra Image Two");
        updateDynamicOptionalImage(latestImage.ahCounterIntroSlideDecoratingImageThree, "Ah-Counter Inrto Slide Extra Image Three");
        updateDynamicOptionalImage(latestImage.ahCounterIntroSlideDecoratingImageFour, "Ah-Counter Inrto Slide Extra Image Four");
        updateDynamicOptionalImage(latestImage.ahCounterIntroSlideDecoratingImageFive, "Ah-Counter Inrto Slide Extra Image Five");
        updateDynamicOptionalImage(latestImage.pillerWordsSlideDecoratingImageOne, "Piller Words Slide Extra Image One");
        updateDynamicOptionalImage(latestImage.pillerWordsSlideDecoratingImageTwo, "Piller Words Slide Extra Image Two");
        updateDynamicOptionalImage(latestImage.pillerWordsSlideDecoratingImageThree, "Piller Words Slide Extra Image Three");
        updateDynamicOptionalImage(latestImage.pillerWordsSlideDecoratingImageFour, "Piller Words Slide Extra Image Four");
        updateDynamicOptionalImage(latestImage.prepareSpeakersDecoratingImageOne, "Prepare Speakers Slide Extra Image One");
        updateDynamicOptionalImage(latestImage.prepareSpeakersDecoratingImageTwo, "Prepare Speakers Slide Extra Image Two");
        updateDynamicOptionalImage(latestImage.roundRobinDecoratingImageOne, "Round Robin Slide Extra Image One");
        updateDynamicOptionalImage(latestImage.roundRobinDecoratingImageTwo, "Round Robin Slide Extra Image Two");
        updateDynamicOptionalImage(latestImage.tabelTopicDecoratingImageOne, "Table Topic Slide Extra Image One");
        updateDynamicOptionalImage(latestImage.tabelTopicDecoratingImageTwo, "Table Topic Slide Extra Image Two");

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to handle dynamic image updates
function updateDynamicRequiredImage(requiredImageUrl, requiredImageDescription, requiredImageID) {
    const container = document.getElementById('dynamicRequiredImageContainer');
    const childContainer = document.createElement('div')
    childContainer.className = 'imageContainer';
    container.appendChild(childContainer);

    const description = document.createElement('h4');
    description.className = 'imgDes';
    description.textContent = requiredImageDescription;
    childContainer.appendChild(description);

    const imageDiv = document.createElement('div');
    imageDiv.className = 'imageDiv';
    childContainer.appendChild(imageDiv);

    const img = document.createElement('img');
    img.src = requiredImageUrl;
    img.className = 'image';
    img.id = requiredImageID;
    imageDiv.appendChild(img);
}

function updateDynamicOptionalImage(optinalImageUrl, optionalImageDescription, optionalImageID) {
    const container = document.getElementById('dynamicOptionalImageContainer');
    const childContainer = document.createElement('div')
    childContainer.className = 'imageContainer';
    container.appendChild(childContainer);

    const description = document.createElement('h4');
    description.className = 'imgDes';
    description.textContent = optionalImageDescription;
    childContainer.appendChild(description);

    const imageDiv = document.createElement('div');
    imageDiv.className = 'imageDiv';
    childContainer.appendChild(imageDiv);

    const img = document.createElement('img');
    img.src = optinalImageUrl;
    img.className = 'image';
    img.id = optionalImageID;
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
        thanksGivingSlideBackgroundImage: formData.get('thanksGivingBG'),

        themeSlideDcoratingImage : formData.get('themeOp'),
        grammarianIntroSlideDecoratingImageOne : formData.get('grammarianOpOne'),
        grammarianIntroSlideDecoratingImageTwo : formData.get('grammarianOpTwo'),
        timerIntroSlideDecoratingImageOne : formData.get('timerOpOne'),
        timerIntroSlideDecoratingImageTwo : formData.get('timerOpTwo'),
        ahCounterIntroSlideDecoratingImageOne : formData.get('ahCounterOpOne'),
        ahCounterIntroSlideDecoratingImageTwo : formData.get('ahCounterOpTwo'),
        ahCounterIntroSlideDecoratingImageThree : formData.get('ahCounterOpThree'),
        ahCounterIntroSlideDecoratingImageFour : formData.get('ahCounterOpFour'),
        ahCounterIntroSlideDecoratingImageFive : formData.get('ahCounterOpFive'),
        pillerWordsSlideDecoratingImageOne : formData.get('pillerOpOne'),
        pillerWordsSlideDecoratingImageTwo : formData.get('pillerOpTwo'),
        pillerWordsSlideDecoratingImageThree : formData.get('pillerOpThree'),
        pillerWordsSlideDecoratingImageFour : formData.get('pillerOpFour'),
        prepareSpeakersDecoratingImageOne : formData.get('prepareSpeakerOpOne'),
        prepareSpeakersDecoratingImageTwo : formData.get('prepareSpeakerOpTwo'),
        roundRobinDecoratingImageOne : formData.get('roundRobinOpOne'),
        roundRobinDecoratingImageTwo : formData.get('roundRobinOpTwo'),
        tabelTopicDecoratingImageOne : formData.get('tableTopicOpOne'),
        tabelTopicDecoratingImageTwo : formData.get('tableTopicOpTwo'),
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
            fetchLatestPlayerData();
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