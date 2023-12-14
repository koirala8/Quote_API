const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next) => {
    res.json({quote: getRandomElement(quotes)});
});

app.get('/api/quotes', (req, res, next) => {
    const queryParams = req.query;

    if (Object.keys(queryParams).length === 0) {
        // If no query parameters are provided, return all quotes
        res.json({ quotes: quotes });
    } else {
        const queryParamsPerson = queryParams.person;

        if (queryParamsPerson) {
            // Filter quotes based on the specified person
            const personQuotes = quotes.filter(quote => quote.person === queryParamsPerson);

            if (personQuotes.length > 0) {
                res.json({ quotes: personQuotes });
            } else {
                res.json({ message: 'No quotes found for the specified person.' });
            }
        } else {
            // If other query parameters are provided, handle them accordingly
            res.json({ message: 'Unsupported query parameters.' });
        }
    }
});

app.post('/api/quotes', (req, res, next) => {
    const { quote, person } = req.query;

    // Verify that both quote and person properties exist in the request query string
    if (!quote || !person) {
        res.status(400).json({ message: 'Both "quote" and "person" properties are required in the query string.' });
    } else {
        // If all is well, create a new quote object
        const newQuote = {
            text: quote,
            person: person
        };

        // Add the new quote object to the data array
        quotes.push(newQuote);

        // Send back a response with the new quote object
        res.status(201).json({ message: 'Quote added successfully', quote: newQuote });
    }
});



app.listen(PORT);
