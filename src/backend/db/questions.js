import { v4 as uuid } from "uuid";

export const questions = [
  {
    id: uuid(),
    statement: "What does HTML stands for?",
    option: [
      { id: 0, text: "Home Tool Markup Language", isCorrect: true },
      { id: 1, text: "Hypertext Markup Language", isCorrect: false },
      { id: 2, text: "Hyperlinks and Text Markup Language", isCorrect: false },
      { id: 3, text: "none of the above", isCorrect: false },
    ],
    tags: ["HTML"],
  },
  {
    id: uuid(),
    statement: "How is document type initialized in HTML5?",
    option: [
      { id: 0, text: "</DOCTYPE HTML>", isCorrect: false },
      { id: 1, text: "</DOCTYPE>", isCorrect: false },
      { id: 2, text: "<!DOCTYPE HTML>", isCorrect: true },
      { id: 3, text: "</DOCTYPE html>", isCorrect: false },
    ],
    tags: ["HTML"],
  },
  {
    id: uuid(),
    statement:
      "Which of the following HTML Elements is used for making any text bold ?",
    option: [
      { id: 0, text: "<p>", isCorrect: false },
      { id: 1, text: "<i>", isCorrect: false },
      { id: 2, text: "<li>", isCorrect: false },
      { id: 3, text: "<b>", isCorrect: true },
    ],
    tags: ["HTML"],
  },
  {
    id: uuid(),
    statement:
      "Which of the following HTML element is used for creating an unordered list?",
    option: [
      { id: 0, text: "<ui>", isCorrect: false },
      { id: 1, text: "<i>", isCorrect: false },
      { id: 2, text: "<em>", isCorrect: false },
      { id: 3, text: "<ul>", isCorrect: true },
    ],
    tags: ["HTML"],
  },
  {
    id: uuid(),
    statement: "Which of the following characters indicate closing of a tag? ",
    option: [
      { id: 0, text: ".", isCorrect: false },
      { id: 1, text: "/", isCorrect: false },
      { id: 2, text: "//", isCorrect: true },
      { id: 3, text: "!", isCorrect: false },
    ],
    tags: ["HTML"],
  },
  {
    id: uuid(),
    statement: "What is the font-size of the h1 heading tag?",
    option: [
      { id: 0, text: "3.5em", isCorrect: false },
      { id: 1, text: "2.17em", isCorrect: true },
      { id: 2, text: "2em", isCorrect: false },
      { id: 3, text: "1.5em", isCorrect: false },
    ],
    tags: ["HTML"],
  },
  {
    id: uuid(),
    statement: "How many heading tags are there in HTML5?",
    option: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "3", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "6", isCorrect: true },
    ],
    tags: ["HTML"],
  },
  {
    id: uuid(),
    statement: "How many attributes are there in HTML5?",
    option: [
      { id: 0, text: "2", isCorrect: true },
      { id: 1, text: "4", isCorrect: false },
      { id: 2, text: "1", isCorrect: false },
      { id: 3, text: "5", isCorrect: false },
    ],
    tags: ["HTML"],
  },
  {
    id: uuid(),
    statement:
      "Which of the following attributes is used to add link to any element?",
    option: [
      { id: 0, text: "link", isCorrect: false },
      { id: 1, text: "ref", isCorrect: false },
      { id: 2, text: "href", isCorrect: true },
      { id: 3, text: "newref", isCorrect: false },
    ],
    tags: ["HTML"],
  },
  {
    id: uuid(),
    statement:
      "Which of the following is the correct way of creating an hyperlink in HTML?",
    option: [
      {
        id: 0,
        text: "<a>www.geeksforgeeks.org <Geeksforgeeks /a>",
        isCorrect: false,
      },
      {
        id: 1,
        text: "<a href=“www.geeksforgeeks.org” Geeksforgeeks /a>",
        isCorrect: false,
      },
      {
        id: 2,
        text: "<a href= “www.geeksforgeeks.org”>Geeksforgeeks</a>",
        isCorrect: false,
      },
      {
        id: 3,
        text: "<a link=“www.geeksforgeeks.org” Geeksforgeeks> </a>",
        isCorrect: true,
      },
    ],
    tags: ["HTML"],
  },
  {
    id: uuid(),
    statement: "Which of the following is correct about CSS?",
    option: [
      {
        id: 0,
        text: "CSS is used to control the style of a web document in a simple and easy way",
        isCorrect: false,
      },
      {
        id: 1,
        text: "CSS is the acronym for 'Cascading Style Sheet'.",
        isCorrect: false,
      },
      {
        id: 2,
        text: "You can write CSS once and then reuse same sheet in multiple HTML pages",
        isCorrect: false,
      },
      { id: 3, text: "All of the above", isCorrect: true },
    ],
    tags: ["CSS"],
  },
  {
    id: uuid(),
    statement:
      " Which of the following is a way to associate styles with your HTML document?",
    option: [
      { id: 0, text: "External CSS - The Element", isCorrect: false },
      { id: 1, text: "Imported CSS - @import Rule", isCorrect: false },
      { id: 2, text: "Both of the above", isCorrect: true },
      { id: 3, text: "None of the above", isCorrect: false },
    ],
    tags: ["CSS"],
  },
  {
    id: uuid(),
    statement:
      "  Which of the following is correct about Hex Code format of CSS colors?",
    option: [
      {
        id: 0,
        text: "The first two digits(RR) represent a red value",
        isCorrect: false,
      },
      { id: 1, text: "The next two are a green value(GG).", isCorrect: false },
      { id: 2, text: "The last are the blue value(BB).", isCorrect: false },
      { id: 3, text: "All of the above.", isCorrect: true },
    ],
    tags: ["CSS"],
  },
  {
    id: uuid(),
    statement:
      "Which of the following property is used to control the position of an image in the background?",
    option: [
      { id: 0, text: "background-color", isCorrect: false },
      { id: 1, text: "background-image", isCorrect: false },
      { id: 2, text: "background-repeat", isCorrect: false },
      { id: 3, text: "background-position", isCorrect: true },
    ],
    tags: ["CSS"],
  },
  {
    id: uuid(),
    statement:
      "Which of the following property is used to set the text direction?",
    option: [
      { id: 0, text: "color", isCorrect: false },
      { id: 1, text: "direction", isCorrect: true },
      { id: 2, text: "letter-spacing", isCorrect: false },
      { id: 3, text: "word-spacing", isCorrect: false },
    ],
    tags: ["CSS"],
  },
  {
    id: uuid(),
    statement:
      "Which of the following property is used to capitalize text or convert text to uppercase or lowercase letters?",
    option: [
      { id: 0, text: "text-indent", isCorrect: false },
      { id: 1, text: "text-align", isCorrect: false },
      { id: 2, text: "text-decoration", isCorrect: false },
      { id: 3, text: "text-transform", isCorrect: true },
    ],
    tags: ["CSS"],
  },
  {
    id: uuid(),
    statement:
      "Which of the following property specifies whether a border should be solid, dashed line, double line, or one of the other possible values?",
    option: [
      { id: 0, text: "border-color", isCorrect: false },
      { id: 1, text: "border-style", isCorrect: false },
      { id: 2, text: "border-width", isCorrect: false },
      { id: 3, text: "border-bottom-color", isCorrect: true },
    ],
    tags: ["CSS"],
  },
  {
    id: uuid(),
    statement:
      " Which of the following property changes the width of top border?",
    option: [
      { id: 0, text: "border-bottom-width", isCorrect: false },
      { id: 1, text: "border-top-width", isCorrect: true },
      { id: 2, text: "border-left-width", isCorrect: false },
      { id: 3, text: "border-right-width", isCorrect: false },
    ],
    tags: ["CSS"],
  },
  {
    id: uuid(),
    statement:
      " Which of the following property changes the width of top border?Which of the following property allows you to control the shape or appearance of the marker of a list?",
    option: [
      { id: 0, text: "list-style-type", isCorrect: true },
      { id: 1, text: "list-style-position", isCorrect: false },
      { id: 2, text: "list-style-image", isCorrect: false },
      { id: 3, text: "list-style", isCorrect: false },
    ],
    tags: ["CSS"],
  },
  {
    id: uuid(),
    statement:
      "Which of the following property specifies the left padding of an element?",
    option: [
      { id: 0, text: "padding-bottom", isCorrect: false },
      { id: 1, text: "padding-top", isCorrect: false },
      { id: 2, text: "padding-left", isCorrect: true },
      { id: 3, text: "padding-right", isCorrect: false },
    ],
    tags: ["CSS"],
  },
  {
    id: uuid(),
    statement:
      "Look at this series: 12, 11, 13, 12, 14, 13, … What number should come next?",
    option: [
      { id: 0, text: "10", isCorrect: false },
      { id: 1, text: "16", isCorrect: false },
      { id: 2, text: "13", isCorrect: false },
      { id: 3, text: "15", isCorrect: true },
    ],
    tags: ["LR"],
  },
  {
    id: uuid(),
    statement:
      "Look at this series: 36, 34, 30, 28, 24, … What number should come next?",
    option: [
      { id: 0, text: "22", isCorrect: true },
      { id: 1, text: "26", isCorrect: false },
      { id: 2, text: "23", isCorrect: false },
      { id: 3, text: "20", isCorrect: false },
    ],
    tags: ["LR"],
  },
  {
    id: uuid(),
    statement:
      "Look at this series: 7, 10, 8, 11, 9, 12, … What number should come next?",
    option: [
      { id: 0, text: "7", isCorrect: false },
      { id: 1, text: "12", isCorrect: false },
      { id: 2, text: "10", isCorrect: true },
      { id: 3, text: "13", isCorrect: false },
    ],
    tags: ["LR"],
  },
  {
    id: uuid(),
    statement:
      "Look at this series: 2, 1, (1/2), (1/4), … What number should come next?",
    option: [
      { id: 0, text: "(1/3)", isCorrect: false },
      { id: 1, text: "(1/8)", isCorrect: true },
      { id: 2, text: "(2/8)", isCorrect: false },
      { id: 3, text: "(1/16)", isCorrect: false },
    ],
    tags: ["LR"],
  },
  {
    id: uuid(),
    statement:
      "Look at this series: 80, 10, 70, 15, 60, … What number should come next?",
    option: [
      { id: 0, text: "20", isCorrect: true },
      { id: 1, text: "25", isCorrect: false },
      { id: 2, text: "30", isCorrect: false },
      { id: 3, text: "50", isCorrect: false },
    ],
    tags: ["LR"],
    level: "EASY",
  },
  {
    id: uuid(),
    statement: "Which word does NOT belong with the others?",
    option: [
      { id: 0, text: "index", isCorrect: false },
      { id: 1, text: "glosasary", isCorrect: false },
      { id: 2, text: "chapter", isCorrect: false },
      { id: 3, text: "book", isCorrect: true },
    ],
    tags: ["LR"],
    level: "EASY",
  },
  {
    id: uuid(),
    statement: "Which word is the odd man out?",
    option: [
      { id: 0, text: "trivial", isCorrect: false },
      { id: 1, text: "unimportant", isCorrect: false },
      { id: 2, text: "important", isCorrect: true },
      { id: 3, text: "insignificant", isCorrect: false },
    ],
    tags: ["LR"],
    level: "EASY",
  },
  {
    id: uuid(),
    statement: "Which word does NOT belong with the others?",
    option: [
      { id: 0, text: "wing", isCorrect: false },
      { id: 1, text: "fin", isCorrect: false },
      { id: 2, text: "beak", isCorrect: true },
      { id: 3, text: "rudder", isCorrect: false },
    ],
    tags: ["LR"],
    level: "EASY",
  },
  {
    id: uuid(),
    statement: "Which word is the odd man out?",
    option: [
      { id: 0, text: "hate", isCorrect: true },
      { id: 1, text: "fondness", isCorrect: false },
      { id: 2, text: "liking", isCorrect: false },
      { id: 3, text: "attachment", isCorrect: false },
    ],
    tags: ["LR"],
    level: "EASY",
  },
  {
    id: uuid(),
    statement: "Pick the odd man out?",
    option: [
      { id: 0, text: "just", isCorrect: false },
      { id: 1, text: "fair", isCorrect: false },
      { id: 2, text: "equitable", isCorrect: true },
      { id: 3, text: "biased", isCorrect: false },
    ],
    tags: ["LR"],
    level: "EASY",
  },
];
