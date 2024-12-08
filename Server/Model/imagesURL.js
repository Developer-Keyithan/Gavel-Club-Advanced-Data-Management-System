const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema ({
    sessionsSlideBackground: {type: String, required: true},

    themeSlideImage: {type: String, required: true},
    themeSlideDcoratingImage: {type: String, required: false},

    introSlideImage: {type: String, required: true},

    grammarianIntroSlideImage: {type: String, required: true},
    grammarianIntroSlideDecoratingImageOne: {type: String, required: false},
    grammarianIntroSlideDecoratingImageTwo: {type: String, required: false},

    wordOfTheDaySlideBackgroundImage: {type: String, required: false},

    timerIntroSlideImage: {type: String, required: true},
    timerIntroSlideDecoratingImageOne: {type: String, required: false},
    timerIntroSlideDecoratingImageTwo: {type: String, required: false},

    timingSlideBackgroundImage: {type: String, required: true},

    ahCounterIntroSlideImage: {type: String, required: true},
    ahCounterIntroSlideDecoratingImageOne: {type: String, required: false},
    ahCounterIntroSlideDecoratingImageTwo: {type: String, required: false},
    ahCounterIntroSlideDecoratingImageThree: {type: String, required: false},
    ahCounterIntroSlideDecoratingImageFour: {type: String, required: false},
    ahCounterIntroSlideDecoratingImageFive: {type: String, required: false},

    pillerWordsSlideBackgroundImage: {type: String, required: true},
    pillerWordsSlideDecoratingImageOne: {type: String, required: false},
    pillerWordsSlideDecoratingImageTwo: {type: String, required: false},
    pillerWordsSlideDecoratingImageThree: {type: String, required: false},
    pillerWordsSlideDecoratingImageFour: {type: String, required: false},

    prepareSpeakersBackgroundImage: {type: String, required: true},
    prepareSpeakersDecoratingImageOne: {type: String, required: false},
    prepareSpeakersDecoratingImageTwo: {type: String, required: false},

    roundRobinBackgroundImage: {type: String, required: true},
    roundRobinDecoratingImageOne: {type: String, required: false},
    roundRobinDecoratingImageTwo: {type: String, required: false},

    tabelTopicBackgroundImage: {type: String, required: true},
    tabelTopicDecoratingImageOne: {type: String, required: false},
    tabelTopicDecoratingImageTwo: {type: String, required: false},

    feedbackSlideBackgroundImage: {type: String, required: true},

    thanksGivingSlideBackgroundImage: {type: String, required: true}
});

const URL = mongoose.model('URL', urlSchema);

module.exports = URL;