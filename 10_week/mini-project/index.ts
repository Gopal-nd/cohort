
import fs from 'fs'
import {getSubtitles} from 'youtube-captions-scraper'

import express, { type Request, type Response } from 'express'

const app = express()
const port = process.env.PORT || 3000;


app.get('/',async(req:Request,res:Response)=>{
  res.json({message:"i am alive"})
})

async function extractCaptions(videoUrl, outputFile = 'captions.txt') {
  try {
    // Extract video ID from the URL
    const videoId = new URL("https://www.youtube.com/watch?v=zaiBxaTjMTA").searchParams.get('v');

    if (!videoId) {
      throw new Error('Invalid YouTube URL. Please check and try again.');
    }

    // Fetch captions (by default in English)
    const captions = await getSubtitles({
      videoID: '1-FRZRvLxFw',
      lang: 'en', // You can change language if needed
    });

    // Write captions to a text file
    const textCaptions = captions.map((caption) => caption.text).join('\n');
    fs.writeFileSync(outputFile, textCaptions);

    console.log(`Captions successfully saved to ${outputFile}`);
  } catch (error) {
    console.error('Error fetching captions:', error.message);
  }
}

// Example usage
const videoUrl = 'https://www.youtube.com/watch?v=VIDEO_ID';
extractCaptions(videoUrl);


app.listen(port,()=>{console.log('app running on port:',port)})


