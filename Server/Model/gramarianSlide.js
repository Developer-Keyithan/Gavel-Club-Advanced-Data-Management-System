const mongoose = require('mongoose');

const grammarianSlideSchema = new mongoose.Schema({
    word_of_the_day: { type: String, required: true },
    pronunciation: { type: String, required: true },
    meaning: { type: [String], default: [], required: true, validate: [arrayMinLength, 'Meaning should have at least one item.'] },
    example: { type: [String], default: [], required: true, validate: [arrayMinLength, 'Example should have at least one item.'] }
});

// Custom validator to ensure the array has at least one element
function arrayMinLength(val) {
    return val.length > 0;
}

const GrammarianSlide = mongoose.model('GrammarianSlide', grammarianSlideSchema);

module.exports = GrammarianSlide;
