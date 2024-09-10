let quiz = {
  HTML: [
    {
      question: "Wie definiert man einen Hyperlink in HTML?",
      answers: {
        answer1: "&lt;a href='url'&gt;Linktext&lt;/a&gt;",
        answer2: "&lt;link href='url'&gt;Linktext&lt;/link&gt;",
        answer3: "&lt;url href='link'&gt;Linktext&lt;/url&gt;",
        answer4: "&lt;a url='link'&gt;Linktext&lt;/a&gt;",
      },
      right_answer: 1,
    },
    {
      question: "Welches HTML-Tag wird verwendet, um eine Überschrift zu erstellen?",
      answers: {
        answer1: "&lt;title&gt;",
        answer2: "&lt;h1&gt;",
        answer3: "&lt;head&gt;",
        answer4: "&lt;header&gt;",
      },
      right_answer: 2,
    },
    {
      question: "Wie erstellt man eine geordnete Liste in HTML?",
      answers: {
        answer1: "&lt;list&gt;",
        answer2: "&lt;ordered&gt;",
        answer3: "&lt;ul&gt;",
        answer4: "&lt;ol&gt;",
      },
      right_answer: 4,
    },
    {
      question: "Welches HTML-Tag wird verwendet, um ein Bild in eine Webseite einzufügen?",
      answers: {
        answer1: "&lt;figure&gt;",
        answer2: "&lt;img&gt;",
        answer3: "&lt;pic&gt;",
        answer4: "&lt;image&gt;",
      },
      right_answer: 2,
    },
    {
      question: "Welches Attribut verwendet man, um einem Bild eine Quelle zuzuweisen?",
      answers: {
        answer1: "link",
        answer2: "href",
        answer3: "src",
        answer4: "source",
      },
      right_answer: 3,
    },
    {
      question: "Wie erstellt man ein Formular in HTML?",
      answers: {
        answer1: "&lt;submit&gt; ... &lt;/submit&gt;",
        answer2: "&lt;form&gt; ... &lt;/form&gt;",
        answer3: "&lt;input&gt; ... &lt;/input&gt;",
        answer4: "&lt;field&gt; ... &lt;/field&gt;",
      },
      right_answer: 2,
    },
  ],
  CSS: [
    {
      question: "Wie ändert man die Textfarbe in CSS?",
      answers: {
        answer1: "font-color",
        answer2: "background-color",
        answer3: "color",
        answer4: "text-color",
      },
      right_answer: 3,
    },
    {
      question: "Welcher CSS-Befehl wird verwendet, um einen Hintergrund festzulegen?",
      answers: {
        answer1: "background-style",
        answer2: "bg-color",
        answer3: "color",
        answer4: "background-color",
      },
      right_answer: 4,
    },
    {
      question: "Wie definiert man eine Schriftgröße in CSS?",
      answers: {
        answer1: "font-size",
        answer2: "font-style",
        answer3: "text-size",
        answer4: "size-font",
      },
      right_answer: 1,
    },
    {
      question: "Wie wird eine Klasse in CSS ausgewählt?",
      answers: {
        answer1: "classname",
        answer2: "*classname",
        answer3: ".classname",
        answer4: "#classname",
      },
      right_answer: 3,
    },
    {
      question: "Wie positioniert man ein Element absolut?",
      answers: {
        answer1: "position: static;",
        answer2: "position: relative;",
        answer3: "position: fixed;",
        answer4: "position: absolute;",
      },
      right_answer: 4,
    },
    {
      question: "Welches der folgenden Pseudo-Klassen wird auf das erste Kind eines Elements angewendet?",
      answers: {
        answer1: ":nth-child",
        answer2: ":first-child",
        answer3: ":last-child",
        answer4: ":child",
      },
      right_answer: 2,
    },
    {
      question: "Wie ändert man die Schriftart in CSS?",
      answers: {
        answer1: "font-type",
        answer2: "font-style",
        answer3: "text-font",
        answer4: "font-family",
      },
      right_answer: 4,
    },
  ],
  JavaScript: [
    {
      question: "Wie definiert man in Javascript eine Variable?",
      answers: {
        answer1: "100 = let rate;",
        answer2: "let 100 = rate;",
        answer3: "rate = 100;",
        answer4: "let rate = 100;",
      },
      right_answer: 4,
    },
    {
      question: "Wie erstellt man eine Funktion in JavaScript?",
      answers: {
        answer1: "myFunction = function {}",
        answer2: "create function myFunction() {}",
        answer3: "function myFunction() {}",
        answer4: "function:myFunction() {}",
      },
      right_answer: 3,
    },
    {
      question: "Wie greift man auf das erste Element eines Arrays zu?",
      answers: {
        answer1: "array.firstElement()",
        answer2: "array.first()",
        answer3: "array[1]",
        answer4: "array[0]",
      },
      right_answer: 4,
    },
    {
      question: "Welches Schlüsselwort verwendet man, um eine konstante Variable in JavaScript zu deklarieren?",
      answers: {
        answer1: "const",
        answer2: "constant",
        answer3: "var",
        answer4: "let",
      },
      right_answer: 1,
    },
    {
      question: "Welches der folgenden ist ein JavaScript-Framework?",
      answers: {
        answer1: "Laravel",
        answer2: "Django",
        answer3: "Angular",
        answer4: "Flask",
      },
      right_answer: 3,
    },
  ],
  Angular: [
    {
      question: "Welches der folgenden ist eine Angular-Direktive?",
      answers: {
        answer1: "v-if",
        answer2: "*ngIf",
        answer3: "*vIf",
        answer4: "ng-show",
      },
      right_answer: 2,
    },
    {
      question: "Wie bindet man Daten in Angular an HTML?",
      answers: {
        answer1: "{data}",
        answer2: "{{data}}",
        answer3: "{{data}",
        answer4: "[data]",
      },
      right_answer: 2,
    },
    {
      question: "Was wird benötigt, um einen Angular-Service zu erstellen?",
      answers: {
        answer1: "@Service()",
        answer2: "inject()",
        answer3: "@Injectable()",
        answer4: "service()",
      },
      right_answer: 3,
    },
    {
      question: "Was ist der Standard-Port, auf dem eine Angular-App läuft?",
      answers: {
        answer1: "3000",
        answer2: "4200",
        answer3: "8080",
        answer4: "8000",
      },
      right_answer: 2,
    },
  ],
};
