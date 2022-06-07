import { v4 as uuid } from "uuid";

export const questions = [
  {
    id: uuid(),
    statement: "What does HTML stands for?",
    0: "Home Tool Markup Language",
    1: "Hypertext Markup Language",
    2: "Hyperlinks and Text Markup Language",
    3: "none of the above",
    correct_option: "1",
    tags: ["HTML"],
    level: "EASY",
  },
  {
    id: uuid(),
    statement: "How is document type initialized in HTML5?",
    0: "</DOCTYPE HTML>",
    1: "</DOCTYPE>",
    2: "<!DOCTYPE HTML>",
    3: "</DOCTYPE html>",
    correct_option: "2",
    tags: ["HTML"],
    level: "EASY",
  },
  {
    id: uuid(),
    statement:
      "Which of the following HTML Elements is used for making any text bold ?",
    0: "<p>",
    1: "<i>",
    2: "<li>",
    3: "<b>",
    correct_option: "3",
    tags: ["HTML"],
    level: "EASY",
  },
  {
    id: uuid(),
    statement:
      "Which of the following HTML element is used for creating an unordered list?",
    0: "<ui>",
    1: "<i>",
    2: "<em>",
    3: "<ul>",
    correct_option: "3",
    tags: ["HTML"],
    level: "EASY",
  },
  {
    id: uuid(),
    statement: "Which of the following characters indicate closing of a tag? ",
    0: ".",
    1: "/",
    2: "//",
    3: "!",
    correct_option: "2",
    tags: ["HTML"],
    level: "EASY",
  },
  {
    id: uuid(),
    statement: "What is the font-size of the h1 heading tag?",
    0: "3.5em",
    1: "2.17em",
    2: "2em",
    3: "1.5em",
    correct_option: "2",
    tags: ["HTML"],
    level: "EASY",
  },
  {
    id: uuid(),
    statement: "How many heading tags are there in HTML5?",
    0: "2",
    1: "3",
    2: "5",
    3: "6",
    correct_option: "3",
    tags: ["HTML"],
    level: "EASY",
  },
  {
    id: uuid(),
    statement: "How many attributes are there in HTML5?",
    0: "2",
    1: "4",
    2: "1",
    3: "5",
    correct_option: "0",
    tags: ["HTML"],
    level: "EASY",
  },
  {
    id: uuid(),
    statement:
      "Which of the following attributes is used to add link to any element?",
    0: "link",
    1: "ref",
    2: "href",
    3: "newref",
    correct_option: "2",
    tags: ["HTML"],
    level: "EASY",
  },
  {
    id: uuid(),
    statement:
      "Which of the following is the correct way of creating an hyperlink in HTML?",
    0: "<a>www.geeksforgeeks.org <Geeksforgeeks /a>",
    1: "<a href=“www.geeksforgeeks.org” Geeksforgeeks /a>",
    2: "<a href= “www.geeksforgeeks.org”>Geeksforgeeks</a>",
    3: "<a link=“www.geeksforgeeks.org” Geeksforgeeks> </a>",
    correct_option: "3",
    tags: ["HTML"],
    level: "EASY",
  },
  // 1
  {
    id: uuid(),
    statement: "Which of the following is correct about CSS?",
    0: "CSS is used to control the style of a web document in a simple and easy way",
    1: "CSS is the acronym for 'Cascading Style Sheet'.",
    2: "You can write CSS once and then reuse same sheet in multiple HTML pages.",
    3: "All of the above",
    correct_option: "3",
    tags: ["CSS"],
    level: "EASY",
  },
  // 2
  {
    id: uuid(),
    statement:
      " Which of the following is a way to associate styles with your HTML document?",
    0: "External CSS - The Element",
    1: "Imported CSS - @import Rule",
    2: "Both of the above.",
    3: "None of the above.",
    correct_option: "2",
    tags: ["CSS"],
    level: "EASY",
  },
  // 3
  {
    id: uuid(),
    statement:
      "  Which of the following is correct about Hex Code format of CSS colors?",
    0: "The first two digits(RR) represent a red value",
    1: "The next two are a green value(GG).",
    2: "The last are the blue value(BB).",
    3: "All of the above.",
    correct_option: "3",
    tags: ["CSS"],
    level: "EASY",
  },
  // 4
  {
    id: uuid(),
    statement:
      "Which of the following property is used to control the position of an image in the background?",
    0: "background-color",
    1: "background-image",
    2: "background-repeat",
    3: "background-position",
    correct_option: "3",
    tags: ["CSS"],
    level: "EASY",
  },
  // 5
  {
    id: uuid(),
    statement:
      "Which of the following property is used to set the text direction?",
    0: "color",
    1: "direction",
    2: "letter-spacing",
    3: "word-spacing",
    correct_option: "1",
    tags: ["CSS"],
    level: "EASY",
  },
  // 6
  {
    id: uuid(),
    statement:
      "Which of the following property is used to capitalize text or convert text to uppercase or lowercase letters?",
    0: "text-indent",
    1: "text-align",
    2: "text-decoration",
    3: "text-transform",
    correct_option: "3",
    tags: ["CSS"],
    level: "EASY",
  },
  // 7
  {
    id: uuid(),
    statement:
      "Which of the following property specifies whether a border should be solid, dashed line, double line, or one of the other possible values?",
    0: "border-color",
    1: "border-style",
    2: "border-width",
    3: "border-bottom-color",
    correct_option: "3",
    tags: ["CSS"],
    level: "EASY",
  },
  // 8
  {
    id: uuid(),
    statement:
      " Which of the following property changes the width of top border?",
    0: "border-bottom-width",
    1: "border-top-width",
    2: "border-left-width",
    3: "border-right-width",
    correct_option: "1",
    tags: ["CSS"],
    level: "EASY",
  },
  // 9
  {
    id: uuid(),
    statement:
      " Which of the following property changes the width of top border?Which of the following property allows you to control the shape or appearance of the marker of a list?",
    0: "list-style-type",
    1: "list-style-position",
    2: "list-style-image",
    3: "list-style",
    correct_option: "0",
    tags: ["CSS"],
    level: "EASY",
  },
  // 10
  {
    id: uuid(),
    statement:
      "Which of the following property specifies the left padding of an element?",
    0: "padding-bottom",
    1: "padding-top",
    2: "padding-left",
    3: "padding-right",
    correct_option: "2",
    tags: ["CSS"],
    level: "EASY",
  },
  // 1
  {
    id: uuid(),
    statement:
      "Look at this series: 12, 11, 13, 12, 14, 13, … What number should come next?",
    0: "10",
    1: "16",
    2: "13",
    3: "15",
    correct_option: "3",
    tags: ["LR"],
    level: "EASY",
  },
  // 2
  {
    id: uuid(),
    statement:
      "Look at this series: 36, 34, 30, 28, 24, … What number should come next?",
    0: "22",
    1: "26",
    2: "23",
    3: "20",
    correct_option: "0",
    tags: ["LR"],
    level: "EASY",
  },
  // 3
  {
    id: uuid(),
    statement:
      "Look at this series: 7, 10, 8, 11, 9, 12, … What number should come next?",
    0: "7",
    1: "12",
    2: "10",
    3: "13",
    correct_option: "2",
    tags: ["LR"],
  },
  // 4
  {
    id: uuid(),
    statement:
      "Look at this series: 2, 1, (1/2), (1/4), … What number should come next?",
    0: "(1/3)",
    1: "(1/8)",
    2: "(2/8)",
    3: "(1/16)",
    correct_option: "1",
    tags: ["LR"],
  },
  // 5
  {
    id: uuid(),
    statement:
      "Look at this series: 80, 10, 70, 15, 60, … What number should come next?",
    0: "20",
    1: "25",
    2: "30",
    3: "50",
    correct_option: "0",
    tags: ["LR"],
    level: "EASY",
  },
  // 6
  {
    id: uuid(),
    statement: "Which word does NOT belong with the others?",
    0: "index",
    1: "glossary",
    2: "chapter",
    3: "book",
    correct_option: "3",
    tags: ["LR"],
    level: "EASY",
  },
  // 7
  {
    id: uuid(),
    statement: "Which word is the odd man out?",
    0: "trivial",
    1: "unimportant",
    2: "important",
    3: "insignificant",
    correct_option: "2",
    tags: ["LR"],
    level: "EASY",
  },
  // 8
  {
    id: uuid(),
    statement: "Which word does NOT belong with the others?",
    0: "wing",
    1: "fin",
    2: "beak",
    3: "rudder",
    correct_option: "2",
    tags: ["LR"],
    level: "EASY",
  },
  // 9
  {
    id: uuid(),
    statement: "Which word is the odd man out?",
    0: "hate",
    1: "fondness",
    2: "liking",
    3: "attachment",
    correct_option: "0",
    tags: ["LR"],
    level: "EASY",
  },
  // 10
  {
    id: uuid(),
    statement: "Pick the odd man out?",
    0: "just",
    1: "fair",
    2: "equitable",
    3: "biased",
    correct_option: "3",
    tags: ["LR"],
    level: "EASY",
  },
];