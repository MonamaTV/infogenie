import translate from 'google-translate-api-x';
import axios  from "axios";


export async function getTranslation( textToTranslate , languageFrom , languageTo ) {
    // const axios = require('axios');

    const options = {
        method: 'POST',
        url: 'https://google-translator9.p.rapidapi.com/v2',
        headers: {
          'x-rapidapi-key': '10eff2ac28mshf1927d6a85dbf38p15fd16jsna437eba8f6c5',
          'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
          q: textToTranslate,
          source: languageFrom,
          target: languageTo,
          format: 'text'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          return await response.data
      } catch (error) {
          console.error(error);
      }
}


export async function getLanguageIso( textToTranslate) {

    const options = {
        method: 'POST',
        url: 'https://google-translator9.p.rapidapi.com/v2/detect',
        headers: {
          'x-rapidapi-key': '10eff2ac28mshf1927d6a85dbf38p15fd16jsna437eba8f6c5',
          'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {q: textToTranslate}
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}


