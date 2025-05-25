# TLDR This: AI-Powered Text Summarization Tool

This application provides a user-friendly interface for summarizing text using the power of Google's Gemini AI. Users can input text through various methods, choose from different input modes, and generate summaries tailored to their needs. The tool offers concise, detailed, fluent, creative, and bullet-point summaries to help users process information efficiently. It is built with Next.js, Tailwind CSS, and Google Gemini AI, and deployed on Google Cloud Run.

## Project Structure

The project is structured as follows:

- `assets/`: This directory contains screenshots of the output responses and deployment-related reports.

- `public/`: Static assets like images, icons, and fonts.

- `src/`: Core source code for the application.

  - `app/`: Main application components and logic.

    - `globals.css`: Global stylesheet for the application.
    - `layout.tsx`: Root layout component for the application.
    - `page.tsx`: Main page component for the application.

    - `api/summarize/`: Directory for API routes.
      - `route.js`: API endpoint for text summarization functionality using Gemini AI.

  - `components/`: Reusable React components for the application.

    - `CategoryLinks.tsx`: Navigation component for categories.
    - `SvgDecorations.tsx`: Decorative SVG elements for the application.

    - `Buttons/IconButton.tsx`: Button component with icon support.

    - `Inputs/`: Input components for text input methods.

      - `FileUpload.jsx`: File upload handling component for text input from text files.
      - `LinkPaste.jsx`: URL input component for text input from web URLs.
      - `ModeSelector.jsx`: Mode selection interface for choosing summarization modes.
      - `TextArea.jsx`: Text input component for typing or pasting text content.

    - `SpeechRecognition/SpeechRecognition.jsx`: Speech-to-text functionality for audio input as well as text-to-speech functionality for audio output.

  - `hooks/`: Custom React hooks for managing application logic.

    - `useSummarize.jsx`: Hook for managing text summarization logic and API calls.

  - `utils/`: Utility functions for text processing and conversion.
    - `rtfToText.js`: RTF to plain text conversion utility js function.

- `.env.example`: Environment variable template for project configuration.
- `.gitignore`: Specifies which files and directories should be ignored by Git.
- `LICENSE`: Project licensing information.
- `README.md`: Project documentation and setup instructions.
- `package.json`: Project dependencies and script configuration.
- `tailwind.config.ts`: Tailwind CSS configuration for utility-first styling.
- `tsconfig.json`: TypeScript compiler configuration.

## Technologies Used

- **JavaScript**: High-level programming language for building web applications.
- **TypeScript**: Superset of JavaScript that adds static types to the language.
- **Tailwind CSS**: Utility-first CSS framework for styling web applications.
- **React**: JavaScript library for building user interfaces.
- **Next.js**: React framework for building user interfaces.
- **Google Gemini AI**: Provides powerful AI capabilities for text summarization.
- **Google Cloud Run**: Serverless platform for deploying and scaling containerized applications quickly powered by Google Cloud Platform.
- **Google Cloud Build**: Continuous integration and delivery platform for building, testing, and deploying applications on Google Cloud Platform.

## Getting Started

To get started with this project, follow the steps below:

1. Clone the repository: `git clone https://github.com/sitamgithub-MSIT/TLDR-this.git`
2. Change the directory: `cd TLDR-this`
3. Install the required dependencies: `npm install`
4. Run the application: `npm run dev`

**Note**: You need to have the Gemini API key to run the application. You can get the API key by signing up on the [Gemini API](https://aistudio.google.com/). Once you have the API key, create a `.env` file in the root directory and add the following environment variables provided in the `.env.example` file. Replace the values with your API key.

```bash
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Open your local host to view the web application in your browser at `http://localhost:3000/`. You can also access a live version of the application [here](https://tldr-this-vgxcoovsla-uc.a.run.app/), which is deployed on Google Cloud Run.

## Deployment

To deploy the application to Google Cloud Run, follow the dedicated deployment guide in Google Cloud documentation. The deployment process involves building a container image, pushing it to Google Artifact Registry, and deploying it to Google Cloud Run. Find it [here](https://cloud.google.com/run/docs/quickstarts/frameworks/deploy-nextjs-service).

## Usage

This AI-powered text summarization tool is designed to help users quickly generate concise, detailed, fluent, creative, or bullet-point summaries of text content. Follow these steps to use the tool effectively:

1. **Input Text**: Paste the text you want to summarize into the input area. There are options to input text by typing directly, pasting the web URL, uploading a text file, or recording audio.

2. **Select Mode**: Choose your preferred summarization mode:

   - **Concise Mode**: Provides a summary (40-60 words) that captures only the most essential points. Focus on the core message and key takeaways.

   - **Detailed Mode**: Generates a comprehensive summary (200-250 words) that covers main ideas and significant supporting details. Ensure a thorough representation of the original text's content and structure.

   - **Fluency Mode**: Creates a smooth, natural-sounding summary (100-150 words) that reads like a coherent piece of writing. Prioritize readability and flow while maintaining accuracy.

   - **Creative Mode**: Produces an engaging summary (80-120 words) using vivid language or analogies to make the content more memorable. Maintain the original meaning while adding a unique perspective.

   - **Bullet Points Mode**: Summarizes the content in 7-10 clear, concise bullet points. Each point should be a complete sentence capturing a key idea from the text.

3. **Summarize**: Summarized text will be generated based on the selected mode and displayed on the output area.

4. **Copy to Clipboard**: Use the "Copy to Clipboard" icon to copy the generated summary to your clipboard.

5. **Interactive Icons**: The icons like "Speaker" provide additional functionalities like text-to-speech for audio output. The "Star" and "Like & Dislike" icons allow users to star or rate the summary based on their preferences respectively.

## Results

The results of the text summarization tool are accurate, concise, and tailored to the user's selected mode. The Gemini AI-powered summarization ensures high-quality summaries that capture the essence of the original text effectively. Different input methods and summarization modes provide flexibility and customization options for users to meet their specific needs.

**Note**: To see results regarding testing and deployment, please refer to the `assets` folder in the repository.

## Conclusion

This AI-powered text summarization tool aims to make information processing easier and more efficient. By leveraging Google's Gemini AI, it provides accurate and tailored summaries to meet users' needs.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please raise an issue to discuss the changes you would like to make. Once the changes are approved, you can create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or suggestions regarding the project, feel free to reach out to me on my GitHub profile.

Happy coding! 🚀
