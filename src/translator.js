import React, { useState } from "react";
import axios from "axios";

function LanguageTranslator() {
  const [inputText, setInputText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslation = () => {
    axios
      .post(
        "https://translation-api.example.com/translate",
        {
          text: inputText,
          source: sourceLanguage,
          target: targetLanguage,
        }
      )
      .then((response) => {
        setTranslatedText(response.data.translatedText);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Language Translator</h1>
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <select value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </select>
      <select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </select>
      <button onClick={handleTranslation}>Translate</button>
      <div>{translatedText}</div>
    </div>
  );
}

export default LanguageTranslator;