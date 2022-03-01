# japanese-number-checker

## Summary 

I am aiming to create a quality assurance tool for Japanese to English translation that checks whether numbers in a Japanese source text are present in the English translation.
I am currently working on the back-end logic and eventually hope to create a Google Chrome extension to be used with popular browser-based computer assisted translation (CAT) tool Memsource.

## Background

Number checks are a core feature of the automated quality assurance check of any CAT tool. For example, if a source text contains the number 1, the QA check will look to see if there is a 1 in the translation and flag up an error if not.
However, due to several peculiarities of the Japanese language, these QA checks are rendered almost useless.

Representative examples include:
* Months: Months in Japanese are written as a combination of a numeral and "月" (month). For example, March is 3月. Traditional QA tools will raise an error about the lack of a "3".
* Combinations of Arabic and Japanese numerals: Many numbers, especially large numbers, are written as a combination of an Arabic numeral and Japanese kanji. For example, the character 万 means 10,000, so 30万 is 300,000.
* Years: A unique Imperial year system is used in Japan. For example, the current year (2022) is "Reiwa 4", which would obviously raise an error with traditional QA tools.

This tool seeks to address these common examples and offer an accurate number check for Japanese to English translation.
